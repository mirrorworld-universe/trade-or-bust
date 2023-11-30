
import { setup } from "./mud/setup";
import mudConfig from "contracts/mud.config";
import { runQuery ,getComponentValue,getComponentValueStrict, Has,HasValue, Not  } from "@latticexyz/recs";

const {
  components,
  systemCalls: {checkDebt, restartGame, pay,increment,joinGame,askStart,move,pickAsset,pickFund,trade,acceptTrade,rejectTrade,finishGame,pickCoin,findPartner },
  network,
} = await setup();

globalThis.ponzi = {
  counter:0,
  currentPlayer:network.playerEntity,
  gameState:null,
  game:null,
  gameMap:null,
  mapItems:null,
  players:null,
  transactionList:null,
  percentage:0,
}

globalThis.env = {
  components:components
}

// Components expose a stream that triggers when the component is updated.
components.GameState.update$.subscribe((update) => {
  const [nextValue, prevValue] = update.value;
  console.log("GameState updated", update, { nextValue, prevValue });
  globalThis.ponzi.gameState = nextValue?nextValue.value:null;
  globalThis.ponzi.gamestate_update?.(prevValue?.value, nextValue?.value);
});

// Update initial sync status in the UI
components.SyncProgress.update$.subscribe((obj) => {
  console.log("onSyncProgressUpdate:",obj);
  globalThis.ponzi.percentage = obj.value[0].percentage;
  globalThis.ponzi.syncprogress_update?.(globalThis.ponzi.percentage);
});

// components.Counter.update$.subscribe((update) => {
//     const [nextValue, prevValue] = update.value;
//     console.log("Counter updated", update, { nextValue, prevValue });
//     globalThis.ponzi.counter = nextValue;
//     globalThis.ponzi.counter_update?.(prevValue, nextValue);
// });

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

components.FundPool.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("FundPool updated", update);
  globalThis.ponzi.fundpool_update?.(update);
});

components.MapItem.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  // console.log("MapItems updated", { nextValue, prevValue });
  globalThis.ponzi.mapitems_update?.(prevValue, nextValue);
});

components.IsPlayer.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("IsPlayer updated", update);
  globalThis.ponzi.isplayer_update?.(update);
});

components.IsEliminated.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("IsEliminated updated", update);
  globalThis.ponzi.iseliminated_update?.(update);
});

// components.IsFinishGame.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("IsFinishGame updated", update);
//   globalThis.ponzi.isfinishgame_update?.(update);
// });

components.OwnedCards.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("OwnedCards updated", update);
  // globalThis.ponzi.isplayer_update?.(update);
});

components.TransactionList.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("TransactionList updated", update);

  globalThis.ponzi.transactionList = nextValue
  globalThis.ponzi.transactionlist_update?.(update);
});

components.Log.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("Log updated", update);
});

components.AssetsList.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("AssetsList updated", update);
  globalThis.ponzi.assetslist_update?.(update);
});

components.RaiseColddown.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("RaiseColddown updated", update);
  globalThis.ponzi.raiseColddown_update?.(update);
});

//Trade
components.PassiveTransaction.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("PassiveTransaction updated", update);
  globalThis.ponzi.passivetransaction_update?.(update);
});
components.TradeList.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("TradeList updated", update);
  globalThis.ponzi.tradelist_update?.(update);
});
components.PlayerGameResult.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("PlayerGameResult updated", update);
  globalThis.ponzi.playergameresult_update?.(update);
});
components.HasDebt.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("HasDebt updated", update);
  globalThis.ponzi.hasdebt_update?.(update);
});
components.TransactionList.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("TransactionList updated", update);
  globalThis.ponzi.transactionlist_update?.(update);
});

//get functions
(window as any).getPlayers = () => {
  return components.Player.values;
}

(window as any).getIsPlayers = () => {
  return components.IsPlayer.values;
}

(window as any).getMapItems = ()=>{
  return components.MapItem.values;
}

(window as any).getAssetsList = ()=>{
  return components.AssetsList.values;
}

(window as any).getTransactionList = ()=>{
  return components.TransactionList.values;
}

(window as any).getFundPool = ()=>{
  return components.FundPool.values;
}

//Query
(window as any).queryValue = (component, entity) => {
  const data = getComponentValueStrict(component, entity)
  console.log("getValueByComAndEntity:", data);
  return data;
};

(window as any).queryPlayingAssetsList = async ()=>{
    const matchingEntities = runQuery([
      Has(components.AssetsList),
      Has(components.Player)
    ])

    return matchingEntities;
}

(window as any).queryResultAssetsList = async ()=>{
  const matchingEntities = runQuery([
    Has(components.AssetsList),
    Not(components.IsEliminated)
  ])

  return matchingEntities;
}

(window as any).queryPlayerOnPos = async (x,y)=>{
  const matchingEntities = runQuery([
    HasValue(components.Player, {x, y})
  ])

  return matchingEntities;
}


(window as any).queryAllAlivePlayers = ()=>{
  const matchingEntities = runQuery([
    Has(components.Player),
    Not(components.IsEliminated)
  ])

  console.log("queryAllAlivePlayers:",matchingEntities);
  return matchingEntities;
}


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
(window as any).move = async (x,y) => {
  let data = await move(x,y);
  console.log("move:", data);
  return data;
};
(window as any).pickAsset = async (assetKind) => {
  console.log("send pickAsset:", assetKind);
  await pickAsset(assetKind);
};
(window as any).pickFund = async (cardId) => {
  console.log("send pickFund:", cardId);
  await pickFund(cardId);
};
(window as any).trade = async (targetPlayer:string,assetKind:number,money:number) => {
  console.log("send trade:", targetPlayer, money, assetKind);
  await trade(targetPlayer,assetKind,money);
};
(window as any).acceptTrade = async () => {
  let data = await acceptTrade();
  console.log("send acceptTrade:"+data);
};
(window as any).rejectTrade = async () => {
  let data = await rejectTrade();
  console.log("send rejectTrade:"+data);
};

(window as any).finishGame = async () => {
  console.log("send finishGame");
  let data = await finishGame();
};

(window as any).pickCoin = async () => {
  console.log("send pickCoin...");
  let data = await pickCoin();
  console.log("send pickCoin data:"+data);
};

(window as any).searchPartner = async () => {
  console.log("send searchPartner...");
  let data = await findPartner();
  // console.log("send findPartner data:"+data);
};
(window as any).payDebt = async () => {
  console.log("send pay...");
  let data = await pay();
};
(window as any).restartGame = async () => {
  console.log("send restartGame...");
  let data = await restartGame();
};
(window as any).checkDebt = async ()=>{
  console.log("send checkDebt...");
  let data = await checkDebt();
}
// // start sync manually by subscribing to `blockStorageOperation$`
// const subcription = network.blockStorageOperation$.subscribe();
 
// // clean up subscription
// subscription.unsubscribe();


// https://vitejs.dev/guide/env-and-mode.html
if (true||import.meta.env.DEV) {
  const { mount: mountDevTools } = await import("@latticexyz/dev-tools");
  console.log("============================");
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