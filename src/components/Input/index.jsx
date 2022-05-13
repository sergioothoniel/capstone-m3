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
  height,
  color,
  isPassword = false,
  borderColor,
  ...rest
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
            height={height}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            size={size}
            width={width}
            variant="unstyled"
            d="flex"
            alignItems="center"
            _focus={{}}
            _active={{}}
            {...rest}
          />
          <InputRightElement width="9">
            <Button
              onClick={handleClick}
              backgroundColor="transparent"
              variant="unstyled"
              d="flex"
              _focus={{}}
              _active={{}}
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
          borderColor={borderColor}
          height={height}
          size={size}
          width={width}
          variant="unstyled"
          d="flex"
          alignItems="center"
          _focus={{}}
          _active={{}}
          {...rest}
        />
      )}
    </Flex>
  );
};
export default Input;
