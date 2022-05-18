import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Login from '../../components/Login';
import Button from '../../components/Button';
import { BiArrowBack } from 'react-icons/bi';
import { Redirect, useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo/logopsique.svg';
import Clouds from '../../assets/imagens/clouds.png';
// import { ReactComponent as WomanDraw } from '../../assets/Animacao/womanDraw.svg';
// import { DrawSvg } from '../../components/DrawSvg';
import { HeaderLoginECadastro } from '../../components/Header';

const LoginPage = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push('/');
  };
  return (
    <Box bgColor="white.300" h="100vh">
      {/* botão flecha */}

      <Box padding="8px" display={['block', 'block', 'none', 'block']}>
        <Flex direction="row">
          <Button height="25px" onClick={handleHome}>
            <BiArrowBack size={30} />
          </Button>
        </Flex>
      </Box>
      {/* header */}
      <Box d={{ base: 'none', md: 'initial', lg: 'none' }}>
        <HeaderLoginECadastro zIndex="0" />
      </Box>
      {/* nuvens */}
      <Box
        width="100vw"
        height="100%"
        position="absolute"
        bgImage={['', '', Clouds, '']}
        // backgroundPosition="150px"
        opacity="62%"
        zIndex="0"
        backgroundSize="cover"
      ></Box>
      {/* parte da animação  */}
      <Flex
        direction={['row', 'column', 'column', 'row']}
        justifyContent="center"
      >
        <Box
          d={['none', 'none', 'none', 'block']}
          h="700px"
          w="675px"
          flex="1 1 50%"
          flexDirection="center"
        >
          <Box
            marginLeft={'30px'}
            marginTop={'25px'}
            bgColor="primary.100"
            h="620px"
            w="620px"
            borderRadius="50%"
          >
            <Text> Frase legal!</Text>
            {/* <DrawSvg svg={WomanDraw} /> */}
          </Box>
        </Box>

        {/* imagem do form  */}
        <Flex
          flexDirection="column"
          alignItems="center"
          justify-content="center"
        >
          <Box
            d={['block', 'block', 'none', 'block']}
            alignItems="center"
            justifyContent="center"
          >
            <Image boxSize="230px" objectFit="cover" src={Logo} alt="Psique" />
          </Box>
          {/* form  */}

          <Login zIndex="0" />
          <Box d={['none', 'none', 'block', 'none']}>
            <Text marginTop="150px" marginLeft="500px">
              @2022 psique
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default LoginPage;