import { PublicClient, Address } from "@wagmi/core";
import { Signer } from "ethers";

export interface FetchBalanceResult {
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
}

export interface initialState {
  address: Address;
  ensName?: string;
  balance: FetchBalanceResult;
  provider?: PublicClient;
  signer?: Signer;
}
