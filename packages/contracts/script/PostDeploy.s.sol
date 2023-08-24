// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";
import { Counter, Game, GameState } from "../src/codegen/Tables.sol";

contract PostDeploy is Script {
  function run(address worldAddress) external {
    // Load the private key from the `PRIVATE_KEY` environment variable (in .env)
    uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
    IWorld world = IWorld(worldAddress);
    // Start broadcasting transactions from the deployer account
    vm.startBroadcast(deployerPrivateKey);

    // ------------------ EXAMPLES ------------------

    // Call increment on the world via the registered function selector
    uint32 newValue = world.increment();
    console.log("Increment via IWorld:", newValue);

    initGame(world);

    vm.stopBroadcast();
  }

  function initGame(IWorld world) private{

    GameState.set(world, 1);

    uint sec = 48 * 3600;
    uint256 gameId = block.timestamp;
    uint256 startTime = block.timestamp + 1 * 3600;
    uint256 endTime = startTime + sec;

    Game.set(world, gameId, startTime, endTime);
  }
}
