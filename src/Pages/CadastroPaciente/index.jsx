import { Checkbox, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';
import Background from '../../assets/background.png';
import { Link } from 'react-router-dom';
function CadastroPaciente() {
  return (
    <>
      <Flex
        justifyContent="center"
        minH="100vh"
        minW="100vw"
        bg="white.300"
        color="gray.700"
      >
        <Flex width="100%" flexDir="column">
          {/* header v */}
          <Flex
            width="100%"
            paddingLeft="20px"
            paddingTop={['0px', '0px', '0px', '40px']}
            height={['0px', '0px', '0px', '100px']}
            bgColor="white.300"
      
          >
            <FaArrowLeft />
          </Flex>

          <Flex
            justifyContent="center"
            height="80vh"
            minH="700px"
            paddingTop={['20px', '20px', '20px', '150px']}
            bgImage={['', '', '', Background]}
            backgroundPosition="0px -1050px"
          >
            <Spacer display={['none', 'none', 'none', 'block']}></Spacer>
            <Flex
              flexDir={['column', 'column', 'column', 'row']}
              flexWrap="wrap"
              border="1px solid black"
              maxWidth="700px"
            >
              <Flex
                justifyContent="center"
                paddingBottom="15px"
                paddingLeft={['0px', '0px', '0px', '40px']}
                paddingRight={['0px', '0px', '0px', '90px']}
              >
                <Input
                  text="Nome Completo"
                  placeholder="Nome Completo"
                  minWidth="200px"
                  width={['70vw', '70vw', '70vw', '250px']}
                  maxWidth="405px"
                  borderColor={'primary.0'}
                  fontWeight="500"
                  backgroundColor={'white.100'}
                ></Input>
              </Flex>{' '}
              <Flex justifyContent="center" paddingBottom="15px">
                <Input
                  text="Email"
                  placeholder="Email"
                  minWidth="200px"
                  width={['70vw', '70vw', '70vw', '250px']}
                  maxWidth="405px"
                  borderColor={'primary.0'}
                  fontWeight="500"
                  backgroundColor={'white.100'}
                ></Input>
              </Flex>{' '}
              <Flex
                justifyContent="center"
                paddingBottom="15px"
                paddingLeft={['0px', '0px', '0px', '40px']}
                paddingRight={['0px', '0px', '0px', '90px']}
              >
                <Input
                  text="CPF"
                  placeholder="CPF"
                  minWidth="200px"
                  width={['70vw', '70vw', '70vw', '250px']}
                  maxWidth="405px"
                  borderColor={'primary.0'}
                  fontWeight="500"
                  backgroundColor={'white.100'}
                ></Input>
              </Flex>{' '}
              <Flex justifyContent="center" paddingBottom="15px">
                <Input
                  placeholder="Idade"
                  text="Idade"
                  minWidth="200px"
                  width={['70vw', '70vw', '70vw', '250px']}
                  maxWidth="405px"
                  borderColor={'primary.0'}
                  fontWeight="500"
                  backgroundColor={'white.100'}
                ></Input>
              </Flex>{' '}
              <Flex
                justifyContent="center"
                paddingBottom="15px"
                paddingLeft={['0px', '0px', '0px', '40px']}
                paddingRight={['0px', '0px', '0px', '90px']}
              >
                <Input
                  text="Senha"
                  placeholder="Senha"
                  minWidth="200px"
                  width={['70vw', '70vw', '70vw', '250px']}
                  maxWidth="405px"
                  borderColor={'primary.0'}
                  fontWeight="500"
                  backgroundColor={'white.100'}
                ></Input>
              </Flex>{' '}
              <Flex justifyContent="center" paddingBottom="15px">
                <Input
                  text="Confirmar Senha"
                  placeholder="Confirmar Senha"
                  minWidth="200px"
                  width={['70vw', '70vw', '70vw', '250px']}
                  maxWidth="405px"
                  borderColor={'primary.0'}
                  fontWeight="500"
                  backgroundColor={'white.100'}
                ></Input>
              </Flex>
              <Flex
                align="center"
                flexDir="column"
                paddingBottom="10px"
                paddingLeft="20px"
              >
                <Flex
                  flexDir="row"
                  justify="center"
                  mx="0 auto"
                  minWidth="120px"
                  width="300px"
                  paddingRight="20px"
                  paddingTop="5px"
                  paddingBottom="20px"
                >
                  <Checkbox></Checkbox>

                  <Text
                    paddingLeft="20px"
                    width="200px"
                    height="30px"
                    lineHeight="12px"
                    fontSize="0.9rem"
                    letterSpacing="0.3px"
                    textAlign="normal"
                  >
                    Li e concordo com os
                    <Text color="#DF6636" fontSize="1rem" Text display="inline">
                      &nbsp;termos&nbsp;
                    </Text>
                    de privacidade
                  </Text>
                </Flex>
                <Button
                  bg="secondary.100"
                  height="54px"
                  color="white"
                  minWidth="200px"
                  width="70vw"
                  maxWidth="655px"
                >
                  Cadastrar
                </Button>
                <Text textAlign="center">
                  Quer trabalhar Conosco?{' '}
                  <Text display="inline" color="#DF6636">
                    <Link to={'/CadastroPsico'}>Cadastre-se Aqui</Link>
                  </Text>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default CadastroPaciente;
