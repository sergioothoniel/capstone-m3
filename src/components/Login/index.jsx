import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { Container } from './styles';
import {
  Box,
  Flex,
  Image,
  Text,
  Spacer,
  FormControl,
  FormErrorMessage,
  Button as ButtonChakra,
} from '@chakra-ui/react';
import Button from '../Button';
import { BiArrowBack } from 'react-icons/bi';
import Logo from '../../assets/Logo/logopsique.svg';
import Input from '../Input';
import api from '../../services';
import { useIsLoggedIn } from '../../Providers/isLoggedIn/index';

const Login = () => {
  const toast = useToast();
  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, 'mínimo 6 digitos')
      .required('Campo obrigatório'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const { setIsLoggedIn, setToken } = useIsLoggedIn();
  const onSubmit = data => {

    setIsLoggedIn(false)
    localStorage.clear()  

    api
      .post('/login', data)
      .then(response => {
        const user = response.data.user;

        localStorage.setItem('@psique/token', JSON.stringify(response.data));
        setToken(response.data.accessToken);
        setIsLoggedIn(true);
        if (user.type === 'staff') {
          toast({
            title: 'Login realizado com sucesso!',
            // description: "Redirecionando você para a pa´gina de .",
            position: 'top-right',
            status: 'success',
            duration: 6000,
            isClosable: true,
          });
          toast({
            title: 'Login realizado com sucesso!',
            // description: "Redirecionando você para a pa´gina de .",
            position: 'top-right',
            status: 'success',
            duration: 6000,
            isClosable: true,
          });
          return history.push('/dashboardpsico');
        } else {
          return history.push('/dashboardpaciente');
        }
      })
      .catch(error => {
        toast({
          title: 'Login falhou, tente novamente!',
          // description: "Redirecionando você para a pa´gina de .",
          position: 'top-right',
          status: 'warning',
          duration: 6000,
          isClosable: true,
        });
      });
  };

  const history = useHistory();
  // const handleHome = () => {
  //   history.push('/');
  // };
  const handleCadastro = () => {
    history.push('/cadastropaciente');
  };
  

  return (
    <Flex
      direction="column"
      padding={['3px', '3px', '3px', '40px']}
      alignItems="center"
      justifyContent="center"
    >
      <Box alignItems="center" maxWidth={['', '100%', '800px', '580px']}>
        <Container>
          <FormControl
            isInvalid={!!errors?.email?.message}
            errortext={errors?.email?.message}
            p="4"
            isRequired
          >
            <Input
              text="Email"
              color="primary.0"
              placeholder="ex:name@gmail.com"
              {...register('email')}
              error={errors?.email}
              type="email"
              border="1px solid"
              borderColor="primary.0"
              backgroundColor="white.200"
              height="50px"
              // width={['400px', '500px', '505px', '315px']}
              minWidth="280px"
              maxWidth="605px"
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!errors?.password?.message}
            errortext={errors?.password?.message}
            px="4"
            pb="4"
            isRequired
          >
            <Input
              text="Senha"
              color="primary.0"
              isPassword
              placeholder="senha"
              {...register('password')}
              border="1px solid"
              borderColor="primary.0"
              backgroundColor="white.200"
              height="50px"
              width={['280px', '400px', '505px', '315px']}
              minWidth="280px"
              maxWidth="605px"
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <Spacer />
          <Flex marginTop="50px">
            <ButtonChakra
              onClick={handleSubmit(onSubmit)}
              children="Login"
              height="48px"
              width={['280px', '400px', '505px', '315px']}
              // minWidth="200px"
              // maxWidth="505px"
              borderColor="secondary.100"
              backgroundColor="secondary.100"
              color="white"
            />
          </Flex>

          <Box marginTop="15px">
            <Flex diyarection="row">
              <Text marginRight="5px">Novo na plataforma?</Text>
              <Button
                children="Cadastre-se"
                color="secondary.0"
                onClick={handleCadastro}
              />
            </Flex>
          </Box>
        </Container>
      </Box>
      {/* </Box> */}
    </Flex>
  );
};

export default Login;
