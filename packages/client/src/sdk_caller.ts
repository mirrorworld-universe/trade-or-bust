import * as anchor from "@coral-xyz/anchor";
import * as base58 from 'bs58';
import {Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey} from '@solana/web3.js';
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

const timeDelay = 2500;
var tradeOrBurstLib = null;

window.initSDK = async function(){

  const commitment: Commitment = 'processed';
  const connection = new Connection('https://api.devnet.solana.com', {
      commitment,
      wsEndpoint: 'wss://api.devnet.solana.com/'
  });
  
  const signingAuthorityWalletKeypair = await createKeypair(connection);
  const userWallet = new NodeWallet(signingAuthorityWalletKeypair);
  tradeOrBurstLib = new TradeOrBurstLib(TRADE_OR_BURST_PROGRAM_ID, connection, userWallet);
  
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
  
  const gameUuid = "game_5";
}


async function createKeypair(connection:any): Promise<Keypair> {
  let kp = Keypair.generate();
  console.log("new key: ", base58.encode(kp.secretKey));
  console.log("new key address: ", kp.publicKey.toBase58());

  await connection.requestAirdrop(kp.publicKey, 1 * LAMPORTS_PER_SOL);
  return kp;
}


async function sendRequest(lib,connection,publicKey,gameUuid) {
  // await createKeypair();
  // console.log(playerOneKeypair.publicKey.toBase58())

  // await initializeGameConfig(signingAuthorityWalletKeypair.publicKey, 300, 20, signingAuthorityWalletKeypair);

  // await updateGameConfig(signingAuthorityWalletKeypair.publicKey, 3000, 20, signingAuthorityWalletKeypair);

  // Player one join the game
  // await joinGame(lib,connection,playerOneKeypair.publicKey, gameUuid, 1001, 1001, playerOneKeypair);

  // player two join the game
  // await joinGame(playerTwoKeypair.publicKey, gameUuid, 2001, 2001, playerTwoKeypair);

  // ON Chain Data
  // let playersAddress: string[] = [playerOneKeypair.publicKey.toBase58(), playerTwoKeypair.publicKey.toBase58()];
  // await onChainData(gameUuid, playersAddress);

  // player one pick fund
  // await pickFund(playerOneKeypair.publicKey, gameUuid, playerOneKeypair);

  // player two pick asset bitcoin
  // await pickAsset(playerTwoKeypair.publicKey, gameUuid, assetTypeEnum.Bitcoin, playerTwoKeypair);

  // player one move
  // await movePlayer(playerOneKeypair.publicKey, gameUuid, 1002, 1002, playerOneKeypair);

  // player one (buyer) create trade with player two (seller) (Trade 1)
  // await createTrade(playerOneKeypair.publicKey, playerTwoKeypair.publicKey, gameUuid, 50, assetTypeEnum.Bitcoin, 1, playerOneKeypair);

  // player one (buyer) cancel trade with player two (seller) (Trade 1)
  // await cancelTrade(playerOneKeypair.publicKey, playerTwoKeypair.publicKey, gameUuid, playerOneKeypair);

  // player one (buyer) create trade with player two (seller) (Trade 2)
  // await createTrade(playerOneKeypair.publicKey, playerTwoKeypair.publicKey, gameUuid, 50, assetTypeEnum.Bitcoin, 1, playerOneKeypair);

  // player two (seller) reject trade with player one (buyer) (Trade 2)
  // await rejectTrade(playerOneKeypair.publicKey, playerTwoKeypair.publicKey, gameUuid, playerTwoKeypair);

  // player one (buyer) create trade with player two (seller) (Trade 3)
  // await createTrade(playerOneKeypair.publicKey, playerTwoKeypair.publicKey, gameUuid, 50, assetTypeEnum.Bitcoin, 1, playerOneKeypair);

  // player two (seller) accept trade with player one (buyer) (Trade 3)
  // await acceptTrade(playerOneKeypair.publicKey, playerTwoKeypair.publicKey, gameUuid, playerTwoKeypair);

  // await removeEventListener();
}

(window as any).joinGame = async function(tradeOrBurstLib:any, connection:any, player: PublicKey, gameUuid: string, x: number, y: number, signer: Keypair) {
  if(!tradeOrBurstLib){
    console.error("tradeOrBurstLib is not inited yet!");
    return;
  }
  console.log("Started joinGame");
  let tx = await tradeOrBurstLib.createJoinGameTransaction(player, player, gameUuid, x, y);

  await tradeOrBurstLib.addFeePayerAndRecentBlockHashInTransaction(tx, player);

  tradeOrBurstLib.signTransaction(tx, base58.encode(signer.secretKey));

  let txHash = await connection.sendRawTransaction(tx.serialize());
  console.log("Tx Hash: ", txHash);

  await delay(timeDelay);
}

async function removeEventListener(tradeOrBurstLib, listeners:any[]) {
  console.log("Started removeEventListener");

  await delay(2000);

  for(let i=0;i<listeners.length;i++){
    let lis:any = listeners[i]
    await tradeOrBurstLib.removeEventListener(lis);
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}