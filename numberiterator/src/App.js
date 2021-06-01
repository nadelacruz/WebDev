import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NumberIterator from './components/NumberIterator';

function App() {
  return (
    <ChakraProvider>
      <NumberIterator/>
    </ChakraProvider>
  );
}

export default App;
