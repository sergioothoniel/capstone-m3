import { Flex, Image } from '@chakra-ui/react';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

//criar os outros componentes children dos diversos tipos de header que existem no figma

export const HeaderContentHomePage = () => {
  const history = useHistory();

  const vaiParaRegistroPaciente = () => {
    history.push('/cadastropaciente');
  };

  const vaiParaLogin = () => {
    history.push('/login');
  };

  const vaiParaHome = () => {
    history.push('/');
  };

  return (
    <Flex w="100%" h="100%" align="center" justify="space-between">
      <Image
        src={require('../../Img/LogoPsique.svg').default}
        alt="Logo escrito psiqué"
        w={['105px', '105px', '160px']}
        cursor="pointer"
        onClick={vaiParaHome}
      />
      <Flex w="max-content" height="max-content">
        <Image
          src={require('../../Img/MenuHamburguer.svg').default}
          alt="Menu Hamburguer"
          h={['35px', '35px', '45px']}
          display={['block', 'block', 'block', 'none']}
        />
        <Flex w="500px" display={['none', 'none', 'none', 'flex']}>
          <Flex w="max-content" pr="40px">
            <Button
              border="1px"
              borderColor="secondary.100"
              height="42px"
              width="165px"
              fontWeigth="600"
              fontSize="16px"
            >
              Quem somos nós?
            </Button>
          </Flex>
          <Flex w="48%" justify="space-between">
            <Button
              border="2px"
              borderColor="white.200"
              hoverBorder="secondary.0"
              height="42px"
              width="110px"
              fontWeigth="600"
              fontSize="16px"
              bg="white.200"
              color="gray.200"
              onClickFunction={vaiParaLogin}
            >
              Login
            </Button>
            <Button
              border="2px"
              borderColor="secondary.100"
              hoverBorder="secondary.0"
              height="42px"
              width="110px"
              fontWeigth="600"
              fontSize="16px"
              bg="secondary.100"
              color="white.200"
              onClickFunction={vaiParaRegistroPaciente}
            >
              Cadastrar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const HeaderLoginECadastro = () => {
  const history = useHistory();

  const vaiParaHome = () => {
    history.push('/');
  };
  return (
    <Flex w="100%" h="100%" align="center">
      <Flex justify="flex-start" w="33%">
        <BiArrowBack fontSize="50px" cursor="pointer" />
      </Flex>
      <Flex justify="center" w="33%" minWidth="max-content">
        <Image
          src={require('../../Img/LogoPsique.svg').default}
          alt="Logo escrito psiqué"
          w={['105px', '105px', '160px']}
          cursor="pointer"
          onClick={vaiParaHome}
        />
      </Flex>
    </Flex>
  );
};

export const HeaderDashboardPsicologo = () => {
  const history = useHistory();

  const vaiParaAtendimentos = () => {
    history.push('/agendapsicologo');
  };

  return (
    <Flex w="100%" h="100%" align="center" justify="space-between">
      <Flex justify="flex-start">
        <Image
          src={require('../../Img/LogoPsique.svg').default}
          alt="Logo escrito psiqué"
          w={['105px', '105px', '160px']}
          cursor="pointer"
        />
      </Flex>
      <Flex
        justify="space-between"
        w={['max-content', 'max-content', 'max-content', '280px']}
        minWidth="max-content"
        h="100%"
        align="center"
      >
        <Flex
          w="max-content"
          height="max-content"
          display={['none', 'none', 'none', 'flex']}
        >
          <Button
            border="2px"
            borderColor="secondary.100"
            hoverBorder="secondary.0"
            height="48px"
            width="160px"
            fontWeigth="400"
            fontSize="18px"
            bg="secondary.100"
            color="white.200"
            onClickFunction={vaiParaAtendimentos}
          >
            Atendimentos
          </Button>
        </Flex>
        <Image
          src={require('../../Img/Avatar.svg').default}
          alt="Logo escrito psiqué"
          w="64px"
          h="64px"
          cursor="pointer"
          borderRadius="50px"
        />
      </Flex>
    </Flex>
  );
};

export const HeaderDashboardPaciente = () => {
  const history = useHistory();

  const vaiParaMinhasConsultas = () => {
    history.push('/agendapaciente');
  };

  return (
    <Flex w="100%" h="100%" align="center" justify="space-between">
      <Flex justify="flex-start">
        <Image
          src={require('../../Img/LogoPsique.svg').default}
          alt="Logo escrito psiqué"
          w={['105px', '105px', '160px']}
          cursor="pointer"
        />
      </Flex>
      <Flex
        justify="space-between"
        w={['max-content', 'max-content', 'max-content', '280px']}
        minWidth="max-content"
        h="100%"
        align="center"
      >
        <Flex
          w="max-content"
          height="max-content"
          display={['none', 'none', 'none', 'flex']}
        >
          <Button
            border="2px"
            borderColor="secondary.100"
            hoverBorder="secondary.0"
            height="48px"
            width="190px"
            fontWeigth="400"
            fontSize="18px"
            bg="secondary.100"
            color="white.200"
            onClickFunction={vaiParaMinhasConsultas}
          >
            Minhas consultas
          </Button>
        </Flex>
        <Image
          src={require('../../Img/Avatar.svg').default}
          alt="Logo escrito psiqué"
          w="64px"
          h="64px"
          cursor="pointer"
          borderRadius="50px"
        />
      </Flex>
    </Flex>
  );
};

export const Header = ({ children }) => {
  return (
    <Flex
      bg="primary.100"
      w="100vw"
      h={['106px', '106px', '127px']}
      as="header"
      px={['40px', '40px', '54px']}
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
};
