import React from 'react';
import {
  ChakraProvider, 
} from '@chakra-ui/react';
import { theme } from './styles/theme';
import Routers from './routers';


function App() {

  return (
    <ChakraProvider theme={theme} resetCSS={true}>      
      <Routers/>
    </ChakraProvider>
  );
}

export default App;
