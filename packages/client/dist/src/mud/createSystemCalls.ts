import { getComponentValue,getComponentValueStrict, Has, Not  } from "@latticexyz/recs";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";
import { singletonEntity } from "@latticexyz/store-sync/recs";


export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldContract, waitForTransaction }: SetupNetworkResult,
  { Counter,GameState,Game }: ClientComponents
) {
  const increment = async () => {
    const tx = await worldContract.write.increment();
    await waitForTransaction(tx);
    return getComponentValue(Counter, singletonEntity);
  };
  const joinGame = async () => {
    const tx = await worldContract.write.joinGame();
    await waitForTransaction(tx);
    return getComponentValue(Game, singletonEntity);
  };
  const askStart = async () => {
    const tx = await worldContract.write.askStart();
    await waitForTransaction(tx);
    return getComponentValue(GameState, singletonEntity);
  };

  return {
    increment,
    joinGame,
    askStart
  };
}
