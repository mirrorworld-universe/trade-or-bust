import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  enums: {
    GameState: ["NotInited", "InGame", "Waiting"],
    PlayerState: ["NotInited", "InLobby", "InGame"],
  },
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Game:{
      keySchema: {},
      schema:{
        state:'uint32',
        gameId:'uint256',
        startTime:'uint256',
        endTime:'uint256'
      }
    },
    GameMap:{
      dataStruct:false,
      schema:{
        mapArray:'bytes',
      }
    },
    Player:{
      dataStruct:false,
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
