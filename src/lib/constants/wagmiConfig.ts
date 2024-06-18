// Raimbow Kit
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  bitgetWallet,
  bifrostWallet,
  bitskiWallet,
  braveWallet,
  coinbaseWallet,
  coin98Wallet,
  coreWallet,
  dawnWallet,
  enkryptWallet,
  foxWallet,
  frameWallet,
  frontierWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  mewWallet,
  okxWallet,
  omniWallet,
  oneKeyWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  safeheronWallet,
  tahoWallet,
  talismanWallet,
  tokenaryWallet,
  tokenPocketWallet,
  trustWallet,
  uniswapWallet,
  walletConnectWallet,
  xdefiWallet,
  zerionWallet,
} from '@rainbow-me/rainbowkit/wallets';
// Wagmi
import { http } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID || '';

//const { wallets } = getDefaultWallets();
const wallets = [
  //...getDefaultWallets().wallets,
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet,
      rainbowWallet,
      rabbyWallet,
      ledgerWallet,
      walletConnectWallet,
      phantomWallet,
      coinbaseWallet,
      coin98Wallet,
      trustWallet,
      uniswapWallet,
    ],
  },
  {
    groupName: 'Other Wallets',
    wallets: [
      argentWallet,
      bitgetWallet,
      bifrostWallet,
      bitskiWallet,
      braveWallet,
      coreWallet,
      dawnWallet,
      enkryptWallet,
      foxWallet,
      frameWallet,
      frontierWallet,
      imTokenWallet,
      injectedWallet,
      mewWallet,
      okxWallet,
      omniWallet,
      oneKeyWallet,
      safeWallet,
      safeheronWallet,
      tahoWallet,
      talismanWallet,
      tokenaryWallet,
      tokenPocketWallet,
      xdefiWallet,
      zerionWallet,
    ],
  },
];

export const wagmiConfig = getDefaultConfig({
  appName: 'Next dApp Template',
  projectId: projectId,
  wallets: wallets,
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [zora.id]: http(),
  },
  ssr: true, // If your dApp uses server side rendering (SSR)
});
