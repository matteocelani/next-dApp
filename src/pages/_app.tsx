import type { AppProps } from "next/app";
//React Redux
import { Provider } from "react-redux";
import { store } from "@/redux/store";
//Importing Next Themes
import { ThemeProvider } from "next-themes";
//Importing Layout
import Layout from "@/layout";
//Importing Styles
import "@/assets/styles/globals.scss";
//Raimbow Kit
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  connectorsForWallets,
  RainbowKitProvider,
  lightTheme,
  Theme,
} from "@rainbow-me/rainbowkit";
import {
  ledgerWallet,
  trustWallet,
  braveWallet,
  okxWallet,
  argentWallet,
  bitskiWallet,
  dawnWallet,
  imTokenWallet,
  injectedWallet,
  coinbaseWallet,
  mewWallet,
  omniWallet,
  safeWallet,
  tahoWallet,
  zerionWallet,
} from "@rainbow-me/rainbowkit/wallets";
//Wagmi
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  goerli,
  bsc,
  polygon,
  arbitrum,
  avalanche,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
//Merge
import merge from "lodash.merge";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    bsc,
    polygon,
    arbitrum,
    avalanche,
    ...(process.env.ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [publicProvider()]
);

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID || "";
const { wallets } = getDefaultWallets({
  appName: "Next dApp Template",
  projectId,
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      ledgerWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      braveWallet({ chains }),
      okxWallet({ projectId, chains }),
      argentWallet({ projectId, chains }),
      bitskiWallet({ chains }),
      dawnWallet({ chains }),
      imTokenWallet({ projectId, chains }),
      injectedWallet({ chains }),
      coinbaseWallet({ chains, appName: "Next dApp" }), // "Next dApp" is the name of the app
      mewWallet({ chains }),
      omniWallet({ projectId, chains }),
      safeWallet({ chains }),
      tahoWallet({ chains }),
      zerionWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const theme = merge(lightTheme(), {
  colors: {
    accentColor: "#FF801F",
    accentColorForeground: "#fff",
    actionButtonSecondaryBackground: "#DADDD8",
    connectButtonBackground: "#fff",
    connectButtonBackgroundError: "#fff",
    connectButtonInnerBackground: "#fff",
    connectButtonText: "#000",
    connectButtonTextError: "#FF494A",
  },
} as Theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          //modalSize="compact"
          coolMode={true}
          chains={chains}
          theme={theme}
        >
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
