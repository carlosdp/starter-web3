import { ChakraProvider, extendTheme, withDefaultColorScheme, ColorModeScript, GlobalStyle } from '@chakra-ui/react';
import { apiProvider, configureChains, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { chain, createClient, WagmiConfig } from 'wagmi';

import App from './App';
import './index.css';

const theme = extendTheme(
  {
    config: {
      initialColorMode: 'system',
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
);

const { chains, provider } = configureChains([chain.mainnet], [apiProvider.fallback()]);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <GlobalStyle />
            <App />
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </React.StrictMode>
  </>
);
