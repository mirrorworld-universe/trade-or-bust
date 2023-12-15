import { MUDChain, latticeTestnet, mudFoundry } from "@latticexyz/common/chains";

// import type { MUDChain } from "./types";

export const redStone = {
  name: "Red Stone",
  id: 17001,
  network: "red-stone",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  rpcUrls: {
    default: {
      http: ["https://rpc.holesky.redstone.xyz"],
      webSocket: ["wss://rpc.holesky.redstone.xyz/ws"],
    },
    public: {
      http: ["https://rpc.holesky.redstone.xyz"],
      webSocket: ["wss://rpc.holesky.redstone.xyz/ws"],
    },
  },
  blockExplorers: {
    otterscan: {
      name: "Otterscan",
      url: "https://explorer.holesky.redstone.xyz",
    },
    default: {
      name: "Otterscan",
      url: "https://explorer.holesky.redstone.xyz",
    },
  },
  faucetUrl: "https://faucet.testnet-mud-services.linfra.xyz",
} as const satisfies MUDChain;

export const viction = {
  name: "Viction",
  id: 89,
  network: "viction",
  nativeCurrency: { decimals: 18, name: "Ether", symbol: "ETH" },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.tomochain.com"],
      webSocket: ["wss://ws.testnet.tomochain.com"],
    },
    public: {
      http: ["https://rpc.testnet.tomochain.com"],
      webSocket: ["wss://ws.testnet.tomochain.com"],
    },
  },
  blockExplorers: {
    otterscan: {
      name: "Otterscan",
      url: "https://scan-ui-testnet.viction.xyz/",
    },
    default: {
      name: "Otterscan",
      url: "https://scan-ui-testnet.viction.xyz/",
    },
  },
  faucetUrl: "https://faucet.testnet-mud-services.linfra.xyz",
  //https://faucet.testnet.tomochain.com/
} as const satisfies MUDChain;


// If you are deploying to chains other than anvil or Lattice testnet, add them here
export const supportedChains: MUDChain[] = [mudFoundry, latticeTestnet, redStone, viction];