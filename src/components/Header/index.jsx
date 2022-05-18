import { Flex, Image, Text } from '@chakra-ui/react';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export const ModalSanduiche = () => {
  const history = useHistory();

  const vaiParaLogin = () => {
    history.push('/login');
  };

  const vaiParaCadastro = () => {
    history.push('/cadastropaciente');
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        src={require('../../assets/imagens/MenuHamburguer.svg').default}
        alt="Menu Hamburguer"
        h={['35px', '35px', '45px']}
        display={['block', 'block', 'block', 'none']}
        onClick={onOpen}
        cursor="pointer"
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          h={['310px', '448px']}
          w={['310px', '448px']}
          bg="secondary.0"
          borderRadius="1000px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            color="gray.300"
            borderBottom="2px"
            borderColor="gray.300"
            w="187px"
            textAlign="center"
            paddingBottom="8px"
            cursor="pointer"
          >
            Buscar especialistas
          </Text>
          <Text
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            color="gray.300"
            borderBottom="2px"
            borderColor="gray.300"
            w="187px"
            textAlign="center"
            paddingBottom="8px"
            paddingTop={['30px', '50px']}
            cursor="pointer"
          >
            Quem somos nós?
          </Text>
          <Flex
            justifyContent="space-between"
            direction="column"
            h="106px"
            w="max-content"
            marginTop={['15px', '70px']}
          >
            <Button
              border="2px"
              borderColor="white.200"
              height="48px"
              width="187px"
              fontSize="18px"
              fontWeigth="400"
              color="gray.300"
              bg="white.200"
              onClick={vaiParaLogin}
            >
              Login
            </Button>
            <Button
              border="2px"
              borderColor="secondary.100"
              height="48px"
              width="187px"
              fontSize="18px"
              fontWeigth="400"
              color="white.0"
              bg="secondary.100"
              onClick={vaiParaCadastro}
            >
              Cadastrar
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

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
        src={require('../../assets/imagens/LogoPsique.svg').default}
        alt="Logo escrito psiqué"
        w={['105px', '105px', '160px']}
        cursor="pointer"
        onClick={vaiParaHome}
      />
      <Flex w="max-content" height="max-content">
        <ModalSanduiche />
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
              borderColor="secondary.0"
              hoverBorder="secondary.100"
              height="42px"
              width="110px"
              fontWeigth="600"
              fontSize="16px"
              bg="secondary.0"
              color="white.0"
              onClick={vaiParaLogin}
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
              onClick={vaiParaRegistroPaciente}
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
          src={require('../../assets/imagens/LogoPsique.svg').default}
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
    <Flex w="100%" h="100px" align="center" justify="space-between">
      <Flex justify="flex-start">
        <Image
          src={require('../../assets/imagens/LogoPsique.svg').default}
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
            onClick={vaiParaAtendimentos}
          >
            Atendimentos
          </Button>
        </Flex>
        <Image
          src={require('../../assets/imagens/Avatar.svg').default}
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

  const goToHome = () => {
    history.push('/');
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w="100%" h="105px" align="center" justify="space-between">
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay  />
          <ModalContent  bg="white.300" width="230px" height="300px">
            <ModalCloseButton
              color="secondary.0"
              outline="none"
              borderStyle="none"
            />
            <ModalBody>
              <Flex
                height="90%"
                mt="20px"
                direction="column"
                justifyContent="space-around"
                alignItems="center"
              >
                <Flex
                  height="50%"
                  direction="column"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Button
                    height="48px"
                    width="170px"
                    bg="secondary.100"
                    color="white.100"
                    onClick={vaiParaMinhasConsultas}
                  >
                    Minhas consultas
                  </Button>
                  <Button
                    height="48px"
                    width="170px"
                    bg="secondary.100"
                    color="white.100"
                  >
                    Configurações
                  </Button>
                </Flex>
                <Button
                  height="48px"
                  width="170px"
                  bg="secondary.0"
                  color="white.100"
                  onClick={goToHome}
                >
                  Sair
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Flex justify="flex-start">
          <Image
            src={require('../../assets/imagens/LogoPsique.svg').default}
            alt="Logo escrito psiqué"
            w={['105px', '105px', '160px']}
            cursor="pointer"
            onClick={goToHome}
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
              onClick={vaiParaMinhasConsultas}
            >
              Minhas consultas
            </Button>
          </Flex>
          <Image
            src={require('../../assets/imagens/Avatar.svg').default}
            alt="Logo escrito psiqué"
            w="64px"
            h="64px"
            cursor="pointer"
            borderRadius="50px"
            onClick={() => onOpen()}
          />
        </Flex>
      </Flex>
    </>
  );
};

export const Header = ({ children }) => {
  return (
    <Flex
      bg="white.300"
      w="100%"
      min-width="100vw"
      max-width="100vw"
      h={['106px', '106px', '127px']}
      as="header"
      px={['40px', '40px', '54px']}
      align="center"
      justify="center"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"
    >
      {children}
    </Flex>
  );
};
