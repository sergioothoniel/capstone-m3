import { Flex } from '@chakra-ui/react';
import Button from '../../components/Button';
import { BiArrowBack } from 'react-icons/bi';

const Login = () => {
  return (
    <Flex>
      <Button>
        <BiArrowBack />
      </Button>
    </Flex>
  );
};

export default Login;
