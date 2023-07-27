//Importing Interfaces
import { FetchBalanceResult } from "@/lib/types/reduxInterface";

export const WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // Mainnet

export const ETH_BALANCE: FetchBalanceResult = {
  decimals: 18,
  formatted: "0",
  symbol: "ETH",
  value: BigInt(0),
};
