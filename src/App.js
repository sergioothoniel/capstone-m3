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

import { UserContext } from './Providers/user';
import { IsLoggedInContext } from './Providers/isLoggedIn';
import { useContext } from 'react';

function App() {
  const { isLoggedIn, setIsLoggedIn, token, setToken, dataUser, setDataUser } =
    useContext(IsLoggedInContext);
  const { user } = useContext(UserContext);

  setIsLoggedIn(true);
  setToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhhbm5pYmFsQGVtYWlsLmNvbSIsImlhdCI6MTY1MjM4MTE1NSwiZXhwIjoxNjUyMzg0NzU1LCJzdWIiOiIzIn0.135vYLVZVK8x6qeO84l5JZ92_8NnHsb8knCBL_oFLaI'
  );
  setDataUser({
    name: 'Matheus',
    id: '3',
    type: 'staff',
    email: 'matheus@mail.com',
    teste: 'testando usuario',
  });

  console.log(token);
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
