// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

interface IAssetsSystem {
  function pay() external;

  function pickFund(uint8 cardId) external;

  function checkDebt() external;

  function pickAsset(uint8 assetKind) external;
}
