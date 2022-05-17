import { Box, Button, Center } from '@chakra-ui/react';
import { useWallet } from '@enyo-web3/ethers';

function App() {
  const { connectProvider } = useWallet();

  return (
    <Box>
      <Center>
        <Button onClick={() => connectProvider('metamask')}>Connect Wallet</Button>
      </Center>
    </Box>
  );
}

export default App;
