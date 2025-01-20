'use client';

import { type JSX } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import merge from 'lodash.merge';
import { ThemeProvider } from 'next-themes';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, lightTheme, Theme } from '@rainbow-me/rainbowkit';
import { wagmiConfig } from '@/lib/constants/wagmiConfig';

const theme = merge(lightTheme(), {
  colors: {
    accentColor: '#FF801F',
    accentColorForeground: '#fff',
    actionButtonSecondaryBackground: '#DADDD8',
    connectButtonBackground: '#fff',
    connectButtonBackgroundError: '#fff',
    connectButtonInnerBackground: '#fff',
    connectButtonText: '#000',
    connectButtonTextError: '#FF494A',
  },
} as Theme);

const queryClient = new QueryClient();

type ProvidersProps = {
  children: JSX.Element | JSX.Element[] | string | null;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider theme={theme} showRecentTransactions={true}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
}
