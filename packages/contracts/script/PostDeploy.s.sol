// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";
import { Counter, Game,FundPool, GameState, GameMap,GameMapData } from "../src/codegen/Tables.sol";

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

    initGameMap(world);

    initFundPool(world);

    vm.stopBroadcast();
  }
  
  function initFundPool(IWorld world) private{
  // uint8[] memory selectedNumbers = new uint8[](9);
  // selectedNumbers[0] = 1;
  // selectedNumbers[1] = 2;
  // selectedNumbers[2] = 3;
  // selectedNumbers[3] = 4;
  // selectedNumbers[4] = 5;
  // selectedNumbers[5] = 6;
  // selectedNumbers[6] = 7;
  // selectedNumbers[7] = 8;
  // selectedNumbers[8] = 9;
    uint16[] memory newArray = getRandomNumbers();
    FundPool.set(world,10,newArray);
    // GameMap.set(world, width, height, terrain);
  }


  // function bytesToUintArray(bytes memory data, uint32 length) private pure returns (uint8[] memory) {
  //       require(data.length == length, "Invalid data length");

  //       uint8[] memory result = new uint8[](length);
        
  //       for (uint32 x = 0; x < length; x++) {
  //           uint8 terrainType = uint8(data[x]);
  //           result[x] = terrainType;
  //       }
        
  //       return result;
  //   }

    // function uint256ArrayToBytes(uint256[] memory array) public pure returns (bytes memory) {
    //     bytes memory result = new bytes(array.length * 32); // 每个uint256需要32字节
    //     for (uint256 i = 0; i < array.length; i++) {
    //         bytes32 value = bytes32(array[i]);
    //         for (uint256 j = 0; j < 32; j++) {
    //             result[i * 32 + j] = value[j];
    //         }
    //     }
    //     return result;
    // }
    
    
function bytesToUint16(bytes32 b) public pure returns (uint16) {
    uint16 number;
    for (uint256 i = 0; i < b.length; i++) {
        number = number + uint16(uint8(b[i])) * uint16(2**(8 * (b.length - (i + 1))));
    }
    return number;
}
    
    function generateRandomNumber(uint8 seed) public view returns (uint16) {
        bytes32 hash = keccak256(abi.encodePacked(block.timestamp, block.difficulty, seed));
        return bytesToUint16(hash);
    }
    

    function getRandomNumbers() public view returns (uint16[] memory) {
        uint16[] memory selectedNumbers = new uint16[](9);
        uint8 count = 0;
        uint8 duplicatTimes = 0;//解决生成的数字始终一样的问题

        //todo 这里的逻辑一打开就会报错
        while (count != 9) {
            uint16 randomNumber = generateRandomNumber(count);
            randomNumber = randomNumber % 18 + 1 + duplicatTimes;
            if(randomNumber > 18){
              randomNumber = randomNumber - 18;
            }
            
            bool isDuplicate = false;
            
            for (uint8 j = 0; j < count; j++) {
                if (selectedNumbers[j] == randomNumber) {
                    isDuplicate = true;
                    duplicatTimes++;
                    break;
                }
            }
            
            if (!isDuplicate) {
                selectedNumbers[count] = randomNumber;
                count++;
            }
        }
        
        return selectedNumbers;
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
    uint O = 0;//Blank, no map cell here
    uint N = 1;//Normal cell
    uint R = 2;//Have a role

    uint[20][20] memory map = [
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N],
        [N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N, N]
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
