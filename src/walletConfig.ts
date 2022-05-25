import { apiProvider, configureChains, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, createClient } from 'wagmi';

export const { chains, provider } = configureChains([chain.mainnet], [apiProvider.fallback()]);

export const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
