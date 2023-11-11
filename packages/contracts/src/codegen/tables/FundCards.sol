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

bytes32 constant _tableId = bytes32(abi.encodePacked(bytes16(""), bytes16("FundCards")));
bytes32 constant FundCardsTableId = _tableId;

library FundCards {
  /** Get the table's key schema */
  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](0);

    return SchemaLib.encode(_schema);
  }

  /** Get the table's value schema */
  function getValueSchema() internal pure returns (Schema) {
    SchemaType[] memory _schema = new SchemaType[](1);
    _schema[0] = SchemaType.UINT16_ARRAY;

    return SchemaLib.encode(_schema);
  }

  /** Get the table's key names */
  function getKeyNames() internal pure returns (string[] memory keyNames) {
    keyNames = new string[](0);
  }

  /** Get the table's field names */
  function getFieldNames() internal pure returns (string[] memory fieldNames) {
    fieldNames = new string[](1);
    fieldNames[0] = "allCard";
  }

  /** Register the table's key schema, value schema, key names and value names */
  function register() internal {
    StoreSwitch.registerTable(_tableId, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Register the table's key schema, value schema, key names and value names (using the specified store) */
  function register(IStore _store) internal {
    _store.registerTable(_tableId, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Get allCard */
  function get() internal view returns (uint16[72] memory allCard) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = StoreSwitch.getField(_tableId, _keyTuple, 0, getValueSchema());
    return toStaticArray_uint16_72(SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint16());
  }

  /** Get allCard (using the specified store) */
  function get(IStore _store) internal view returns (uint16[72] memory allCard) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = _store.getField(_tableId, _keyTuple, 0, getValueSchema());
    return toStaticArray_uint16_72(SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint16());
  }

  /** Set allCard */
  function set(uint16[72] memory allCard) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.setField(
      _tableId,
      _keyTuple,
      0,
      EncodeArray.encode(fromStaticArray_uint16_72(allCard)),
      getValueSchema()
    );
  }

  /** Set allCard (using the specified store) */
  function set(IStore _store, uint16[72] memory allCard) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.setField(_tableId, _keyTuple, 0, EncodeArray.encode(fromStaticArray_uint16_72(allCard)), getValueSchema());
  }

  /** Get the length of allCard */
  function length() internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = StoreSwitch.getFieldLength(_tableId, _keyTuple, 0, getValueSchema());
    unchecked {
      return _byteLength / 2;
    }
  }

  /** Get the length of allCard (using the specified store) */
  function length(IStore _store) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = _store.getFieldLength(_tableId, _keyTuple, 0, getValueSchema());
    unchecked {
      return _byteLength / 2;
    }
  }

  /**
   * Get an item of allCard
   * (unchecked, returns invalid data if index overflows)
   */
  function getItem(uint256 _index) internal view returns (uint16) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = StoreSwitch.getFieldSlice(
        _tableId,
        _keyTuple,
        0,
        getValueSchema(),
        _index * 2,
        (_index + 1) * 2
      );
      return (uint16(Bytes.slice2(_blob, 0)));
    }
  }

  /**
   * Get an item of allCard (using the specified store)
   * (unchecked, returns invalid data if index overflows)
   */
  function getItem(IStore _store, uint256 _index) internal view returns (uint16) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = _store.getFieldSlice(_tableId, _keyTuple, 0, getValueSchema(), _index * 2, (_index + 1) * 2);
      return (uint16(Bytes.slice2(_blob, 0)));
    }
  }

  /** Push an element to allCard */
  function push(uint16 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), getValueSchema());
  }

  /** Push an element to allCard (using the specified store) */
  function push(IStore _store, uint16 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), getValueSchema());
  }

  /** Pop an element from allCard */
  function pop() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.popFromField(_tableId, _keyTuple, 0, 2, getValueSchema());
  }

  /** Pop an element from allCard (using the specified store) */
  function pop(IStore _store) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.popFromField(_tableId, _keyTuple, 0, 2, getValueSchema());
  }

  /**
   * Update an element of allCard at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function update(uint256 _index, uint16 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      StoreSwitch.updateInField(_tableId, _keyTuple, 0, _index * 2, abi.encodePacked((_element)), getValueSchema());
    }
  }

  /**
   * Update an element of allCard (using the specified store) at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function update(IStore _store, uint256 _index, uint16 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      _store.updateInField(_tableId, _keyTuple, 0, _index * 2, abi.encodePacked((_element)), getValueSchema());
    }
  }

  /** Tightly pack full data using this table's schema */
  function encode(uint16[72] memory allCard) internal pure returns (bytes memory) {
    PackedCounter _encodedLengths;
    // Lengths are effectively checked during copy by 2**40 bytes exceeding gas limits
    unchecked {
      _encodedLengths = PackedCounterLib.pack(allCard.length * 2);
    }

    return abi.encodePacked(_encodedLengths.unwrap(), EncodeArray.encode(fromStaticArray_uint16_72(allCard)));
  }

  /** Encode keys as a bytes32 array using this table's schema */
  function encodeKeyTuple() internal pure returns (bytes32[] memory) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    return _keyTuple;
  }

  /* Delete all data for given keys */
  function deleteRecord() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.deleteRecord(_tableId, _keyTuple, getValueSchema());
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.deleteRecord(_tableId, _keyTuple, getValueSchema());
  }
}

function toStaticArray_uint16_72(uint16[] memory _value) pure returns (uint16[72] memory _result) {
  // in memory static arrays are just dynamic arrays without the length byte
  assembly {
    _result := add(_value, 0x20)
  }
}

function fromStaticArray_uint16_72(uint16[72] memory _value) pure returns (uint16[] memory _result) {
  _result = new uint16[](72);
  uint256 fromPointer;
  uint256 toPointer;
  assembly {
    fromPointer := _value
    toPointer := add(_result, 0x20)
  }
  Memory.copy(fromPointer, toPointer, 2304);
}
