import { mudConfig } from "@latticexyz/world/register";
import { resolveTableId } from "@latticexyz/store/register";

export default mudConfig({
  enums: {
    // GameState: ["NotInited", "InGame", "Waiting"]
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    },
    {
      name: "KeysInTableModule",
      root: true,
      args: [resolveTableId("Player")],
    },
    {
      name: "KeysWithValueModule",
      root: true,
      args: [resolveTableId("Player")],
    },
    {
      name: "KeysInTableModule",
      root: true,
      args: [resolveTableId("MapItem")],
    },
    {
      name: "KeysWithValueModule",
      root: true,
      args: [resolveTableId("MapItem")],
    },
  ],
  tables: {
    Counter: {
      keySchema: {},
      valueSchema: "uint32",
    },
    Game:{
      keySchema: {},
      valueSchema:{
        gameId:'uint256',
        startTime:'uint256',
        endTime:'uint256'
      }
    },
    GameState:{
      keySchema: {},
      valueSchema:"uint32",
    },
    GameMap: {
      keySchema: {},
      valueSchema: {
        width: "uint256",
        height: "uint256",
        mapArray:"bytes"
      }
    },
    MapItem:{
      valueSchema:{
        x:'uint256',
        y:'uint256'
      }
    },
    MapItemValue:{
      valueSchema:'uint32'
    },
    IsPlayer:{
      dataStruct:false,
      valueSchema:'bool'
    },
    Player:{
      dataStruct:true,
      valueSchema:{
        gameId:'uint256',
        state:'uint32',
        money:'uint32',
        x:'uint256',
        y:'uint256'
      }
    },
    RaiseColddown:{
        dataStruct:true,
        valueSchema:{
          start:'uint256',
          end:'uint256',
        }
    },
    AssetsList:{
        dataStruct:true,
        valueSchema:{
          gpu:'int8',
          bitcoin:'int8',
          battery:'int8',
          leiter:'int8',
          gold:'int8',
          oil:'int8'
        }
    },
    Log:{
      dataStruct:true,
      valueSchema:'uint8',
    },
    //Partner list
    TransactionList:{
      dataStruct:true,
      valueSchema:{
        list:'bytes32[]'
      }
    },
    //trade transaction list
    TradeList:{
      dataStruct:true,
      valueSchema:{
        list:'bytes'
      }
    },
    IsTrading:{
      dataStruct:false,
      valueSchema:'bool'
    },
    PlayerGameResult:{
      dataStruct:true,
      valueSchema:{
        rank:'int32',
        points:'int32',
        gpu:'int8',
        bitcoin:'int8',
        battery:'int8',
        leiter:'int8',
        gold:'int8',
        oil:'int8',
      }
    },
    UnsolicitedTransaction:{
      dataStruct:true,
      valueSchema:{
        asset:'uint8',
        money:'uint32',
        to:'bytes32'
      }
    },
    PassiveTransaction:{
      dataStruct:true,
      valueSchema:{
        asset:'uint8',
        money:'uint32',
        from:'bytes32'
      }
    }
  },
});
