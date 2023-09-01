// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter } from "../codegen/Tables.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { Log,Counter,Player,Game ,GameData,GameState,GameMap,MapItem,MapItemTableId,MapItemData,PlayerData,TransactionList,TransactionListData,PlayerTableId,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
import { IWorld } from "../../src/codegen/world/IWorld.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";
import { getKeysInTable } from "@latticexyz/world/src/modules/keysintable/getKeysInTable.sol";
import { query, QueryFragment, QueryType } from "@latticexyz/world/src/modules/keysintable/query.sol";
import { getKeysWithValue } from "@latticexyz/world/src/modules/keyswithvalue/getKeysWithValue.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";


contract MapSystem is System {
    function move(uint256 targetX, uint256 targetY) public returns(bool){
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player!!!");
        
        PlayerData memory playerData = Player.get(player);
        bool fff = isMoveValid(playerData.x, playerData.y, targetX, targetY);
        require(fff, concatenateStringWithUint("can only move to adjacent spaces",fff?1:2));
    
        Player.setX(player,targetX);
        Player.setY(player,targetY);
        //Calculate all items to find which he got
        bytes32[] memory keysWithValue = getKeysWithValue(MapItemTableId, MapItem.encode(targetX, targetY));
        if(keysWithValue.length != 0){
            for (uint256 i = 0; i < keysWithValue.length; i++) {
                bytes32 key = keysWithValue[i];
                MapItem.deleteRecord(key);
                
                PlayerData memory pd = Player.get(player);
                Player.setMoney(player,pd.money + 10);
            }
        }

        QueryFragment[] memory fragments = new QueryFragment[](1);
        fragments[0] = QueryFragment(QueryType.Has, PlayerTableId, new bytes(0));
        bytes32[][] memory keyTuples = query(fragments);

        
        for (uint256 a = 0; a < keyTuples.length; a++) {
            bytes32[] memory allPlayers = keyTuples[a];

            for (uint256 i = 0; i < allPlayers.length; i++) {
                bytes32 tmpPlayer = allPlayers[i];

                if(tmpPlayer == player) continue;
                PlayerData memory pd = Player.get(tmpPlayer);
                bool withinFriendArea = calculateDistance(targetX,targetY,pd.x,pd.y,2);

                // Log.set(player,withinFriendArea?1:2);

                if(withinFriendArea){
                    checkAndPushList(tmpPlayer,player);
                    // TransactionListData memory ptld = TransactionList.get(tmpPlayer);
                    // bool knowTmpP = false;

                    // for (uint256 j = 0; j < ptld.list.length; j++) {
                    //     bytes32 tradeFriend = ptld.list[j];
                        
                    //     if (tradeFriend == player) {
                    //         knowTmpP = true;
                    //         break;
                    //     }
                    // }

                    // if (!knowTmpP) {
                    //     TransactionList.pushList(tmpPlayer,player);
                    // }


                    // checkAndPushList(player,tmpPlayer);
                    TransactionListData memory ptld2 = TransactionList.get(player);
                    bool knowTmpP2 = false;

                    for (uint256 j = 0; j < ptld2.list.length; j++) {
                        bytes32 tradeFriend = ptld2.list[j];
                        
                        if (tradeFriend == tmpPlayer) {
                            knowTmpP2 = true;
                            break;
                        }
                    }

                    if (!knowTmpP2) {
                        TransactionList.pushList(player,tmpPlayer);
                    }
                }
            }
        }

        return true;
    }

    function checkAndPushList(bytes32 seekPlayer, bytes32 findPlayer) public {

        TransactionListData memory ptld = TransactionList.get(seekPlayer);
        bool knowTmpP = false;

        for (uint256 j = 0; j < ptld.list.length; j++) {
            bytes32 tradeFriend = ptld.list[j];
            
            if (tradeFriend == findPlayer) {
                knowTmpP = true;
                break;
            }
        }

        if (!knowTmpP) {
            TransactionList.pushList(seekPlayer,findPlayer);
        }
    }
    // function addToList(bytes32[] memory oldList, bytes32 newData) public pure returns (bytes32[] memory) {
    //     bytes32[] memory newList = new bytes32[](oldList.length + 1);
        
    //     for (uint256 i = 0; i < oldList.length; i++) {
    //         newList[i] = oldList[i];
    //     }
        
    //     newList[oldList.length] = newData;
        
    //     return newList;
    // }

    function calculateDistance(uint256 x1, uint256 y1, uint256 x2, uint256 y2, int256 limit) public pure returns (bool) {
        int256 deltaX = int256(x2) - int256(x1);
        int256 deltaY = int256(y2) - int256(y1);
        
        int256 absDeltaX = abs(deltaX);
        int256 absDeltaY = abs(deltaY);

        if (absDeltaX <= limit && absDeltaY <= limit && (absDeltaX + absDeltaY) < limit * 2) {
            return true;
        } else {
            return false;
        }
    }


    // function calculateDistance(uint256 x1, uint256 y1, uint256 x2, uint256 y2) public pure returns (uint256) {
    //     int256 deltaX = int256(x2) - int256(x1);
    //     int256 deltaY = int256(y2) - int256(y1);

    //     int256 steps = max(abs(deltaX), abs(deltaY));

    //     return uint256(steps);
    // }

    // 辅助函数：返回较大值
    function max(int256 a, int256 b) private pure returns (int256) {
        return a > b ? a : b;
    }

    function concatenateStringWithUint(string memory message ,uint256 number) public pure returns (string memory) {

        string memory numberString = uintToString(number);
        bytes memory messageBytes = bytes(message);
        bytes memory result = new bytes(messageBytes.length + bytes(numberString).length);

        uint256 i;
        uint256 j;

        for (i = 0; i < messageBytes.length; i++) {
            result[j++] = messageBytes[i];
        }

        bytes memory numberBytes = bytes(numberString);

        for (i = 0; i < numberBytes.length; i++) {
            result[j++] = numberBytes[i];
        }

        return string(result);
    }

    function concatenateBytesWithUint(string memory message ,uint256 number) public pure returns (bytes memory) {

        string memory numberString = uintToString(number);
        bytes memory messageBytes = bytes(message);
        bytes memory result = new bytes(messageBytes.length + bytes(numberString).length);

        uint256 i;
        uint256 j;

        for (i = 0; i < messageBytes.length; i++) {
            result[j++] = messageBytes[i];
        }

        bytes memory numberBytes = bytes(numberString);

        for (i = 0; i < numberBytes.length; i++) {
            result[j++] = numberBytes[i];
        }

        return result;
    }

    function uintToString(uint256 value) private pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        
        uint256 temp = value;
        uint256 digits;
        
        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        bytes memory buffer = new bytes(digits);
        
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        
        return string(buffer);
    }

    function isMoveValid(uint256 currentX, uint256 currentY, uint256 targetX, uint256 targetY) private pure returns (bool) {
        // 检查起始位置和目标位置的坐标差值
        int256 deltaX = int256(targetX) - int256(currentX);
        int256 deltaY = int256(targetY) - int256(currentY);

        // 六边形战棋地图中，横向和纵向移动距离只能为正负1或0（保持当前位置）
        if (abs(deltaX) > 1 || abs(deltaY) > 1) {
            return false;
        }

        return true;
    }

    function abs(int256 value) private pure returns (int256) {
        return value >= 0 ? value : -value;
    }
}

// gameId:'uint256',
//         state:'uint32',
//         money:'uint32',
//         x:'uint256',
//         y:'uint256',
//         assets:'bytes',
//         transactions:'bytes'