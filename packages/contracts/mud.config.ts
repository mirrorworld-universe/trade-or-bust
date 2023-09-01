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
      schema: "uint32",
    },
    Game:{
      keySchema: {},
      schema:{
        gameId:'uint256',
        startTime:'uint256',
        endTime:'uint256'
      }
    },
    GameState:{
      keySchema: {},
      schema:"uint32",
    },
    GameMap: {
      keySchema: {},
      schema: {
        width: "uint256",
        height: "uint256",
        mapArray:"bytes"
      }
    },
    MapItem:{
      schema:{
        x:'uint256',
        y:'uint256'
      }
    },
    MapItemValue:{
      schema:'uint32'
    },
    IsPlayer:{
      dataStruct:false,
      schema:'bool'
    },
    Player:{
      dataStruct:true,
      schema:{
        gameId:'uint256',
        state:'uint32',
        money:'uint32',
        x:'uint256',
        y:'uint256',
        transactions:'bytes'
      }
    },
    RaiseColddown:{
        dataStruct:true,
        schema:{
          start:'uint256',
          end:'uint256',
        }
    },
    AssetsList:{
        dataStruct:true,
        schema:{
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
      schema:'uint8',
    },
    TransactionList:{
      dataStruct:true,
      schema:{
        list:'bytes32[]'
      }
    },
  },
});
