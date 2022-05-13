import { Flex, Image } from '@chakra-ui/react';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

export function HeaderContentHomePage() {
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
}

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

// export default Header;
