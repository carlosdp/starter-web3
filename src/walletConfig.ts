import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

export const { chains, provider } = configureChains([chain.mainnet], [publicProvider()]);

export const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
