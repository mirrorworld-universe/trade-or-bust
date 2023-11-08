// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "forge-std/Test.sol";
import { MudTest } from "@latticexyz/store/src/MudTest.sol";
import { getKeysWithValue } from "@latticexyz/world/src/modules/keyswithvalue/getKeysWithValue.sol";

import { IWorld } from "../src/codegen/world/IWorld.sol";
import { Counter, CounterTableId } from "../src/codegen/Tables.sol";

contract CounterTest is MudTest {
  IWorld public world;

  function setUp() public override {
    super.setUp();
    world = IWorld(worldAddress);
  }

  function testWorldExists() public {
    uint256 codeSize;
    address addr = worldAddress;
    assembly {
      codeSize := extcodesize(addr)
    }
    generateRandomNumber(0);
    // assertTrue(codeSize > 0);
    // assertTrue(isMoveValid(0,5,1,4));
    // assertTrue(calculateDistance(5,3,7,4,2));
  }
  function bytesToUint(bytes32 b) public pure returns (uint256) {
      uint256 number;
      for (uint256 i = 0; i < b.length; i++) {
          number = number + uint8(b[i]) * (2**(8 * (b.length - (i + 1))));
      }
      return number;
  }
function generateRandomNumber(uint seed) public view returns (uint) {
    bytes32 hash = keccak256(abi.encodePacked(block.timestamp, block.difficulty, seed));
    return bytesToUint(hash);
}
    function getRandomNumbers() public view returns (uint8[] memory) {
        uint8[] memory selectedNumbers = new uint8[](9);
        uint8 count = 0;

        uint256 loopCount = 0;
        while (count != 9) {
          loopCount++;
          require(loopCount < 999,"Loop tooooooo many times.");
            bytes32 randomHash = keccak256(abi.encodePacked(block.timestamp, block.difficulty, count));
            uint8 randomNumber = uint8(randomHash[0]) % 18 + 1;
            bool isDuplicate = false;
            
            for (uint8 j = 0; j < count; j++) {
                if (selectedNumbers[j] == randomNumber) {
                    isDuplicate = true;
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

  function testCounter() public {
    // Expect the counter to be 1 because it was incremented in the PostDeploy script.
    uint32 counter = Counter.get(world);
    assertEq(counter, 1);

    // Expect the counter to be 2 after calling increment.
    world.increment();
    counter = Counter.get(world);
    assertEq(counter, 2);
  }


    function calculateDistance(uint256 x1, uint256 y1, uint256 x2, uint256 y2, int256 limit) public pure returns (bool) {
        int256 deltaX = int256(x2) - int256(x1);
        int256 deltaY = int256(y2) - int256(y1);
        
        int256 absDeltaX = abs(deltaX);
        int256 absDeltaY = abs(deltaY);

        if (absDeltaX <= limit && absDeltaY <= limit && (absDeltaX + absDeltaY) < limit * 2) {
            return true;
        } else {
            return false;
        }
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

  // function abs(int256 x) private pure returns (int256) {
  //   return x >= 0 ? x : -x;
// }
}
