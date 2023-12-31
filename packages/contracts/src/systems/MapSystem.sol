// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { IsEliminatedTableId,IsEliminated,HasDebt, Debt, OwnedCards, Log,Player,Game ,GameData,GameState,GameMap,MapItem,MapItemTableId,MapItemData,PlayerData,TransactionList,TransactionListData,PlayerTableId,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
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

        require(!isGameTimeUp(),"Game time up.");

        require(GameState.get() == 2,"Game is finished.");

        require(!IsEliminated.get(player),"You are already eliminated.");
        
        PlayerData memory playerData = Player.get(player);
        // GameMapData memory gameMap = GameMap.get();
        // uint[][] memory mapArray = bytesToUintArray(gameMap.mapArray,20,20);
        // require(mapArray[targetX][targetY] == 1,"value of map cell is not 1");

        bool fff = isMoveValid(playerData.x, playerData.y, targetX, targetY);
        require(fff, concatenateStringWithUint("can only move to adjacent spaces",fff?1:2));
        // mapArray[playerData.x][playerData.y] = 1;
        // mapArray[targetX][targetY] = 2;

        require(!HasDebt.get(player),"You have debt now.");

        uint32 debt = getDebt(player);
        Log.set(player,debt);
        if(debt > 0){
            HasDebt.set(player,true);
            Debt.set(player,debt);
        }
        // require(debt == 0,"You have debt, please pay it first.");

        //Check if a player on this block
        bool hasPlayer = hasPlayerOnBlock(player,targetX,targetY);
        require(!hasPlayer,"has player on this block");
        Player.setX(player,targetX);
        Player.setY(player,targetY);

        return true;
    }


    function pickCoin() public returns(uint32){
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player!!!");
        
        require(!isGameTimeUp(),"Game time up.");

        require(GameState.get() == 2,"Game is finished.");

        require(!HasDebt.get(player),"You have debt now.");
        uint32 debt = getDebt(player);
        Log.set(player,debt);
        if(debt > 0){
            HasDebt.set(player,true);
            Debt.set(player,debt);
        }

        PlayerData memory playerData = Player.get(player);

        bytes32[] memory keysWithValue = getKeysWithValue(MapItemTableId, MapItem.encode(playerData.x, playerData.y));
        uint gain = 0;
        if(keysWithValue.length != 0){
            for (uint256 i = 0; i < keysWithValue.length; i++) {
                bytes32 key = keysWithValue[i];
                MapItem.deleteRecord(key);
                
                PlayerData memory pd = Player.get(player);
                Player.setMoney(player,pd.money + 10);
                gain += 10;
            }
        }
        
        require(gain != 0,"Pick nothing");
        return 1;
    }

    function findPartner() public returns(uint32){
        bytes32 player = addressToEntityKey(_msgSender());
        require(!isGameTimeUp(),"Game time up.");
        require(IsPlayer.get(player), "Not a player!!!");
        require(GameState.get() == 2,"Game is finished.");

        //这个require必须放在检测的前面，否则一旦触发，该合约将不生效，且退回执行前状态
        require(!HasDebt.get(player),"You have debt now.");
        uint32 debt = getDebt(player);
        Log.set(player,debt);
        if(debt > 0){
            HasDebt.set(player,true);
            Debt.set(player,debt);
        }

        QueryFragment[] memory fragments = new QueryFragment[](2);
        fragments[0] = QueryFragment(QueryType.Has, PlayerTableId, new bytes(0));
        fragments[1] = QueryFragment(QueryType.Not, IsEliminatedTableId, new bytes(0));
        bytes32[][] memory keyTuples = query(fragments);

        uint findCount = 0;
        PlayerData memory me = Player.get(player);
        for (uint256 a = 0; a < keyTuples.length; a++) {
            bytes32[] memory allPlayers = keyTuples[a];

            for (uint256 i = 0; i < allPlayers.length; i++) {
                bytes32 tmpPlayer = allPlayers[i];

                if(tmpPlayer == player) continue;
                PlayerData memory pd = Player.get(tmpPlayer);
                bool withinFriendArea = calculateDistance(me.x,me.y,pd.x,pd.y,2);

                if(withinFriendArea){
                    if(checkAndPushList(player,tmpPlayer)){
                        findCount++;
                    }
                }
            }
        }
        
        require(findCount != 0,"Find nobody");
        return 1;
    }

    function hasPlayerOnBlock(bytes32 player,uint256 targetX,uint256 targetY) private returns(bool){
        QueryFragment[] memory fragments = new QueryFragment[](1);
        fragments[0] = QueryFragment(QueryType.Has, PlayerTableId, new bytes(0));
        bytes32[][] memory keyTuples = query(fragments);

        for (uint256 a = 0; a < keyTuples.length; a++) {
            bytes32[] memory allPlayers = keyTuples[a];

            for (uint256 i = 0; i < allPlayers.length; i++) {
                bytes32 tmpPlayer = allPlayers[i];

                if(tmpPlayer == player) continue;
                PlayerData memory pd = Player.get(tmpPlayer);
                
                if(pd.x == targetX && pd.y == targetY){
                    return true;
                }
            }
        }

        return false;
    }

    function checkAndPushList(bytes32 seekPlayer, bytes32 findPlayer) private returns(bool) {

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
            return true;
        }else{
            return false;
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

    function calculateDistance(uint256 x1, uint256 y1, uint256 x2, uint256 y2, int256 limit) private pure returns (bool) {
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

    function concatenateStringWithUint(string memory message ,uint256 number) private pure returns (string memory) {

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

    function concatenateBytesWithUint(string memory message ,uint256 number) private pure returns (bytes memory) {

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

    function isGameTimeUp() private view returns(bool){
        GameData memory game = Game.get();
        return block.timestamp >= game.endTime;
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

    function bytesToUintArray(bytes memory data, uint32 width, uint32 height) private pure returns (uint[][] memory) {
        require(data.length == width * height, "Invalid data length");

        uint[][] memory result = new uint[][](height);
        
        for (uint32 y = 0; y < height; y++) {
            result[y] = new uint[](width);

            for (uint32 x = 0; x < width; x++) {
                uint8 terrainType = uint8(data[(y * width) + x]);
                result[y][x] = terrainType;
            }
        }
        
        return result;
    }

    function getDebt(bytes32 player) private view returns (uint32) {
         uint256[] memory ownedCards = OwnedCards.get(player);
        uint32 debt = 0;
        require(ownedCards.length % 5 == 0, "Invalid array length");

        for (uint i = 0; i < ownedCards.length; i += 5) {
            // Check if the first element of the group is 0
            if (ownedCards[i] == 0) {
                // If it's 0, break the loop as the subsequent elements are all 0
                break;
            }

            // Update the fourth element of each group to 9999
            uint256 timeInterval = ownedCards[i + 2] * 60;
            if(ownedCards[i + 4] + timeInterval < block.timestamp){
                uint256 timeDiff = (block.timestamp - ownedCards[i + 4]);
                uint256 payTimes = timeDiff / timeInterval;
                // Log.set(player,payTimes);
                uint256 input = payTimes * (ownedCards[i + 1] * ownedCards[i + 3] / 100);
                // Log.set(player,input);

                debt += uint32(input);
            }
        }

        return debt;
    }
}