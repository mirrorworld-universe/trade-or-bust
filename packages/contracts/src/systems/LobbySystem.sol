// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter,Player,Game ,GameData,GameState} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";
import { IWorld } from "../../src/codegen/world/IWorld.sol";

contract LobbySystem is System {
    function joinGame() public{
        bytes32 player = addressToEntityKey(address(_msgSender()));
        (,uint32 state,,,) = Player.get(player);
        require(state != 2, "Player already joined the game!");

        GameData memory gameData = Game.get();

        uint32 playerState = 1;
        bytes memory assets = new bytes(0);
        bytes memory transactions = new bytes(0);
        Player.set(player, gameData.gameId, playerState, 0, assets, transactions);
    }

    //A player think the game is about to start, ask himself's game info
    function askStart() public{
        bytes32 player = addressToEntityKey(address(_msgSender()));
        (,uint32 state,,,) = Player.get(player);
        require(state != 1,"Player is already start his game!");

        GameData memory gameData = Game.get();
        uint32 gameState = GameState.get();
        uint256 nowTime = block.timestamp;

        //Check game state
        if(gameState == 1){
            //Change game state
            if(gameData.startTime <= nowTime && gameData.endTime > nowTime){
                GameState.set(2);
                
                // uint sec = 48 * 3600;
                // uint256 gameId = block.timestamp;
                // uint256 startTime = block.timestamp + 1 * 3600;
                // uint256 endTime = startTime + sec;

                Game.set(gameData.gameId, gameData.startTime, gameData.endTime);
            }else{
                return;
            }
        }

        //Update player' state
        uint32 playerState = 2;
        bytes memory assets = new bytes(0);
        bytes memory transactions = new bytes(0);
        Player.set(player, gameData.gameId, playerState, 50, assets, transactions);
    }
}

// gameId:'uint256',
//         state:'uint32',
//         money:'uint32',
//         assets:'bytes',
//         transactions:'bytes'