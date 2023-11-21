// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { Script } from "forge-std/Script.sol";
import { console } from "forge-std/console.sol";
import { IWorld } from "../src/codegen/world/IWorld.sol";
import { Counter, FundCards,Game,FundPool, GameState, GameMap,GameMapData } from "../src/codegen/Tables.sol";

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

    initFundCards(world);
    initFundPool(world);

    vm.stopBroadcast();
  }
  
  function initFundPool(IWorld world) private{
    
    uint16[9] memory newArray = getRandomNumbers();
    FundPool.set(world,10,newArray);
  }
    // [1,10,10,30],
    // [2,20,10,30],
    // [3,30,10,30],
    // [4,40,10,30],
    // [5,50,10,30],
    // [6,60,10,30],

    // [7,110,12,40],
    // [8,120,12,40],
    // [9,130,12,40],
    // [10,140,12,40],
    // [11,150,12,40],
    // [12,160,12,40],

    // [13,210,14,50],
    // [14,220,14,50],
    // [15,230,14,50],
    // [16,240,14,50],
    // [17,250,14,50],
    // [18,260,14,50]
  function initFundCards(IWorld world) private{
    uint16[72] memory allCardIn4 = [
      1,10,2,30,
      2,20,2,31,
      3,30,2,32,
      4,40,2,33,
      5,50,2,34,
      6,60,2,35,

      7,110,3,40,
      8,120,3,41,
      9,130,3,42,
      10,140,3,43,
      11,150,3,44,
      12,160,3,45,

      13,210,4,50,
      14,220,4,51,
      15,230,4,52,
      16,240,4,53,
      17,250,4,54,
      18,260,4,55
    ];
    FundCards.set(world,allCardIn4);
  }
    
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
    

    function getRandomNumbers() public view returns (uint16[9] memory) {
        uint16[9] memory selectedNumbers;
        for(uint8 i=0;i<9;i++){
          selectedNumbers[i] = 0;
        }
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

    uint gameSec = 5 * 60;//整个游戏的游戏时长，单位秒
    uint calSec = 60;//结算阶段的时长，单位秒

    uint startWaitSec = 1 * 60;//游戏开始后的等待开始时间
    uint256 gameId = block.timestamp;
    uint256 startTime = block.timestamp + startWaitSec;
    uint256 endTime = startTime + gameSec;
    uint256 finishTime = endTime + calSec;

    Game.set(world, gameId, startTime, endTime, finishTime);
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
