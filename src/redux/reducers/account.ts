import { createSlice } from "@reduxjs/toolkit";
import type { initialState as is } from "../../lib/types/reduxInterface";

const initialState: is = {
  address: undefined,
  ensName: undefined,
  balance: 0,
  provider: undefined,
  signer: undefined,
};

const accounSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountAddress(state, action) {
      state.address = action.payload;
    },
    setAccountEnsName(state, action) {
      state.ensName = action.payload;
    },
    setAccountBalance(state, action) {
      state.balance = action.payload;
    },
    setAccountProvider(state, action) {
      state.provider = action.payload;
    },
    setAccountSigner(state, action) {
      state.signer = action.payload;
    },
    disconnectAccount() {
      return initialState;
    },
  },
});

export const {
  setAccountAddress,
  setAccountEnsName,
  setAccountBalance,
  setAccountProvider,
  setAccountSigner,
  disconnectAccount,
} = accounSlice.actions;

//Select the account
export const selectAccount = (state: any) => state.account;
//Select the account Data
export const selectAccountAddress = (state: any) => state.account.address;
export const selectAccountEnsName = (state: any) => state.account.ensName;
//Select the balance Data
export const selectAccountBalance = (state: any) => state.account.balance;
export const selectAccountBalanceDecimals = (state: any) =>
  state.account.balance?.decimals;
export const selectAccountBalanceFormatted = (state: any) =>
  state.account.balance?.formatted;
export const selectAccountBalanceSymbol = (state: any) =>
  state.account.balance?.symbol;
//Select the provider Data
export const selectChainId = (state: any) => state.account.provider?.chainId;
export const selectProviderName = (state: any) => state.account.provider?.name;
export const selectProviderNativeCurrency = (state: any) =>
  state.account.provider?.nativeCurrency;
//Select RPC URL
export const selectRpcUrl = (state: any) =>
  state.account.provider?.rpcUrls.default.http[0];
export const selectRpcUrlAlchemy = (state: any) =>
  state.account.provider?.rpcUrls.alchemy.http[0];
export const selectRpcUrlInfura = (state: any) =>
  state.account.provider?.rpcUrls.infura.http[0];
export const selectRpcUrlPublic = (state: any) =>
  state.account.provider?.rpcUrls.public.http[0];
  //Select the Signer
export const selectSigner = (state: any) => state.account.signer;

export default accounSlice.reducer;
