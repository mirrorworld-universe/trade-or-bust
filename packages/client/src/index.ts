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
  currentPlayer:null,
  gameState:null,
  game:null,
  gameMap:null,
  mapItems:null,
  players:null
}

globalThis.env = {
  components:components
};

// Components expose a stream that triggers when the component is updated.
// components.GameState.update$.subscribe((update) => {
//   const [nextValue, prevValue] = update.value;
//   console.log("GameState updated", update, { nextValue, prevValue });
//   globalThis.ponzi.gameState = nextValue.value;
//   globalThis.ponzi.gamestate_update?.(prevValue?.value, nextValue?.value);
// });

// components.Counter.update$.subscribe((update) => {
//     const [nextValue, prevValue] = update.value;
//     console.log("Counter updated", update, { nextValue, prevValue });
//     globalThis.ponzi.counter = nextValue;
//     globalThis.ponzi.counter_update?.(prevValue, nextValue);
// });

// components.Game.update$.subscribe((update) => {
//   const [nextValue, prevValue] = update.value;
//   console.log("Game updated", update, { nextValue, prevValue });
//   globalThis.ponzi.game = nextValue;
//   globalThis.ponzi.game_update?.(prevValue, nextValue);
// });

// components.Player.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("Player updated", update, { nextValue, prevValue });
//   // globalThis.ponzi.player_update?.(prevValue, nextValue);
//   globalThis.ponzi.player_update?.(update);
// });

// components.GameMap.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("GameMap updated", { nextValue, prevValue });
//   globalThis.ponzi.gameMap = nextValue
//   globalThis.ponzi.gamemap_update?.(prevValue, nextValue);
// });

// components.MapItem.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   // console.log("MapItems updated", { nextValue, prevValue });
//   globalThis.ponzi.mapitems_update?.(prevValue, nextValue);
// });

// components.IsPlayer.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("IsPlayer updated", update);
//   globalThis.ponzi.isplayer_update?.(update);
// });

// components.TransactionList.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("TransactionList updated", update);
//   globalThis.ponzi.transactionlist_update?.(update);
// });

// components.Log.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("Log updated", update);
// });

// components.AssetsList.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("AssetsList updated", update);
//   globalThis.ponzi.assetslist_update?.(update);
// });

// components.RaiseColddown.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("RaiseColddown updated", update);
//   globalThis.ponzi.raiseColddown_update?.(update);
// });

// //Trade
// // components.UnsolicitedTransaction.update$.subscribe((update)=>{
// //   const [nextValue, prevValue] = update.value;
// //   console.log("UnsolicitedTransaction updated", update);
// //   // globalThis.ponzi.tradelist_update?.(update);
// // });
// components.PassiveTransaction.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("PassiveTransaction updated", update);
//   globalThis.ponzi.passivetransaction_update?.(update);
// });
// components.TradeList.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("TradeList updated", update);
//   globalThis.ponzi.tradelist_update?.(update);
// });
// components.PlayerGameResult.update$.subscribe((update)=>{
//   const [nextValue, prevValue] = update.value;
//   console.log("PlayerGameResult updated", update);
//   globalThis.ponzi.playergameresult_update?.(update);
// });

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
var signingAuthorityWalletKeypair:Keypair = null;
var connection:any = null;

(window as any).solanaSetAccount = function(storeString:string){
  const encoder = new TextEncoder();
  const uint8Array = encoder.encode(storeString);
  signingAuthorityWalletKeypair = Keypair.fromSecretKey(uint8Array);
  console.log("solana set account success:",signingAuthorityWalletKeypair);
}
const playerOneSecretKey1 = "51eqcESEbATa1ATeogwAaHyD2Y4HvN8MYsgxHeGrhpxdeN1Dk3DZnAgzz2Vz1UeMxwkFuW5b7XjaRZzYU5RGbWhh";
const playerOneSecretKey2 = "9LYsKjFgx2QEV41tjaoQdcMXbTWKLLkWszzMJYyWZQxPwRHxp7TcG9zShrT3hDmsKZSYesU4UGUFq2DG76sQqJA";
   
const playerOneSecretKey3 = "n2snxW72Lo8fYujTA2ALaeT5RWRR8HbZ7axuKz8ZTGUEMkv99g2SnB6yjaKmTqniutk8BHVqCZdr4FQnZyUJeMN";
const playerTwoSecretKey4 = "3ZcBG7cAJ8mHTAWuiENvWqTGPNnW9nN17JPw2jSpfx5RNrM1zQ1gN1oVwoNX84HxKCU31BQRAq8rLMDSGTtK27ut";
window.initSDK = async function(gameUuid:string, useTestAccount:number){
  console.log("start init sdk");
  if(!gameUuid){
    console.warn("please specified game uuid in your url");
    return;
  }
  console.log("start init sdk gameuuid:",gameUuid);
  window.gameUuid = gameUuid;
  if(useTestAccount == 1){
    const playerOneSecretKey = playerOneSecretKey1;
    const playerOneKeypair = Keypair.fromSecretKey(base58.decode(playerOneSecretKey))
    signingAuthorityWalletKeypair = new Keypair();
    signingAuthorityWalletKeypair = playerOneKeypair;
    window.playerOneKeypair = playerOneKeypair;
    globalThis.ponzi.currentPlayer = signingAuthorityWalletKeypair.publicKey.toBase58();
    console.log("use key: ", playerOneSecretKey);
    console.log("use key address: ", globalThis.ponzi.currentPlayer);
  }else if(useTestAccount == 2){
    const playerOneSecretKey = playerOneSecretKey2;
    const playerOneKeypair = Keypair.fromSecretKey(base58.decode(playerOneSecretKey))
    signingAuthorityWalletKeypair = new Keypair();
    signingAuthorityWalletKeypair = playerOneKeypair;
    window.playerOneKeypair = playerOneKeypair;
    globalThis.ponzi.currentPlayer = signingAuthorityWalletKeypair.publicKey.toBase58();
    console.log("use key: ", playerOneSecretKey);
    console.log("use key address: ", globalThis.ponzi.currentPlayer);
  }else{
    console.warn("please specified id in your url");
    const playerOneSecretKey = playerOneSecretKey1;
    const playerOneKeypair = Keypair.fromSecretKey(base58.decode(playerOneSecretKey))
    signingAuthorityWalletKeypair = new Keypair();
    signingAuthorityWalletKeypair = playerOneKeypair;
    console.log("use key: ", playerOneSecretKey);
    console.log("use key address: ", signingAuthorityWalletKeypair.publicKey.toBase58());
  }
  console.log("init sdk parse test account success");

  const commitment: Commitment = 'processed';
  connection = new Connection('https://api.devnet.solana.com', {
      commitment,
      wsEndpoint: 'wss://api.devnet.solana.com/'
  });
  
  // signingAuthorityWalletKeypair = await createKeypair(connection);
  console.log(process.env.NODE_ENV);
  // const userWallet = new NodeWallet(signingAuthorityWalletKeypair);
  const options = anchor.AnchorProvider.defaultOptions();
  // const userWallet = new NodeWallet(signingAuthorityWalletKeypair);
  const provider = new anchor.AnchorProvider(connection, null, options);
  anchor.setProvider(provider);

  tradeOrBurstLib = new TradeOrBurstLib(TRADE_OR_BURST_PROGRAM_ID, connection, null);


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
  
};


(window as any).createKeypair = async function() {
  if(!connection){
    console.error("solana sdk not inited!");
    return null;
  }

  let kp = Keypair.generate();
  signingAuthorityWalletKeypair = kp;

  await connection.requestAirdrop(kp.publicKey, 1 * LAMPORTS_PER_SOL);
  return kp;
};

(window as any).solanaIsJoined = async () => {
  console.log("solanaIsJoined");
  if(!window.playerOneKeypair){
    console.warn("SDK not inited, no player");
    return false;
  }
  const player:PublicKey = window.playerOneKeypair.publicKey;
  console.log("solanaIsJoined player ",player);
  let isJoined = await tradeOrBurstLib.isPlayerJoinGame(window.gameUuid, player);
  console.log("player ",player," is joined:",isJoined);
  return isJoined;
}

(window as any).solanaJoinGame = async function(x: number, y: number) {
  if(!tradeOrBurstLib){
    console.error("tradeOrBurstLib is not inited yet!");
    return;
  }
  if(!signingAuthorityWalletKeypair){
    console.error("need to set account or create account first!");
    return;
  }


  let player: PublicKey = signingAuthorityWalletKeypair.publicKey;
  let isJoined = await tradeOrBurstLib.isPlayerJoinGame(window.gameUuid, player);
  if(isJoined){
    console.error("player ",player," is joined the game already.");
    return;
  }
  let tx = await tradeOrBurstLib.createJoinGameTransaction(player, player, window.gameUuid, x, y);

  await tradeOrBurstLib.addFeePayerAndRecentBlockHashInTransaction(tx, player);

  tradeOrBurstLib.signTransaction(tx, base58.encode(signingAuthorityWalletKeypair.secretKey));

  let txHash = await connection.sendRawTransaction(tx.serialize());
  console.log("Tx Hash: ", txHash);

  // await delay(timeDelay);
};

(window as any).queryGame = async function() {
  if(!connection){
    console.error("solana sdk not inited!");
    return null;
  }
  let gameInfo:any = await tradeOrBurstLib.getGameBoardAccountData(window.gameUuid)
  console.log("gameinfo:",gameInfo);
  return gameInfo;
};

(window as any).solanaQueryPlayers = async function(players: number[]) {
  let keys = [];
  players.forEach(function(ele){
    if(ele == 1){
      const playerOneSecretKey = playerOneSecretKey1;
      const playerOneKeypair = Keypair.fromSecretKey(base58.decode(playerOneSecretKey))
      keys.push(playerOneKeypair.publicKey.toBase58());
    }else if(ele == 2){
      const playerOneSecretKey = playerOneSecretKey2;
      const playerOneKeypair = Keypair.fromSecretKey(base58.decode(playerOneSecretKey))
      keys.push(playerOneKeypair.publicKey.toBase58());
    }
  });
  let data = await tradeOrBurstLib.queryFromChain(window.gameUuid, keys);
  return data;
};

(window as any).solanaMovePlayer = async function(x: number, y: number) {
  console.log("Started movePlayer");
  if(!window.gameUuid){
    console.error("SDK not inited!");
    return;
  }
  let player:PublicKey = window.playerOneKeypair.publicKey;
  let tx = await tradeOrBurstLib.createMovePlayerTransaction(player, player, window.gameUuid, x, y);

  await tradeOrBurstLib.addFeePayerAndRecentBlockHashInTransaction(tx, player);

  tradeOrBurstLib.signTransaction(tx, base58.encode(window.playerOneKeypair.secretKey));

  let txHash = await connection.sendRawTransaction(tx.serialize());
  console.log("Tx Hash: ", txHash);

  // await delay(timeDelay);
};



(window as any).solanaPickFund = async function() {
  console.log("Started pickFund");
  if(!window.gameUuid){
    console.error("SDK not inited!");
    return;
  }
  let player:PublicKey = window.playerOneKeypair.publicKey;
  let tx = await tradeOrBurstLib.createPickFundTransaction(player, player, window.gameUuid);

  await tradeOrBurstLib.addFeePayerAndRecentBlockHashInTransaction(tx, player);

  tradeOrBurstLib.signTransaction(tx, base58.encode(window.playerOneKeypair.secretKey));

  let txHash = await connection.sendRawTransaction(tx.serialize());
  console.log("Tx Hash: ", txHash);

  await delay(timeDelay);
};

(window as any).solanaPickAsset = async function(asset: assetTypeEnum) {
  console.log("Started pickAsset");
  if(!window.gameUuid){
    console.error("SDK not inited!");
    return;
  }
  let player:PublicKey = window.playerOneKeypair.publicKey;
  let tx = await tradeOrBurstLib.createPickAssetTransaction(player, player, window.gameUuid, asset);

  await tradeOrBurstLib.addFeePayerAndRecentBlockHashInTransaction(tx, player);

  tradeOrBurstLib.signTransaction(tx, base58.encode(window.playerOneKeypair.secretKey));

  let txHash = await connection.sendRawTransaction(tx.serialize());
  console.log("Tx Hash: ", txHash);

  await delay(timeDelay);
};

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}