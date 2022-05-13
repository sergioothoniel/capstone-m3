import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect, useHistory } from 'react-router-dom';

import { Box, Flex, Image, Text, Spacer, FormControl } from '@chakra-ui/react';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const handleHome = () => {
    history.push('/');
  };
  const handleCadastro = () => {
    history.push('/cadastropaciente');
  };

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
        <FormControl onSubmit={handleSubmit}>
          <Input
            text="Email"
            color="primary.0"
            placeholder="ex:name@gmail.com"
            type="email"
            border="1px solid"
            borderColor="primary.0"
            backgroundColor="white.200"
            width="280px"
            height="50px"
          />
          <Input
            text="Senha"
            color="primary.0"
            isPassword
            placeholder="Senha"
            border="1px solid"
            borderColor="primary.0"
            backgroundColor="white.200"
            width="280px"
            height="50px"
          />
          <Spacer />
          <Button
            children="Login"
            height="48px"
            width="280px"
            borderColor="secondary.100"
            backgroundColor="secondary.100"
            color="white"
          />
        </FormControl>

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
