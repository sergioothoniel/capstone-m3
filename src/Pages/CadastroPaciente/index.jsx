import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { BiArrowBack } from 'react-icons/bi';
import Background from '../../assets/imagens/background.png';
import { Link } from 'react-router-dom';
import { HeaderLoginECadastro } from '../../components/Header';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import api from '../../services/index'
import { useToast } from '@chakra-ui/react'
import Buddies from "../../assets/imagens/Buddies.svg"


const CadastroPaciente = () => {

  const history = useHistory();

  const toast = useToast()

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório!'),
    email: yup.string().required('Email obrigatorio!').email('Email inválido'),
    cpf: yup.string().required("CPF obrigatório!").min(8, "Mínimo 8 dígitos"),
    age: yup.string().required('Idade obrigatória!').matches(/1[8-9]|[2-9]\d+|\d{3,}/ , "A idade mínima é 18 anos!"),
    password: yup.string().required('Senha obrigatória!').min(6, "Mínimo 6 dígitos"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Senhas não combinam!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  
  const onSubmitFunction = ({name, email, password, age, cpf}) => {

    const user = {
      name,
      email,
      password,
      type: "patients"
    }
    
    const patient = {
      name,
      email,
      age,
      cpf
    }
    

    api.post("/users", user).then((response)=>{
      const userId = response.data.user.id
      const token = response.data.accessToken
      const config = {
        headers: { Authorization: `Bearer ${token}`}
      }

      api.post("/patients",{...patient, userId},config)
      .then((response)=>{

        toast({
          title: 'Conta criada com sucesso!',
          position:  'top-right',
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
        return history.push("/login")

      })
      .catch((err) => {
        console.log(err)
     
     
      })

    })
    .catch((err) => {
      toast({
        title: 'Email já cadastrado.',
        position:  'top-right',
        status: 'error',
        duration: 6000,
        isClosable: true,
      })
      console.log(err);
    
    });






  };

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
          <Flex
            display={['block', 'block', 'none', 'none']}
            paddingTop="26px"
            paddingLeft="30px"
          >
            <BiArrowBack />
          </Flex>

          <Flex
            width={[['0px', '0px', '100%', '100%']]}
            display={['none', 'none', 'block', 'block']}
            paddingLeft="20px"
            paddingTop={['0px', '0px', '0px', '10px']}
            height={['0px', '0px', '100px', '100px']}
            bgColor="white.300"
            zIndex="1"
          >
            <HeaderLoginECadastro />
          </Flex>

          <Box
            width="100vw"
            height="100vh"
            position="absolute"
            bgImage={['', '', Background, Background]}
            opacity="50%"
            backgroundSize="cover"
            zIndex="0"
          ></Box>
          <Flex
            justifyContent="center"
            height="80vh"
            minH="700px"
            paddingTop={['20px', '20px', '70px', '100px']}
            zIndex="1"
          >
            <Spacer display={['none', 'none', 'none', 'block']}>
              <Image display={['none', 'none', 'none', 'none', 'block']} src={Buddies} height="600px" paddingBottom="50px" paddingLeft="130px"></Image>
            </Spacer>

            <Flex
              as="form"
              display="flex"
              flexDir={['column', 'column', 'column', 'row']}
              flexWrap="wrap"
              maxWidth="700px"
              onSubmit={handleSubmit(onSubmitFunction)}
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
                  {...register('name')}
                ></Input>
              </Flex>{' '}
              <Flex 
               justifyContent="center"
                paddingBottom="15px"
              >
                <Input
                  text="Email"
                  placeholder="Email"
                  minWidth="200px"
                  width={['70vw', '70vw', '70vw', '250px']}
                  maxWidth="405px"
                  borderColor={'primary.0'}
                  fontWeight="500"
                  backgroundColor={'white.100'}
                  {...register('email')}
                  error={errors.email?.message}
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
                  {...register('cpf')}
                  error={errors.cpf?.message}
                  type="number"
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
                  type="number"
                  {...register('age')}
                  error={errors.age?.message}
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
                  isPassword={true}
                  {...register('password')}
                  error={errors.password?.message}
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
                  isPassword={true}
                  {...register('confirmpassword')}
                  error={errors.confirmpassword?.message}
                ></Input>
              </Flex>
              <Flex
                align="center"
                flexDir="column"
                paddingBottom="10px"
                paddingLeft={['0px', '0px', '0px', '20px']}
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
                  <Checkbox required></Checkbox>
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
                  maxWidth={['100%', '405px', '405px', '645px']}
                  type="submit"
                >
                  Cadastrar
                </Button>

                <Text textAlign="center" paddingTop="10px">
                  Quer trabalhar Conosco?{' '}
                  <Text display="inline" color="#DF6636">
                    <Link to={'/cadastropsicologo'}>Cadastre-se Aqui</Link>
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
