'use client';

import { type JSX } from 'react';
import { RainbowKitProvider, lightTheme, Theme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig } from '@/lib/constants/wagmiConfig';

const baseTheme = lightTheme();
const theme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    accentColor: '#FF801F',
    accentColorForeground: '#fff',
    actionButtonSecondaryBackground: '#DADDD8',
    connectButtonBackground: '#fff',
    connectButtonBackgroundError: '#fff',
    connectButtonInnerBackground: '#fff',
    connectButtonText: '#000',
    connectButtonTextError: '#FF494A',
  },
};

const queryClient = new QueryClient();

type ProvidersProps = {
  children: JSX.Element | JSX.Element[] | string | null;
};

export function Providers({ children }: ProvidersProps) {
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
