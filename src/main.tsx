import { ChakraProvider, ColorModeScript, GlobalStyle, useColorMode } from '@chakra-ui/react';
import { lightTheme, midnightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WagmiConfig } from 'wagmi';

import App from './App';
import './index.css';
import { theme } from './theme';
import { chains, wagmiClient } from './walletConfig';

const ColoredRainbowKitProvider = ({ children }: React.PropsWithChildren<unknown>) => {
  const { colorMode } = useColorMode();

  return (
    <RainbowKitProvider chains={chains} theme={colorMode === 'light' ? lightTheme() : midnightTheme()}>
      {children}
    </RainbowKitProvider>
  );
};

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <ColoredRainbowKitProvider>
            <GlobalStyle />
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ColoredRainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </React.StrictMode>
  </>
);
