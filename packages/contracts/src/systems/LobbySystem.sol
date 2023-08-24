// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Counter,Player,Game ,GameData} from "../codegen/Tables.sol";
import { addressToEntityKey } from "../addressToEntityKey.sol";

contract LobbySystem is System {
  function joinGame() public{
    bytes32 player = addressToEntityKey(address(_msgSender()));
    (,uint32 state,,,) = Player.get(player);
    require(state != 2, "Player already joined the game!");

    GameData memory gameData = Game.get();
 
    bytes memory assets = new bytes(0);
    bytes memory transactions = new bytes(0);
    Player.set(player, gameData.gameId, 2, 50, assets, transactions);
  }
}