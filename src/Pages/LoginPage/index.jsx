import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Login from '../../components/Login';
import Button from '../../components/Button';
import { BiArrowBack } from 'react-icons/bi';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo/logopsique.svg';
import Clouds from '../../assets/imagens/clouds.png';
import { ReactComponent as WomanDraw } from '../../assets/imagens/womanDraw.svg';
import { DrawSvg } from '../../components/DrawSvg/index';
import { HeaderLoginECadastro, Header } from '../../components/Header';

const LoginPage = () => {
  const history = useHistory();
  const handleHome = () => {
    history.push('/');
  };
  return (
    <Box bgColor="white.300" h="100vh">
      <Box padding="8px" display={['block', 'block', 'none', 'block']}>
        <Flex direction="row">
          <Button height="25px" onClick={handleHome}>
            <BiArrowBack size={30} />
          </Button>
        </Flex>
      </Box>

      <Box d={{ base: 'none', md: 'initial', lg: 'none' }}>
        <Header>
          <HeaderLoginECadastro zIndex="0" />
        </Header>
      </Box>

      <Box
        width="100vw"
        height="100%"
        position="absolute"
        bgImage={['', '', Clouds, '']}
        opacity="62%"
        zIndex="0"
        backgroundSize="cover"
      ></Box>

      <Flex
        direction={['row', 'column', 'column', 'row']}
        justifyContent="center"
        alignItems="center"
      >
        <Box
          d={['none', 'none', 'none', 'block']}
          justifyContent="center"
          h="650px"
          w="650px"
          alignItems="center"
        >
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            marginLeft={'45px'}
            marginTop={'25px'}
            bgColor="primary.100"
            h={['', '', '', '600px', '700px', '800px']}
            w={['', '', '', '600px', '700px', '800px']}
            transition="0.5s"
            borderRadius="50%"
            marginRight={['', '', '', '55px', '150px']}
          >
            <Text
              marginTop="55px"
              fontSize={['20px', '20px', '30px', '30px', '30px', '30px']}
              fontWeight="600"
            >
              Somos seres de reflexão
            </Text>
            <Box marginTop={['', '', '', '70px', '110px', '160px']}>
              <DrawSvg svg={WomanDraw} />
            </Box>
            <Text
              marginTop={['', '', '', '80px', '90px', '140px']}
              fontSize={['20px', '20px', '30px', '30px', '30px', '30px']}
              fontWeight="600"
            >
              e reflexo.
            </Text>
          </Box>
        </Box>

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
            <Image
              boxSize={['230px', '', '', '180']}
              objectFit="cover"
              src={Logo}
              alt="Psique"
            />
          </Box>

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
