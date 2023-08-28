// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter,Player,Game ,GameData,GameState,GameMap,MapItem,PlayerData,IsPlayer} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
import { IWorld } from "../../src/codegen/world/IWorld.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

contract LobbySystem is System {
    function joinGame() public returns (uint32){
        bytes32 player = addressToEntityKey(address(_msgSender()));
        require(!IsPlayer.get(player),"Already is a player!");

        IsPlayer.set(player,true);

        GameData memory gameData = Game.get();

        uint32 playerState = 2;
        bytes memory assets = new bytes(0);
        bytes memory transactions = new bytes(0);
        Player.set(player, gameData.gameId, playerState, 50, assets, transactions);

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
                
                initGameMap();
                return 2;
            }else{
                return 4;
            }
        }
                
        return 3;
    }

    function initGameMap() private{
        uint O = 0;//No map here
        uint N = 1;//Normal map block

        //Odd line is left and even line is right
        uint[8][8] memory map = [
            [O, N, N, N, N, N, N, O],
            [O, N, N, N, N, N, N, O],
            [O, N, N, N, N, N, N, O],
            [O, N, N, N, N, N, N, O],
            [O, N, N, N, N, N, N, O],
            [O, N, N, N, N, N, N, O],
            [O, N, N, N, N, N, N, O],
            [O, N, N, N, N, N, N, O]
        ];

        uint32 height = uint32(map.length);
        uint32 width = uint32(map[0].length);
        bytes memory terrain = new bytes(width * height);

        for (uint32 y = 0; y < height; y++) {
        for (uint32 x = 0; x < width; x++) {
                uint terrainType = map[y][x];
                if (terrainType == O) continue;
        
                terrain[(y * width) + x] = bytes1(uint8(terrainType));
            }
        }
    
        GameMap.set(width, height, terrain);

        initMapItems(map);
    }

    function initMapItems(uint[8][8] memory mapArray) private{
        uint256 itemCoverRate = 20; // 假设itemCoverRate以百分比形式给出，例如20表示20%
        uint256 d = (mapArray[0].length * itemCoverRate) / 100;
        uint itemCount = floor(mapArray.length , d);
        uint[2][] memory coordinations = getRandomCoordinates(mapArray,itemCount);

        uint len = coordinations.length;
        for (uint i = 0; i < len; i++) {
            bytes32 newEntity = getUniqueEntity();
            uint[2] memory elem = coordinations[i];
            uint x = elem[0];
            uint y = elem[1];
            MapItem.set(newEntity, x, y, 1);//1gold
        }
    }

    function getRandomCoordinates(uint[8][8] memory mapArray, uint n) private view returns (uint[2][] memory) {
        uint[2][] memory coordinates = new uint[2][](n);
        uint remaining = 64;
        
        for (uint i = 0; i < 8; i++) {
            for (uint j = 0; j < 8; j++) {
                if (mapArray[i][j] == 0 && n > 0) {
                    uint randomIndex = uint(keccak256(abi.encode(block.timestamp, i, j))) % remaining;
                    
                    if (randomIndex < n) {
                        coordinates[n - 1] = [i, j];
                        n--;
                    }
                    
                    remaining--;
                }
            }
        }
        
        return coordinates;
    }



    // 假设a和b都是整数，且b不为0
    function floor(uint256 a, uint256 b) private pure returns (uint256) {
        return a - (a % b);
    }

    function isEmpty(bytes32 data) private pure returns (bool) {
        return data == bytes32(0);
    }
}