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
import Logo from '../../assets/Logo/logopsique.svg';
import Input from '../Input';
import api from '../../services';

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
  const onSubmit = data => {
    api
      .post('/login', data)

      .then(response => {
        const user = response.data.user;
        console.log(user);
        if (user.cpf) {
          return history.push('/dashboardpaciente');
        }
        return history.push('/dashboardpsico');
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  const history = useHistory();
  const handleHome = () => {
    history.push('/');
  };
  const handleCadastro = () => {
    history.push('/cadastropaciente');
  };
  console.log(errors);

  return (
    <Flex direction="column" padding="3px" alignItems="center">
      <Box justifyContent="flex-start">
        <Flex direction="row">
          <Button height="25px" onClick={handleHome}>
            <BiArrowBack size={30} />
          </Button>
          <Box>
            <Image boxSize="230px" objectFit="cover" src={Logo} alt="Psique" />
          </Box>
        </Flex>
      </Box>

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
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <Spacer />
          <Button
            onClick={handleSubmit(onSubmit)}
            children="Login"
            height="48px"
            width="280px"
            borderColor="secondary.100"
            backgroundColor="secondary.100"
            color="white"
          />
          <Box marginTop="20px">
            <Flex diyarection="row">
              <Text>Novo na plataforma?</Text>
              <Button
                children="Cadastre-se"
                color="secondary.0"
                onClick={handleCadastro}
              />
            </Flex>
          </Box>
        </Container>
      </Box>
    </Flex>
  );
};

export default Login;
