import React, { PropsWithChildren, Fragment, useState, useEffect } from "react";
//React Redux
import { useDispatch } from "react-redux";
import {
  setAccountAddress,
  setAccountEnsName,
  setAccountBalance,
  setAccountProvider,
  setAccountSigner,
  disconnectAccount,
} from "@/redux/reducers/account";
//Wagmi
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { fetchBalance, fetchEnsName } from "@wagmi/core";
//Importing Components
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: PropsWithChildren) {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  //Account Address
  const { address } = useAccount();
  //Signer
  const { data: walletClient } = useWalletClient();
  //Provider
  const publicClient = usePublicClient();

  dispatch(setAccountAddress(address));
  dispatch(setAccountSigner(walletClient));
  dispatch(setAccountProvider(publicClient.chain));
  //Account Balance ETH
  address
    ? fetchBalance({
        address: address,
      }).then((balance) => dispatch(setAccountBalance(balance)))
    : dispatch(setAccountBalance(0));
  //Account Ens Name
  address && publicClient.chain.id === 1
    ? fetchEnsName({
        address: address,
      }).then((ensName) => dispatch(setAccountEnsName(ensName)))
    : dispatch(setAccountEnsName(null));

  useAccount({
    onDisconnect: () => {
      dispatch(disconnectAccount());
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="wrapper">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
