import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect, useHistory } from 'react-router-dom';
import { Container } from './styles';
import {
  Box,
  Flex,
  Image,
  Text,
  Spacer,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import Button from '../Button';
import { BiArrowBack } from 'react-icons/bi';
import Logo from '../../assets/logo/logopsique.svg';
import Input from '../Input';
import api from '../../services';
import { useIsLoggedIn } from '../../Providers/isLoggedIn/index';
import { useDataUser } from '../../Providers/dataUser/index';

const Login = () => {
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
  const { dataUser } = useDataUser();
  const { isLoggedIn, setIsLoggedIn, token, setToken } = useIsLoggedIn();

  const onSubmit = data => {
    console.log(data);
    api
      .post('/login', data)
      .then(response => {
        const user = response.data.user;

        localStorage.setItem('@psique/token', JSON.stringify(response.data));
        setToken(response.data.accessToken);
        setIsLoggedIn(true);
        if (user.type === 'staff') {
          return history.push('/dashboardpsico');
        } else {
          return history.push('/dashboardpaciente');
        }
      })
      .catch(error => {
        console.log(error.response.data);
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
    <Flex direction="column" padding="3px" alignItems="center">
      {/* <Box marginTop={['', '', '60px', '']} w={['', '', '', '380px']}> */}
      <Box alignItems="center">
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
              width="85vw"
              minWidth="250px"
              maxWidth="380px"
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
              width="85vw"
              minWidth="250px"
              maxWidth="380px"
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <Spacer />
          <Box marginTop="50px">
            <Button
              onClick={handleSubmit(onSubmit)}
              children="Login"
              height="48px"
              width="85vw"
              minWidth="280px"
              maxWidth="380px"
              borderColor="secondary.100"
              backgroundColor="secondary.100"
              color="white"
            />
          </Box>

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
