import { mudConfig } from "@latticexyz/world/register";

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
        map:"bytes"
      }
    },
    MapItem:{
      schema:{
        x:'uint256',
        y:'uint256',
        itemType:'uint32'
      }
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
        assets:'bytes',
        transactions:'bytes'
      }
    }
  },
});
