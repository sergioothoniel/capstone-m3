import { Box, Flex, Text } from '@chakra-ui/react';
import Login from '../../components/Login';
import { ReactComponent as WomanDraw } from '../../assets/Animacao/woman-draw.svg';
import { DrawSvg } from './co';

const LoginPage = () => {
  return (
    <>
      <Box
        d={{ base: 'none', md: 'initial', lg: 'none' }}
        bgColor="red"
        h="60px"
      >
        <Text>Header Falso</Text>
      </Box>
      <Flex bg={{ md: 'lightblue', lg: 'none' }}>
        <Box bg={{ base: 'none', lg: 'red' }} flex="1 1 50%"></Box>
        <Login />
      </Flex>
    </>
  );
};
export default LoginPage;
