import { Provider, Address } from "@wagmi/core";
import { Signer } from "ethers";

export interface initialState {
  address?: Address;
  ensName?: string;
  balance?: number;
  provider?: Provider;
  signer?: Signer;
}
