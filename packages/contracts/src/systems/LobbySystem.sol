// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter,Player,Game ,GameData,GameState,GameMap,MapItem,PlayerData,IsPlayer,GameMapData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
import { IWorld } from "../../src/codegen/world/IWorld.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

contract LobbySystem is System {
    function joinGame() public returns (uint32){
        bytes32 player = addressToEntityKey(address(_msgSender()));
        require(!IsPlayer.get(player),"Already is a player!");

        IsPlayer.set(player,true);

        GameData memory gameData = Game.get();
        GameMapData memory gameMap = GameMap.get();
        uint[][] memory mapArray = bytesToUintArray(gameMap.mapArray);
        uint[2][] memory coordinations = getRandomCoordinates(mapArray,8,8,1);

        uint32 playerState = 2;
        bytes memory assets = new bytes(0);
        bytes memory transactions = new bytes(0);
        Player.set(player, gameData.gameId, playerState, 50, coordinations[0][0],coordinations[0][1],assets, transactions);

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
                uint[][] memory mapArray = bytesToUintArray(gameMap.mapArray);
                initMapItems(mapArray,8,8);
                return 2;
            }else{
                return 4;
            }
        }
                
        return 3;
    }

    function bytesToUintArray(bytes memory data) public pure returns (uint[][] memory) {
        require(data.length % 32 == 0, "Invalid data length");

        uint numElements = data.length / 32;
        uint[][] memory result = new uint[][](numElements);
        
        assembly {
            // 获取数据的指针
            let ptr := add(data, 0x20)
            
            for {
                let i := 0
            } lt(i, numElements) {
                i := add(i, 1)
            } {
                let subPtr := add(ptr, mul(i, 32))
                mstore(add(result, mul(i, 0x20)), mload(subPtr))
            }
        }
        
        return result;
    }

    // function initGameMap() private{
    //     uint O = 0;//No map here
    //     uint N = 1;//Normal map block

    //     //Odd line is left and even line is right
    //     uint[8][8] memory map = [
    //         [O, N, N, N, N, N, N, O],
    //         [O, N, N, N, N, N, N, O],
    //         [O, N, N, N, N, N, N, O],
    //         [O, N, N, N, N, N, N, O],
    //         [O, N, N, N, N, N, N, O],
    //         [O, N, N, N, N, N, N, O],
    //         [O, N, N, N, N, N, N, O],
    //         [O, N, N, N, N, N, N, O]
    //     ];

    //     uint32 height = uint32(map.length);
    //     uint32 width = uint32(map[0].length);
    //     bytes memory terrain = new bytes(width * height);

    //     for (uint32 y = 0; y < height; y++) {
    //     for (uint32 x = 0; x < width; x++) {
    //             uint terrainType = map[y][x];
    //             if (terrainType == O) continue;
        
    //             terrain[(y * width) + x] = bytes1(uint8(terrainType));
    //         }
    //     }
    
    //     GameMap.set(width, height, terrain);

    //     initMapItems(convertArray(map));
    // }

    function convertArray(uint[8][8] memory fixedArray) public pure returns (uint[][] memory) {
        uint[][] memory dynamicArray = new uint[][](8);

        for (uint i = 0; i < 8; i++) {
            dynamicArray[i] = new uint[](8);
            for (uint j = 0; j < 8; j++) {
                dynamicArray[i][j] = fixedArray[i][j];
            }
        }

        return dynamicArray;
    }

    function initMapItems(uint[][] memory mapArray,uint256 width,uint256 height) private{
        uint256 itemCoverRate = 20; // 假设itemCoverRate以百分比形式给出，例如20表示20%
        uint256 d = (height * itemCoverRate) / 100;
        uint itemCount = floor(width , d);
        uint[2][] memory coordinations = getRandomCoordinates(mapArray,width,height,itemCount);

        uint len = coordinations.length;
        for (uint i = 0; i < len; i++) {
            bytes32 newEntity = getUniqueEntity();
            uint[2] memory elem = coordinations[i];
            uint x = elem[0];
            uint y = elem[1];
            MapItem.set(newEntity, x, y, 1);//1gold
        }
    }

    // function decodeMap(bytes memory terrain, uint32 width) private pure returns (uint[8][8] memory) {
    //     uint32 height = uint32(terrain.length) / width;
    //     uint[][] memory map = new uint[][](height);
        
    //     for (uint32 y = 0; y < height; y++) {
    //         map[y] = new uint[](width);
            
    //         for (uint32 x = 0; x < width; x++) {
    //             map[y][x] = uint8(terrain[(y * width) + x]);
    //         }
    //     }
        
    //     return map;
    // }

    function getRandomCoordinates(uint[][] memory mapArray,uint256 width,uint256 height, uint n) private view returns (uint[2][] memory) {
        uint[2][] memory coordinates = new uint[2][](n);
        uint remaining = 64;
        uint selectedCount = 0;
        uint[2][64] memory selectedCoordinates;

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

    function isCoordinateSelected(uint[2][64] memory selectedCoordinates, uint x, uint y) private pure returns (bool) {
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