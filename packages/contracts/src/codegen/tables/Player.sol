// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";

bytes32 constant _tableId = bytes32(abi.encodePacked(bytes16(""), bytes16("Player")));
bytes32 constant PlayerTableId = _tableId;

library Player {
  /** Get the table's key schema */
  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](1);
    _schema[0] = SchemaType.BYTES32;

    return SchemaLib.encode(_schema);
  }

  /** Get the table's value schema */
  function getValueSchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](5);
    _schema[0] = SchemaType.UINT256;
    _schema[1] = SchemaType.UINT32;
    _schema[2] = SchemaType.UINT32;
    _schema[3] = SchemaType.BYTES;
    _schema[4] = SchemaType.BYTES;

    return SchemaLib.encode(_schema);
  }

  /** Get the table's key names */
  function getKeyNames() internal pure returns (string[] memory keyNames) {
    keyNames = new string[](1);
    keyNames[0] = "key";
  }

  /** Get the table's field names */
  function getFieldNames() internal pure returns (string[] memory fieldNames) {
    fieldNames = new string[](5);
    fieldNames[0] = "gameId";
    fieldNames[1] = "state";
    fieldNames[2] = "money";
    fieldNames[3] = "assets";
    fieldNames[4] = "transactions";
  }

  /** Register the table's key schema, value schema, key names and value names */
  function register() internal {
    StoreSwitch.registerTable(_tableId, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Register the table's key schema, value schema, key names and value names (using the specified store) */
  function register(IStore _store) internal {
    _store.registerTable(_tableId, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Get gameId */
  function getGameId(bytes32 key) internal view returns (uint256 gameId) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 0, getValueSchema());
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Get gameId (using the specified store) */
  function getGameId(IStore _store, bytes32 key) internal view returns (uint256 gameId) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 0, getValueSchema());
    return (uint256(Bytes.slice32(_blob, 0)));
  }

  /** Set gameId */
  function setGameId(bytes32 key, uint256 gameId) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setField(_tableId, _keyTuple, 0, abi.encodePacked((gameId)), getValueSchema());
  }

  /** Set gameId (using the specified store) */
  function setGameId(IStore _store, bytes32 key, uint256 gameId) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.setField(_tableId, _keyTuple, 0, abi.encodePacked((gameId)), getValueSchema());
  }

  /** Get state */
  function getState(bytes32 key) internal view returns (uint32 state) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 1, getValueSchema());
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Get state (using the specified store) */
  function getState(IStore _store, bytes32 key) internal view returns (uint32 state) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 1, getValueSchema());
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Set state */
  function setState(bytes32 key, uint32 state) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setField(_tableId, _keyTuple, 1, abi.encodePacked((state)), getValueSchema());
  }

  /** Set state (using the specified store) */
  function setState(IStore _store, bytes32 key, uint32 state) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.setField(_tableId, _keyTuple, 1, abi.encodePacked((state)), getValueSchema());
  }

  /** Get money */
  function getMoney(bytes32 key) internal view returns (uint32 money) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 2, getValueSchema());
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Get money (using the specified store) */
  function getMoney(IStore _store, bytes32 key) internal view returns (uint32 money) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 2, getValueSchema());
    return (uint32(Bytes.slice4(_blob, 0)));
  }

  /** Set money */
  function setMoney(bytes32 key, uint32 money) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setField(_tableId, _keyTuple, 2, abi.encodePacked((money)), getValueSchema());
  }

  /** Set money (using the specified store) */
  function setMoney(IStore _store, bytes32 key, uint32 money) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.setField(_tableId, _keyTuple, 2, abi.encodePacked((money)), getValueSchema());
  }

  /** Get assets */
  function getAssets(bytes32 key) internal view returns (bytes memory assets) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 3, getValueSchema());
    return (bytes(_blob));
  }

  /** Get assets (using the specified store) */
  function getAssets(IStore _store, bytes32 key) internal view returns (bytes memory assets) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 3, getValueSchema());
    return (bytes(_blob));
  }

  /** Set assets */
  function setAssets(bytes32 key, bytes memory assets) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setField(_tableId, _keyTuple, 3, bytes((assets)), getValueSchema());
  }

  /** Set assets (using the specified store) */
  function setAssets(IStore _store, bytes32 key, bytes memory assets) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.setField(_tableId, _keyTuple, 3, bytes((assets)), getValueSchema());
  }

  /** Get the length of assets */
  function lengthAssets(bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = StoreSwitch.getFieldLength(_tableId, _keyTuple, 3, getValueSchema());
    unchecked {
      return _byteLength / 1;
    }
  }

  /** Get the length of assets (using the specified store) */
  function lengthAssets(IStore _store, bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = _store.getFieldLength(_tableId, _keyTuple, 3, getValueSchema());
    unchecked {
      return _byteLength / 1;
    }
  }

  /**
   * Get an item of assets
   * (unchecked, returns invalid data if index overflows)
   */
  function getItemAssets(bytes32 key, uint256 _index) internal view returns (bytes memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = StoreSwitch.getFieldSlice(
        _tableId,
        _keyTuple,
        3,
        getValueSchema(),
        _index * 1,
        (_index + 1) * 1
      );
      return (bytes(_blob));
    }
  }

  /**
   * Get an item of assets (using the specified store)
   * (unchecked, returns invalid data if index overflows)
   */
  function getItemAssets(IStore _store, bytes32 key, uint256 _index) internal view returns (bytes memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = _store.getFieldSlice(_tableId, _keyTuple, 3, getValueSchema(), _index * 1, (_index + 1) * 1);
      return (bytes(_blob));
    }
  }

  /** Push a slice to assets */
  function pushAssets(bytes32 key, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.pushToField(_tableId, _keyTuple, 3, bytes((_slice)), getValueSchema());
  }

  /** Push a slice to assets (using the specified store) */
  function pushAssets(IStore _store, bytes32 key, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.pushToField(_tableId, _keyTuple, 3, bytes((_slice)), getValueSchema());
  }

  /** Pop a slice from assets */
  function popAssets(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.popFromField(_tableId, _keyTuple, 3, 1, getValueSchema());
  }

  /** Pop a slice from assets (using the specified store) */
  function popAssets(IStore _store, bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.popFromField(_tableId, _keyTuple, 3, 1, getValueSchema());
  }

  /**
   * Update a slice of assets at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function updateAssets(bytes32 key, uint256 _index, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      StoreSwitch.updateInField(_tableId, _keyTuple, 3, _index * 1, bytes((_slice)), getValueSchema());
    }
  }

  /**
   * Update a slice of assets (using the specified store) at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function updateAssets(IStore _store, bytes32 key, uint256 _index, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      _store.updateInField(_tableId, _keyTuple, 3, _index * 1, bytes((_slice)), getValueSchema());
    }
  }

  /** Get transactions */
  function getTransactions(bytes32 key) internal view returns (bytes memory transactions) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 4, getValueSchema());
    return (bytes(_blob));
  }

  /** Get transactions (using the specified store) */
  function getTransactions(IStore _store, bytes32 key) internal view returns (bytes memory transactions) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 4, getValueSchema());
    return (bytes(_blob));
  }

  /** Set transactions */
  function setTransactions(bytes32 key, bytes memory transactions) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setField(_tableId, _keyTuple, 4, bytes((transactions)), getValueSchema());
  }

  /** Set transactions (using the specified store) */
  function setTransactions(IStore _store, bytes32 key, bytes memory transactions) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.setField(_tableId, _keyTuple, 4, bytes((transactions)), getValueSchema());
  }

  /** Get the length of transactions */
  function lengthTransactions(bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = StoreSwitch.getFieldLength(_tableId, _keyTuple, 4, getValueSchema());
    unchecked {
      return _byteLength / 1;
    }
  }

  /** Get the length of transactions (using the specified store) */
  function lengthTransactions(IStore _store, bytes32 key) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    uint256 _byteLength = _store.getFieldLength(_tableId, _keyTuple, 4, getValueSchema());
    unchecked {
      return _byteLength / 1;
    }
  }

  /**
   * Get an item of transactions
   * (unchecked, returns invalid data if index overflows)
   */
  function getItemTransactions(bytes32 key, uint256 _index) internal view returns (bytes memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = StoreSwitch.getFieldSlice(
        _tableId,
        _keyTuple,
        4,
        getValueSchema(),
        _index * 1,
        (_index + 1) * 1
      );
      return (bytes(_blob));
    }
  }

  /**
   * Get an item of transactions (using the specified store)
   * (unchecked, returns invalid data if index overflows)
   */
  function getItemTransactions(IStore _store, bytes32 key, uint256 _index) internal view returns (bytes memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      bytes memory _blob = _store.getFieldSlice(_tableId, _keyTuple, 4, getValueSchema(), _index * 1, (_index + 1) * 1);
      return (bytes(_blob));
    }
  }

  /** Push a slice to transactions */
  function pushTransactions(bytes32 key, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.pushToField(_tableId, _keyTuple, 4, bytes((_slice)), getValueSchema());
  }

  /** Push a slice to transactions (using the specified store) */
  function pushTransactions(IStore _store, bytes32 key, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.pushToField(_tableId, _keyTuple, 4, bytes((_slice)), getValueSchema());
  }

  /** Pop a slice from transactions */
  function popTransactions(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.popFromField(_tableId, _keyTuple, 4, 1, getValueSchema());
  }

  /** Pop a slice from transactions (using the specified store) */
  function popTransactions(IStore _store, bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.popFromField(_tableId, _keyTuple, 4, 1, getValueSchema());
  }

  /**
   * Update a slice of transactions at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function updateTransactions(bytes32 key, uint256 _index, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      StoreSwitch.updateInField(_tableId, _keyTuple, 4, _index * 1, bytes((_slice)), getValueSchema());
    }
  }

  /**
   * Update a slice of transactions (using the specified store) at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function updateTransactions(IStore _store, bytes32 key, uint256 _index, bytes memory _slice) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    unchecked {
      _store.updateInField(_tableId, _keyTuple, 4, _index * 1, bytes((_slice)), getValueSchema());
    }
  }

  /** Get the full data */
  function get(
    bytes32 key
  ) internal view returns (uint256 gameId, uint32 state, uint32 money, bytes memory assets, bytes memory transactions) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = StoreSwitch.getRecord(_tableId, _keyTuple, getValueSchema());
    return decode(_blob);
  }

  /** Get the full data (using the specified store) */
  function get(
    IStore _store,
    bytes32 key
  ) internal view returns (uint256 gameId, uint32 state, uint32 money, bytes memory assets, bytes memory transactions) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    bytes memory _blob = _store.getRecord(_tableId, _keyTuple, getValueSchema());
    return decode(_blob);
  }

  /** Set the full data using individual values */
  function set(
    bytes32 key,
    uint256 gameId,
    uint32 state,
    uint32 money,
    bytes memory assets,
    bytes memory transactions
  ) internal {
    bytes memory _data = encode(gameId, state, money, assets, transactions);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.setRecord(_tableId, _keyTuple, _data, getValueSchema());
  }

  /** Set the full data using individual values (using the specified store) */
  function set(
    IStore _store,
    bytes32 key,
    uint256 gameId,
    uint32 state,
    uint32 money,
    bytes memory assets,
    bytes memory transactions
  ) internal {
    bytes memory _data = encode(gameId, state, money, assets, transactions);

    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.setRecord(_tableId, _keyTuple, _data, getValueSchema());
  }

  /**
   * Decode the tightly packed blob using this table's schema.
   * Undefined behaviour for invalid blobs.
   */
  function decode(
    bytes memory _blob
  ) internal pure returns (uint256 gameId, uint32 state, uint32 money, bytes memory assets, bytes memory transactions) {
    // 40 is the total byte length of static data
    PackedCounter _encodedLengths = PackedCounter.wrap(Bytes.slice32(_blob, 40));

    gameId = (uint256(Bytes.slice32(_blob, 0)));

    state = (uint32(Bytes.slice4(_blob, 32)));

    money = (uint32(Bytes.slice4(_blob, 36)));

    // Store trims the blob if dynamic fields are all empty
    if (_blob.length > 40) {
      // skip static data length + dynamic lengths word
      uint256 _start = 72;
      uint256 _end;
      unchecked {
        _end = 72 + _encodedLengths.atIndex(0);
      }
      assets = (bytes(SliceLib.getSubslice(_blob, _start, _end).toBytes()));

      _start = _end;
      unchecked {
        _end += _encodedLengths.atIndex(1);
      }
      transactions = (bytes(SliceLib.getSubslice(_blob, _start, _end).toBytes()));
    }
  }

  /** Tightly pack full data using this table's schema */
  function encode(
    uint256 gameId,
    uint32 state,
    uint32 money,
    bytes memory assets,
    bytes memory transactions
  ) internal pure returns (bytes memory) {
    PackedCounter _encodedLengths;
    // Lengths are effectively checked during copy by 2**40 bytes exceeding gas limits
    unchecked {
      _encodedLengths = PackedCounterLib.pack(bytes(assets).length, bytes(transactions).length);
    }

    return abi.encodePacked(gameId, state, money, _encodedLengths.unwrap(), bytes((assets)), bytes((transactions)));
  }

  /** Encode keys as a bytes32 array using this table's schema */
  function encodeKeyTuple(bytes32 key) internal pure returns (bytes32[] memory) {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    return _keyTuple;
  }

  /* Delete all data for given keys */
  function deleteRecord(bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    StoreSwitch.deleteRecord(_tableId, _keyTuple, getValueSchema());
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store, bytes32 key) internal {
    bytes32[] memory _keyTuple = new bytes32[](1);
    _keyTuple[0] = key;

    _store.deleteRecord(_tableId, _keyTuple, getValueSchema());
  }
}
