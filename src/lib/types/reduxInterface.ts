import { PublicClient, Address } from "@wagmi/core";
import { Signer } from "ethers";

export interface initialState {
  address?: Address;
  ensName?: string;
  balance?: number;
  provider?: PublicClient;
  signer?: Signer;
}
