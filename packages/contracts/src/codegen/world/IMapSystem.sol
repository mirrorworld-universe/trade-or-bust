// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IMapSystem {
  function log(string memory message) external;

  function move(uint256 targetX, uint256 targetY) external returns (bool);

  function concatenateStringWithUint(string memory message, uint256 number) external pure returns (string memory);
}
