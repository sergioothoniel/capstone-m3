import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect, useHistory } from 'react-router-dom';

import {
  Box,
  Flex,
  Image,
  Text,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import Button from '../../components/Button';
import { BiArrowBack } from 'react-icons/bi';
import Logo from '../../assets/Logo/logopsique.svg';
import Input from '../../components/Input';

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup
      .string()
      .min(6, 'mínimo 6 digitos')
      .required('Campo obrigatório'),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => console.log(data);

  const history = useHistory();
  const handleHome = () => {
    history.push('/');
  };
  const handleCadastro = () => {
    history.push('/cadastropaciente');
  };
  console.log(errors);

  return (
    <Flex direction="column" padding="13px" alignItems="center">
      <Box>
        <Flex direction="row">
          <Button height="25px" onClick={handleHome}>
            <BiArrowBack size={30} />
          </Button>
          <Box>
            <Image boxSize="210px" objectFit="cover" src={Logo} alt="Psique" />
          </Box>
        </Flex>
      </Box>

      <Box w="330">
        <form>
          <FormControl
            isInvalid={!!errors?.email?.message}
            errortext={errors?.email?.message}
            p="4"
            isRequired
          >
            <Input
              // text="Email"
              // name="email"
              // color="primary.0"
              placeholder="ex:name@gmail.com"
              {...register('email')}
              error={errors?.email}
              type="email"
              // border="1px solid"
              // borderColor="primary.0"
              // backgroundColor="white.200"
              // width="280px"
              // height="50px"
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
              // text="Senha"
              // name="password"
              // color="primary.0"
              // // isPassword
              placeholder="Senha"
              {...register('password')}
              // ref={register}
              // border="1px solid"
              // borderColor="primary.0"
              // backgroundColor="white.200"
              // width="280px"
              // height="50px"
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
        </form>

        <Box>
          <Flex direction="row">
            <Text>Novo na plataforma?</Text>
            <Button
              children="Cadastre-se"
              color="secondary.0"
              onClick={handleCadastro}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
