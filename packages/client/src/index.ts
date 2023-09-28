import { mount as mountDevTools } from "@latticexyz/dev-tools";
import { setup } from "./mud/setup";
import mudConfig from "contracts/mud.config";
import { runQuery ,getComponentValue,getComponentValueStrict, Has, Not  } from "@latticexyz/recs";
// import * as buffer from "buffer";
// window.Buffer = buffer.Buffer;
import { Buffer } from 'buffer';
// @ts-ignore
window.Buffer = Buffer;
import { Connection, TransactionMessage, VersionedTransaction, SystemProgram, Transaction, clusterApiUrl, Keypair, Commitment, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import * as base58 from 'bs58';
import NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';
import {
    AcceptTradeEvent,
    assetTypeEnum,
    CancelTradeEvent,
    CreateTradeEvent,
    GameBoardCreatedEvent,
    GameEndedEvent,
    JoinGameEvent,
    MovePlayerEvent,
    PickAssetEvent,
    PickFundEvent,
    RejectTradeEvent,
    TRADE_OR_BURST_PROGRAM_ID,
    TradeOrBurstLib
} from "@mirrorworld/solana.tradeorburst";
const {
  components,
  systemCalls: { increment,joinGame,askStart,move,pickAsset,pickFund,trade,acceptTrade,rejectTrade,finishGame },
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
  globalThis.ponzi.gamestate_update?.(prevValue?.value, nextValue?.value);
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
  // console.log("MapItems updated", { nextValue, prevValue });
  globalThis.ponzi.mapitems_update?.(prevValue, nextValue);
});

components.IsPlayer.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("IsPlayer updated", update);
  globalThis.ponzi.isplayer_update?.(update);
});

components.TransactionList.update$.subscribe((update)=>{
  const [nextValue, prevValue] = update.value;
  console.log("TransactionList updated", update);
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
// components.UnsolicitedTransaction.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("UnsolicitedTransaction updated", update);
//   // globalThis.ponzi.tradelist_update?.(update);
// });
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

//get functions
(window as any).getPlayers = () => {
  return components.Player.values;
}

(window as any).getMapItems = ()=>{
  return components.MapItem.values;
}

(window as any).getAssetsList = ()=>{
  return components.AssetsList.values;
}

//Query
(window as any).queryValue = async (component, entity) => {
  const data = getComponentValueStrict(component, entity)
  console.log("getValueByComAndEntity:", data);
  return data;
};

(window as any).queryAssetsList = async ()=>{
    const matchingEntities = runQuery([
      Has(components.AssetsList)
      // Not(components.IsTrading)
    ])

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
(window as any).pickFund = async (assetKind) => {
  console.log("send pickFund:", assetKind);
  await pickFund();
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
  let data = await finishGame();
  console.log("send finishGame:"+data);
};


(window as any).getPhantom = async () =>{
  console.error(1212);
  const getProvider = () => {
      if ('phantom' in window) {
        const provider = window.phantom?.solana;
    
        if (provider?.isPhantom) {
          return provider;
        }
      }
    
      window.open('https://phantom.app/', '_blank');
  };
  
  const provider = getProvider(); // see "Detecting the Provider"
  provider.on("connect", () => console.log("connected!"));// Forget user's public key once they disconnect
  provider.on("disconnect", () => {
      console.log("dsconnected!")
  });
  provider.on('accountChanged', (publicKey) => {
      if (publicKey) {
        // Set new public key and continue as usual
        console.log(`Switched to account ${publicKey.toBase58()}`);
      } else {
        // Attempt to reconnect to Phantom
        provider.connect().catch((error) => {
          // Handle connection failure
        });
      }
  });
  

  // Will either automatically connect to Phantom, or do nothing.
  provider.connect({ onlyIfTrusted: true })
  .then(async ({publicKey}) => {
    console.log("public key:",publicKey);
      
      // const message = `To avoid digital dognappers, sign below to authenticate with CryptoCorgis`;
      // const encodedMessage = new TextEncoder().encode(message);
      // const signedMessage = await provider.signMessage(encodedMessage, "utf8");
      // Handle successful eager connection
      sendAndSign(publicKey,provider);
  })
  .catch(async () => {
      try {
          const resp = await provider.connect();
          console.log(resp.publicKey.toString());
          // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
          sendAndSign(resp.publicKey,provider);
      } catch (err) {
          // { code: 4001, message: 'User rejected the request.' }
      }
  });

  // const provider = getProvider(); // see "Detecting the Provider"
}

const sendAndSign = async function(publicKey:any,provider:any){
  console.log("sendAndSign enter...");
  // const network = 'https://solana-api.projectserum.com';
  // const network = 'mainnet-beta';
  // create a connection to the cluster
const connection = new Connection(clusterApiUrl());

// get the latest blockhash
const blockhash = await connection.getRecentBlockhash();
  // create a transfer instruction
  const transferInstruction = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: publicKey,
    lamports: 10,
  });

  // create a v0 compatible message
  const messageV0 = new TransactionMessage({
    payerKey: publicKey,
    recentBlockhash: blockhash.blockhash,
    instructions: [transferInstruction],
  }).compileToV0Message();

  // make a versioned transaction
  const transactionV0 = new VersionedTransaction(messageV0);




  // const connection = new Connection(network);
  // const transaction = new Transaction();
  const signResult = await provider.signAndSendTransaction(transactionV0);
  let status = await connection.getSignatureStatus(signResult.signature);
  console.log("phantom resutl:",signResult,status);
}







const timeDelay = 2500;
var tradeOrBurstLib:any = null;
const gameUuid = "game_5";
var signingAuthorityWalletKeypair:any = null;
var connection:any = null;

window.initSDK = async function(){

  const commitment: Commitment = 'processed';
  connection = new Connection('https://api.devnet.solana.com', {
      commitment,
      wsEndpoint: 'wss://api.devnet.solana.com/'
  });
  
  signingAuthorityWalletKeypair = await createKeypair(connection);
  console.log(process.env.NODE_ENV);
  // const userWallet = new NodeWallet(signingAuthorityWalletKeypair);
  const options = anchor.AnchorProvider.defaultOptions();
  // const userWallet = new NodeWallet(signingAuthorityWalletKeypair);
  const provider = new anchor.AnchorProvider(connection, null, options);
  anchor.setProvider(provider);

  const tradeOrBurstLib = new TradeOrBurstLib(TRADE_OR_BURST_PROGRAM_ID, connection, null);


  // tradeOrBurstLib = new TradeOrBurstLib(TRADE_OR_BURST_PROGRAM_ID, connection, userWallet);
  
  const handleJoinGameEvent = (ev: JoinGameEvent) =>
      console.log(ev);
  
  const handleGameBoardCreatedEvent = (ev: GameBoardCreatedEvent) =>
      console.log(ev);
  
  const handleMovePlayerEvent = (ev: MovePlayerEvent) =>
      console.log(ev);
  
  const handlePickFundEvent = (ev: PickFundEvent) =>
      console.log(ev);
  
  const handlePickAssetEvent = (ev: PickAssetEvent) =>
      console.log(ev);
  
  const handleGameEndedEvent = (ev: GameEndedEvent) =>
      console.log(ev);
  
  const handleCreateTradeEvent = (ev: CreateTradeEvent) =>
      console.log(ev);
  
  const handleCancelTradeEvent = (ev: CancelTradeEvent) =>
      console.log(ev);
  
  const handleRejectTradeEvent = (ev: RejectTradeEvent) =>
      console.log(ev);
  
  const handleAcceptTradeEvent = (ev: AcceptTradeEvent) =>
      console.log(ev);
  
  // Setup Event
  const joinGameEventListener = tradeOrBurstLib.addJoinGameEventListener(handleJoinGameEvent);
  const gameBoardCreatedEventListener = tradeOrBurstLib.addGameBoardCreatedEventListener(handleGameBoardCreatedEvent);
  const gameMovePlayerEventListener = tradeOrBurstLib.addMovePlayerEventListener(handleMovePlayerEvent);
  const pickFundEventListener = tradeOrBurstLib.addPickFundEventListener(handlePickFundEvent);
  const pickAssetEventListener = tradeOrBurstLib.addPickAssetEventListener(handlePickAssetEvent);
  const gameEndedEventListener = tradeOrBurstLib.addGameEndedEventListener(handleGameEndedEvent);
  const createTradeEventListener = tradeOrBurstLib.addCreateTradeEventListener(handleCreateTradeEvent);
  const cancelTradeEventListener = tradeOrBurstLib.addCancelTradeEventListener(handleCancelTradeEvent);
  const rejectTradeEventListener = tradeOrBurstLib.addRejectTradeEventListener(handleRejectTradeEvent);
  const acceptTradeEventListener = tradeOrBurstLib.addAcceptTradeEventListener(handleAcceptTradeEvent);
  
}


async function createKeypair(connection:any): Promise<Keypair> {
  let kp = Keypair.generate();
  console.log("new key: ", base58.encode(kp.secretKey));
  console.log("new key address: ", kp.publicKey.toBase58());

  await connection.requestAirdrop(kp.publicKey, 1 * LAMPORTS_PER_SOL);
  return kp;
}

(window as any).joinGame = async function(x: number, y: number) {
  if(!tradeOrBurstLib){
    console.error("tradeOrBurstLib is not inited yet!");
    return;
  }
  console.log("Started joinGame");
  let player: PublicKey = signingAuthorityWalletKeypair.publicKey.toBase58();
  let tx = await tradeOrBurstLib.createJoinGameTransaction(player, player, gameUuid, x, y);

  await tradeOrBurstLib.addFeePayerAndRecentBlockHashInTransaction(tx, player);

  tradeOrBurstLib.signTransaction(tx, base58.encode(signingAuthorityWalletKeypair.secretKey));

  let txHash = await connection.sendRawTransaction(tx.serialize());
  console.log("Tx Hash: ", txHash);

  await delay(timeDelay);
}

// async function removeEventListener(tradeOrBurstLib, listeners:any[]) {
//   console.log("Started removeEventListener");

//   await delay(2000);

//   for(let i=0;i<listeners.length;i++){
//     let lis:any = listeners[i]
//     await tradeOrBurstLib.removeEventListener(lis);
//   }
// }

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}