// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter } from "../codegen/Tables.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { Counter,Player,Game ,GameData,GameState,GameMap,MapItem,PlayerData,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
import { IWorld } from "../../src/codegen/world/IWorld.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";


contract MapSystem is System {
    event LogMessage(string message);

    function log(string memory message) public {
        emit LogMessage(message);
    }
    function move(uint256 targetX, uint256 targetY) public returns(bool){
        bytes32 player = addressToEntityKey(_msgSender());
        require(IsPlayer.get(player), "Not a player!!!");
        // string memory message = "Doing something";
        // log(uintToString(targetX));
        // log(uintToString(targetY));
        PlayerData memory playerData = Player.get(player);
        bool fff = isMoveValid(playerData.x, playerData.y, targetX, targetY);
        require(fff, concatenateStringWithUint("can only move to adjacent spaces",fff?1:2));
    
        Player.set(player, playerData.gameId, playerData.state, playerData.money, targetX, targetY,playerData.assets,playerData.transactions);
        return true;
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