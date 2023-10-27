// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { PlayerGameResult,TradeList,TransactionList,RaiseColddown, AssetsList, Log,Player,Game ,GameData,GameState,GameMap,MapItem,PlayerData,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
import { IWorld } from "../../src/codegen/world/IWorld.sol";
import { getUniqueEntity } from "@latticexyz/world-modules/src/modules/uniqueentity/getUniqueEntity.sol";


contract LobbySystem is System {
    function joinGame() public returns (uint32){
        bytes32 player = addressToEntityKey(address(_msgSender()));
        require(!IsPlayer.get(player),"Already is a player!");

        IsPlayer.set(player,true);

        GameData memory gameData = Game.get();
        GameMapData memory gameMap = GameMap.get();
        uint[][] memory mapArray = bytesToUintArray(gameMap.mapArray,20,20);
        uint256[2][] memory coordinations = getBornCoordinates(mapArray,20,20,1);

        uint32 playerState = 2;
        Player.set(player, gameData.gameId, playerState, 50, coordinations[0][0],coordinations[0][1]);

        bytes32[] memory list = new bytes32[](0);
        TransactionList.set(player, list);

        AssetsList.set(player,0,0,0,0,0,0);

        RaiseColddown.set(player,0,0);

        PlayerGameResult.deleteRecord(player);
        
        TradeList.set(player,'');

        return 2;
    }

    //A player think the game is about to start, ask himself's game info
    function askStart() public returns(uint32){
        bytes32 player = addressToEntityKey(address(_msgSender()));
        if(!IsPlayer.get(player)){
            return 1;
        }

        GameData memory gameData = Game.get();
        uint32 gameState = GameState.get();
        uint256 nowTime = block.timestamp;

        //Check game state
        if(gameState == 1){
            if(gameData.startTime <= nowTime && gameData.endTime > nowTime){
                GameState.set(2);//Game really started
                
                // initGameMap();
                GameMapData memory gameMap = GameMap.get();
                uint[][] memory mapArray = bytesToUintArray(gameMap.mapArray,20,20);
                initMapItems(mapArray,20,20);
                return 2;
            }else{
                return 4;
            }
        }
                
        return 3;
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

    function initMapItems(uint[][] memory mapArray,uint256 width,uint256 height) private{
        uint256 itemCoverRate = 20; // 假设itemCoverRate以百分比形式给出，例如20表示20%
        uint256 d = (height * itemCoverRate) / 100;
        uint itemCount = floor(width , d);
        uint256[2][] memory coordinations = getRandomCoordinates(mapArray,width,height,itemCount);

        uint len = coordinations.length;
        for (uint i = 0; i < len; i++) {
            bytes32 newEntity = getUniqueEntity();
            uint[2] memory elem = coordinations[i];
            uint x = elem[0];
            uint y = elem[1];
            MapItem.set(newEntity, x, y);
        }
    }

    function getRandomCoordinates(uint[][] memory mapArray,uint256 width,uint256 height, uint n) private view returns (uint[2][] memory) {
        uint[2][] memory coordinates = new uint[2][](n);
        uint remaining = 400;
        uint selectedCount = 0;
        uint[2][400] memory selectedCoordinates;

        for (uint i = 0; i < width; i++) {
            for (uint j = 0; j < height; j++) {
                if (remaining > 0 && selectedCount < n) {
                    uint randomIndex = uint(keccak256(abi.encode(block.timestamp, i, j))) % remaining;
                    
                    if (randomIndex < n - selectedCount && !isCoordinateSelected(selectedCoordinates, i, j)) {
                        coordinates[selectedCount] = [i, j];
                        selectedCoordinates[selectedCount] = [i, j];
                        selectedCount++;
                    }
                    
                    remaining--;
                } else {
                    break;
                }
            }
        }
        
        return coordinates;
    }

    function getBornCoordinates(uint[][] memory mapArray, uint256 width, uint256 height, uint n) private view returns (uint[2][] memory) {
        require(n <= ((12 - 8 + 1) * (12 - 8 + 1)), "Invalid number of coordinates requested."); // 校验所需坐标数量是否合法

        uint[2][] memory coordinates = new uint[2][](n);
        uint selectedCount = 0;

        while (selectedCount < n) {
            uint row = getRandomNumberInRange(8, 12); // 生成介于 8 和 12 之间的随机行号
            uint col = getRandomNumberInRange(8, 12); // 生成介于 8 和 12 之间的随机列号

            if (mapArray[row][col] == 0) { // 检查要选择的位置是否符合条件，例如等于 0
                coordinates[selectedCount] = [row, col];
                selectedCount++;
            }
        }

        return coordinates;
    }

    function getRandomNumberInRange(uint256 min, uint256 max) private view returns (uint256) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.prevrandao, msg.sender)));
        return (randomNumber % (max - min + 1)) + min;
    }

    function isCoordinateSelected(uint[2][400] memory selectedCoordinates, uint x, uint y) private pure returns (bool) {
        for (uint i = 0; i < selectedCoordinates.length; i++) {
            if (selectedCoordinates[i][0] == x && selectedCoordinates[i][1] == y) {
                return true;
            }
        }
        
        return false;
    }




    // 假设a和b都是整数，且b不为0
    function floor(uint256 a, uint256 b) private pure returns (uint256) {
        return a - (a % b);
    }

    function isEmpty(bytes32 data) private pure returns (bool) {
        return data == bytes32(0);
    }
}