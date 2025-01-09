/**
 * @file useEthers.ts
 * @description Ethers.js Adapter Hooks for Wagmi
 *
 * ⚠️ IMPORTANT NOTE ⚠️
 * These hooks provide Ethers.js compatibility for projects using Wagmi.
 * While Viem is the recommended library for Wagmi interactions, these adapters
 * are provided for cases where Ethers.js is still needed, such as:
 *
 * - Gradual migration from Ethers.js to Viem
 * - Integration with third-party libraries that require Ethers.js
 * - Personal preference for Ethers.js
 *
 * If your project doesn't specifically require Ethers.js, it's recommended
 * to use Viem directly with Wagmi for better performance and compatibility.
 *
 * @see https://wagmi.sh/react/guides/ethers
 * @see https://viem.sh
 *
 * These hooks provide two main utilities:
 * - useEthersSigner: Converts a Wagmi Wallet Client to an Ethers.js Signer
 * - useEthersProvider: Converts a Wagmi Public Client to an Ethers.js Provider
 */

import { useMemo } from 'react';
import {
  BrowserProvider,
  JsonRpcSigner,
  FallbackProvider,
  JsonRpcProvider,
} from 'ethers';
import type { Account, Chain, Client, Transport } from 'viem';
import { type Config, useConnectorClient, useClient } from 'wagmi';

export function walletClientToSigner(
  client: Client<Transport, Chain, Account>
) {
  const { account, chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: client } = useConnectorClient<Config>({ chainId });
  return useMemo(
    () => (client ? walletClientToSigner(client) : undefined),
    [client]
  );
}

export function publicClientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === 'fallback') {
    const providers = (transport.transports as ReturnType<Transport>[]).map(
      ({ value }) => new JsonRpcProvider(value?.url, network)
    );
    if (providers.length === 1) return providers[0];
    return new FallbackProvider(providers);
  }
  return new JsonRpcProvider(transport.url, network);
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const client = useClient<Config>({ chainId });
  return useMemo(
    () => (!client ? undefined : publicClientToProvider(client)),
    [client]
  );
}
