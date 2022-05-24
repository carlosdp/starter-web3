import { Box, Text } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <Box alignItems="center" flexDirection="column" display="flex" width="100%">
      <Box justifyContent="center" display="flex" width="100%" paddingTop="36px" paddingBottom="36px">
        <Box alignItems="center" flexDirection="row" display="flex" width="100%" maxWidth="936px">
          <Text>Web3 Starter</Text>
          <Box marginLeft="auto">
            <ConnectButton showBalance={false} />
          </Box>
        </Box>
      </Box>
      <Box width="100%" maxWidth="936px"></Box>
    </Box>
  );
}

export default App;
