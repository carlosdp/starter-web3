/* eslint-disable import/export */
import { ChakraProvider } from '@chakra-ui/react';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach } from 'vitest';
import { WagmiConfig } from 'wagmi';

import { theme } from '../theme';
import { chains, wagmiClient } from '../walletConfig';

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => {
      return (
        <ChakraProvider theme={theme}>
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
              <MemoryRouter>{children}</MemoryRouter>
            </RainbowKitProvider>
          </WagmiConfig>
        </ChakraProvider>
      );
    },
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
