import { useState } from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Text,
  Icon,
} from '@chakra-ui/react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const Input = ({
  text,
  placeholder,
  type,
  border,
  backgroundColor,
  size,
  width,
  color,
  isPassword = false,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex flexDirection="column">
      <Text align="left" color={color}>
        {text}
      </Text>
      {isPassword ? (
        <InputGroup size="md">
          <ChakraInput
            placeholder={placeholder}
            type={show ? 'text' : 'password'}
            color="gray.100"
            border={border}
            backgroundColor={backgroundColor}
            size={size}
            width={width}
          />
          <InputRightElement width="9">
            <Button
              onClick={handleClick}
              backgroundColor="transparent"
              variant="unstyled"
              d="flex"
              _focus={{}}
            >
              {show ? <Icon as={BsEye} /> : <Icon as={BsEyeSlash} />}
            </Button>
          </InputRightElement>
        </InputGroup>
      ) : (
        <ChakraInput
          placeholder={placeholder}
          type={type}
          color="gray.100"
          border={border}
          backgroundColor={backgroundColor}
          size={size}
          width={width}
        />
      )}
    </Flex>
  );
};
export default Input;
