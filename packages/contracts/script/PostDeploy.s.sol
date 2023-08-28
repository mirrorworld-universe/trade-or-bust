// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";
import { Counter, Game, GameState, GameMap,GameMapData } from "../src/codegen/Tables.sol";

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

    // initGameMap(world);

    vm.stopBroadcast();
  }

  function initGame(IWorld world) private{

    GameState.set(world, 1);

    uint gameSec = 48 * 3600;
    uint startWaitSec = 1 * 60;
    uint256 gameId = block.timestamp;
    uint256 startTime = block.timestamp + startWaitSec;
    uint256 endTime = startTime + gameSec;

    Game.set(world, gameId, startTime, endTime);
  }

  function initGameMap(IWorld world) private{
    uint O = 0;
    uint N = 1;
    uint R = 2;

    uint[8][8] memory map = [
        [O, N, N, R, N, N, N, O],
        [O, N, N, R, R, N, N, O],
        [O, N, R, R, R, N, N, O],
        [O, N, R, R, R, N, N, O],
        [O, N, R, R, R, N, N, O],
        [O, N, N, R, N, N, N, O],
        [O, N, N, R, N, N, N, O],
        [O, N, N, R, N, N, N, O]
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

    GameMap.set(world, width, height, terrain);
  }
}
