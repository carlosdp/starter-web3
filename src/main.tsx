import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ChakraProvider, extendTheme, withDefaultColorScheme, ColorModeScript, GlobalStyle } from '@chakra-ui/react';
import { EnyoSupergraph } from '@enyo-web3/core';
import { EthersProvider, WalletSubgraph } from '@enyo-web3/ethers';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

const cache = new InMemoryCache();
const supergraph = new EnyoSupergraph({
  subgraphs: [new WalletSubgraph()],
  providers: {
    ethers: new EthersProvider(),
  },
  cache,
});
const client = new ApolloClient({ cache, link: supergraph.link(), typeDefs: supergraph.typeDefs() });

const theme = extendTheme(
  {
    config: {
      initialColorMode: 'system',
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
);

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <App />
        </ApolloProvider>
      </ChakraProvider>
    </React.StrictMode>
  </>
);
