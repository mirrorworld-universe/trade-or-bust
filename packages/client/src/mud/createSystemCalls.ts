import { getComponentValue,getComponentValueStrict, Has, Not  } from "@latticexyz/recs";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";
import { singletonEntity } from "@latticexyz/store-sync/recs";


export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldContract, waitForTransaction }: SetupNetworkResult,
  { Counter,GameState,Game,IsPlayer,Player,AssetsList }: ClientComponents
) {
  const increment = async () => {
    const tx = await worldContract.write.increment();
    await waitForTransaction(tx);
    return getComponentValue(Counter, singletonEntity);
  };
  const joinGame = async () => {
    const tx = await worldContract.write.joinGame();
    await waitForTransaction(tx);
    return getComponentValue(IsPlayer, singletonEntity);
  };
  const askStart = async () => {
    const tx = await worldContract.write.askStart();
    await waitForTransaction(tx);
    return getComponentValue(GameState, singletonEntity);
  };

  const move = async (x:number,y:number) => {
    // const tx = await worldSend("move", [x, y]);
    const tx = await worldContract.write.move([x,y]);
    await waitForTransaction(tx);
    return getComponentValue(Player, singletonEntity);
  };

  const pickAsset = async (assetType:number) => {
    const tx = await worldContract.write.pickAsset([assetType]);
    await waitForTransaction(tx);
    return getComponentValue(AssetsList, singletonEntity);
  };

  const pickFund = async () => {
    const tx = await worldContract.write.pickFund();
    await waitForTransaction(tx);
  };

  return {
    increment,
    joinGame,
    askStart,
    move,
    pickAsset,
    pickFund
  };
}
