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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { theme } from './styles/theme';
import Input from './components/Input';

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Input />
          <Input isPassword />
          <VStack spacing={8}></VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
