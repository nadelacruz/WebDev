import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <ChakraProvider>
      <Box
      minH="100vh"
      backgroundColor="gray"
      >
        <MainComponent />
      </Box>
    </ChakraProvider>
  );
}

export default App;
