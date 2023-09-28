
// import { Buffer } from 'buffer';
// // @ts-ignore
// window.Buffer = Buffer;
// import { Connection, TransactionMessage, VersionedTransaction, SystemProgram, Transaction, clusterApiUrl, Keypair, Commitment, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
// import * as anchor from "@coral-xyz/anchor";
// import * as base58 from 'bs58';
// import NodeWallet from '@coral-xyz/anchor/dist/cjs/nodewallet';
// import {
//     AcceptTradeEvent,
//     assetTypeEnum,
//     CancelTradeEvent,
//     CreateTradeEvent,
//     GameBoardCreatedEvent,
//     GameEndedEvent,
//     JoinGameEvent,
//     MovePlayerEvent,
//     PickAssetEvent,
//     PickFundEvent,
//     RejectTradeEvent,
//     TRADE_OR_BURST_PROGRAM_ID,
//     TradeOrBurstLib
// } from "@mirrorworld/solana.tradeorburst";


// (window as any).getPhantom = async () =>{
//   console.error(1212);
//   const getProvider = () => {
//       if ('phantom' in window) {
//         const provider = window.phantom?.solana;
    
//         if (provider?.isPhantom) {
//           return provider;
//         }
//       }
    
//       window.open('https://phantom.app/', '_blank');
//   };
  
//   const provider = getProvider(); // see "Detecting the Provider"
//   provider.on("connect", () => console.log("connected!"));// Forget user's public key once they disconnect
//   provider.on("disconnect", () => {
//       console.log("dsconnected!")
//   });
//   provider.on('accountChanged', (publicKey) => {
//       if (publicKey) {
//         // Set new public key and continue as usual
//         console.log(`Switched to account ${publicKey.toBase58()}`);
//       } else {
//         // Attempt to reconnect to Phantom
//         provider.connect().catch((error) => {
//           // Handle connection failure
//         });
//       }
//   });
  

//   // Will either automatically connect to Phantom, or do nothing.
//   provider.connect({ onlyIfTrusted: true })
//   .then(async ({publicKey}) => {
//     console.log("public key:",publicKey);
      
//       // const message = `To avoid digital dognappers, sign below to authenticate with CryptoCorgis`;
//       // const encodedMessage = new TextEncoder().encode(message);
//       // const signedMessage = await provider.signMessage(encodedMessage, "utf8");
//       // Handle successful eager connection
//       sendAndSign(publicKey,provider);
//   })
//   .catch(async () => {
//       try {
//           const resp = await provider.connect();
//           console.log(resp.publicKey.toString());
//           // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
//           sendAndSign(resp.publicKey,provider);
//       } catch (err) {
//           // { code: 4001, message: 'User rejected the request.' }
//       }
//   });

//   // const provider = getProvider(); // see "Detecting the Provider"
// }

// const sendAndSign = async function(publicKey:any,provider:any){
//   console.log("sendAndSign enter...");
//   // const network = 'https://solana-api.projectserum.com';
//   // const network = 'mainnet-beta';
//   // create a connection to the cluster
// const connection = new Connection(clusterApiUrl());

// // get the latest blockhash
// const blockhash = await connection.getRecentBlockhash();
//   // create a transfer instruction
//   const transferInstruction = SystemProgram.transfer({
//     fromPubkey: publicKey,
//     toPubkey: publicKey,
//     lamports: 10,
//   });

//   // create a v0 compatible message
//   const messageV0 = new TransactionMessage({
//     payerKey: publicKey,
//     recentBlockhash: blockhash.blockhash,
//     instructions: [transferInstruction],
//   }).compileToV0Message();

//   // make a versioned transaction
//   const transactionV0 = new VersionedTransaction(messageV0);




//   // const connection = new Connection(network);
//   // const transaction = new Transaction();
//   const signResult = await provider.signAndSendTransaction(transactionV0);
//   let status = await connection.getSignatureStatus(signResult.signature);
//   console.log("phantom resutl:",signResult,status);
// }







// const timeDelay = 2500;
// var tradeOrBurstLib:any = null;
// const gameUuid = "game_5";
// var signingAuthorityWalletKeypair:any = null;
// var connection:any = null;

// window.initSDK = async function(){

//   const commitment: Commitment = 'processed';
//   connection = new Connection('https://api.devnet.solana.com', {
//       commitment,
//       wsEndpoint: 'wss://api.devnet.solana.com/'
//   });
  
//   signingAuthorityWalletKeypair = await createKeypair(connection);
//   console.log(process.env.NODE_ENV);
//   // const userWallet = new NodeWallet(signingAuthorityWalletKeypair);
//   const options = anchor.AnchorProvider.defaultOptions();
//   // const userWallet = new NodeWallet(signingAuthorityWalletKeypair);
//   const provider = new anchor.AnchorProvider(connection, null, options);
//   anchor.setProvider(provider);

//   const tradeOrBurstLib = new TradeOrBurstLib(TRADE_OR_BURST_PROGRAM_ID, connection, null);


//   // tradeOrBurstLib = new TradeOrBurstLib(TRADE_OR_BURST_PROGRAM_ID, connection, userWallet);
  
//   const handleJoinGameEvent = (ev: JoinGameEvent) =>
//       console.log(ev);
  
//   const handleGameBoardCreatedEvent = (ev: GameBoardCreatedEvent) =>
//       console.log(ev);
  
//   const handleMovePlayerEvent = (ev: MovePlayerEvent) =>
//       console.log(ev);
  
//   const handlePickFundEvent = (ev: PickFundEvent) =>
//       console.log(ev);
  
//   const handlePickAssetEvent = (ev: PickAssetEvent) =>
//       console.log(ev);
  
//   const handleGameEndedEvent = (ev: GameEndedEvent) =>
//       console.log(ev);
  
//   const handleCreateTradeEvent = (ev: CreateTradeEvent) =>
//       console.log(ev);
  
//   const handleCancelTradeEvent = (ev: CancelTradeEvent) =>
//       console.log(ev);
  
//   const handleRejectTradeEvent = (ev: RejectTradeEvent) =>
//       console.log(ev);
  
//   const handleAcceptTradeEvent = (ev: AcceptTradeEvent) =>
//       console.log(ev);
  
//   // Setup Event
//   const joinGameEventListener = tradeOrBurstLib.addJoinGameEventListener(handleJoinGameEvent);
//   const gameBoardCreatedEventListener = tradeOrBurstLib.addGameBoardCreatedEventListener(handleGameBoardCreatedEvent);
//   const gameMovePlayerEventListener = tradeOrBurstLib.addMovePlayerEventListener(handleMovePlayerEvent);
//   const pickFundEventListener = tradeOrBurstLib.addPickFundEventListener(handlePickFundEvent);
//   const pickAssetEventListener = tradeOrBurstLib.addPickAssetEventListener(handlePickAssetEvent);
//   const gameEndedEventListener = tradeOrBurstLib.addGameEndedEventListener(handleGameEndedEvent);
//   const createTradeEventListener = tradeOrBurstLib.addCreateTradeEventListener(handleCreateTradeEvent);
//   const cancelTradeEventListener = tradeOrBurstLib.addCancelTradeEventListener(handleCancelTradeEvent);
//   const rejectTradeEventListener = tradeOrBurstLib.addRejectTradeEventListener(handleRejectTradeEvent);
//   const acceptTradeEventListener = tradeOrBurstLib.addAcceptTradeEventListener(handleAcceptTradeEvent);
  
// }


// async function createKeypair(connection:any): Promise<Keypair> {
//   let kp = Keypair.generate();
//   console.log("new key: ", base58.encode(kp.secretKey));
//   console.log("new key address: ", kp.publicKey.toBase58());

//   await connection.requestAirdrop(kp.publicKey, 1 * LAMPORTS_PER_SOL);
//   return kp;
// }

// (window as any).joinGame = async function(x: number, y: number) {
//   if(!tradeOrBurstLib){
//     console.error("tradeOrBurstLib is not inited yet!");
//     return;
//   }
//   console.log("Started joinGame");
//   let player: PublicKey = signingAuthorityWalletKeypair.publicKey.toBase58();
//   let tx = await tradeOrBurstLib.createJoinGameTransaction(player, player, gameUuid, x, y);

//   await tradeOrBurstLib.addFeePayerAndRecentBlockHashInTransaction(tx, player);

//   tradeOrBurstLib.signTransaction(tx, base58.encode(signingAuthorityWalletKeypair.secretKey));

//   let txHash = await connection.sendRawTransaction(tx.serialize());
//   console.log("Tx Hash: ", txHash);

//   await delay(timeDelay);
// }

// // async function removeEventListener(tradeOrBurstLib, listeners:any[]) {
// //   console.log("Started removeEventListener");

// //   await delay(2000);

// //   for(let i=0;i<listeners.length;i++){
// //     let lis:any = listeners[i]
// //     await tradeOrBurstLib.removeEventListener(lis);
// //   }
// // }

// function delay(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }