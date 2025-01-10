import '@rainbow-me/rainbowkit/styles.css';
import { http, fallback } from 'wagmi';
import { arbitrum, base, mainnet, sepolia } from 'wagmi/chains';
import { getDefaultConfig, WalletList } from '@rainbow-me/rainbowkit';
import {
  coinbaseWallet,
  coin98Wallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  okxWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

/**
 * WalletConnect Project ID
 * @description Required for all dApps using WalletConnect. Get your free projectId at
 * @see https://cloud.walletconnect.com/sign-in
 */
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID || '';

/**
 * RPC Configuration
 * @description Default RPC endpoints with fallbacks
 */
const RPC_URLS = {
  MAINNET: [
    mainnet.rpcUrls.default.http[0], // Default RPC
    'https://rpc.ankr.com/eth', // Ankr
    'https://eth.llamarpc.com', // Llama
  ],
  ARBITRUM: [
    arbitrum.rpcUrls.default.http[0], // Default RPC
    'https://rpc.ankr.com/arbitrum', // Ankr
    'https://arbitrum.llamarpc.com', // Llama
  ],
  BASE: [
    base.rpcUrls.default.http[0], // Default RPC
    'https://base-rpc.publicnode.com', // Public Node
    'https://base.llamarpc.com', // Llama
  ],
} as const;

/**
 * Transport Configuration
 * @description Fallback configuration for RPC endpoints
 */
const transports = {
  [mainnet.id]: fallback(RPC_URLS.MAINNET.map((url) => http(url))),
  [arbitrum.id]: fallback(RPC_URLS.ARBITRUM.map((url) => http(url))),
  [base.id]: fallback(RPC_URLS.BASE.map((url) => http(url))),
};

//const { wallets } = getDefaultWallets();
const wallets: WalletList = [
  //...getDefaultWallets().wallets,
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet,
      rainbowWallet,
      rabbyWallet,
      ledgerWallet,
      walletConnectWallet,
    ],
  },
  {
    groupName: 'Other Wallets',
    wallets: [
      phantomWallet,
      coinbaseWallet,
      coin98Wallet,
      trustWallet,
      uniswapWallet,
      injectedWallet,
      okxWallet,
      safeWallet,
    ],
  },
];

export const wagmiConfig = getDefaultConfig({
  appName: 'Next dApp Template',
  projectId: projectId,
  wallets: wallets,
  chains: [
    mainnet,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  transports,
  ssr: true, // If your dApp uses server side rendering (SSR)
});
