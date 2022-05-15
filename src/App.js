import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';

import { theme } from './styles/theme';
import Routers from './routers';

import Lottie from 'react-lottie';
import animationData from './lotties/emptyAnimation.json'

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <ChakraProvider theme={theme} resetCSS={true}>
        <Routers />
      </ChakraProvider>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
      />
    </>
  );
}

export default App;
