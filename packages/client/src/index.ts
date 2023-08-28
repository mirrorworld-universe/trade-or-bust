import { mount as mountDevTools } from "@latticexyz/dev-tools";
import { setup } from "./mud/setup";
import mudConfig from "contracts/mud.config";
import { getComponentValue,getComponentValueStrict, Has, Not  } from "@latticexyz/recs";

const {
  components,
  systemCalls: { increment,joinGame,askStart },
  network,
} = await setup();

globalThis.ponzi = {
  counter:0,
  currentPlayer:network.playerEntity,
  gameState:null,
  game:null,
  gameMap:null,
  mapItems:null,
  players:null
}

globalThis.env = {
  components:components
}

// Components expose a stream that triggers when the component is updated.
components.GameState.update$.subscribe((update) => {
  const [nextValue, prevValue] = update.value;
  console.log("GameState updated", update, { nextValue, prevValue });
  globalThis.ponzi.gameState = nextValue.value;
  globalThis.ponzi.gamestate_update?.(prevValue.value, nextValue.value);
});

components.Counter.update$.subscribe((update) => {
    const [nextValue, prevValue] = update.value;
    console.log("Counter updated", update, { nextValue, prevValue });
    globalThis.ponzi.counter = nextValue;
    globalThis.ponzi.counter_update?.(prevValue, nextValue);
});

components.Game.update$.subscribe((update) => {
  const [nextValue, prevValue] = update.value;
  console.log("Game updated", update, { nextValue, prevValue });
  globalThis.ponzi.game = nextValue;
  globalThis.ponzi.game_update?.(prevValue, nextValue);
});

components.Player.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("Player updated", update, { nextValue, prevValue });
  // globalThis.ponzi.player_update?.(prevValue, nextValue);
  globalThis.ponzi.player_update?.(update);
});

components.GameMap.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("GameMap updated", { nextValue, prevValue });
  globalThis.ponzi.gameMap = nextValue
  globalThis.ponzi.gamemap_update?.(prevValue, nextValue);
});

components.MapItem.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("MapItems updated", { nextValue, prevValue });
  globalThis.ponzi.mapitems_update?.(prevValue, nextValue);
});

components.IsPlayer.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("IsPlayer updated", update);
  globalThis.ponzi.isplayer_update?.(update);
});

//get functions
(window as any).getPlayers = () => {
  return components.Player.values;
}

//Query
(window as any).queryValue = async (component, entity) => {
  const data = getComponentValueStrict(component, entity)
  console.log("getValueByComAndEntity:", data);
  return data;
};

// Just for demonstration purposes: we create a global function that can be
// called to invoke the Increment system contract via the world. (See IncrementSystem.sol.)
(window as any).increment = async () => {
  let data = await increment();
  console.log("new counter value:", data);
  return data;
};
(window as any).joinGame = async () => {
  let data = await joinGame();
  console.log("joinGame:", data);
  return data;
};
(window as any).askStart = async () => {
  let data = await askStart();
  console.log("askStart:", data);
  return data;
};
// https://vitejs.dev/guide/env-and-mode.html
if (import.meta.env.DEV) {
  const { mount: mountDevTools } = await import("@latticexyz/dev-tools");
  mountDevTools({
    config: mudConfig,
    publicClient: network.publicClient,
    walletClient: network.walletClient,
    latestBlock$: network.latestBlock$,
    blockStorageOperations$: network.blockStorageOperations$,
    worldAddress: network.worldContract.address,
    worldAbi: network.worldContract.abi,
    write$: network.write$,
    recsWorld: network.world,
  });
}