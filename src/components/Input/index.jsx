import { useState, forwardRef } from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button,
  Flex,
  Text,
  Icon,
  Box,
} from '@chakra-ui/react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

const InputBase = (
  {
    text,
    placeholder,
    type,
    border,
    backgroundColor,
    size,
    width,
    height,
    color,
    maxWidth,
    minWidth,
    isPassword = false,
    borderColor,
    ...rest
  },
  ref
) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex flexDirection="column">
      <Text align="left" marginBottom="5px" color={color} fontWeight="600">
        {text}
      </Text>
      {isPassword ? (
        <Box display="flex">
          <InputGroup>
            <ChakraInput
              placeholder={placeholder}
              type={show ? 'text' : 'password'}
              color="gray.100"
              border={border}
              height={height}
              borderColor={borderColor}
              backgroundColor={backgroundColor}
              // size="md"
              maxWidth={maxWidth}
              minWidth={minWidth}
              variant="unstyled"
              d="flex"
              padding="10px"
              _focus={{}}
              _active={{}}
              {...rest}
              ref={ref}
            />
            <InputRightElement>
              <Button
                onClick={handleClick}
                backgroundColor="transparent"
                marginTop="10px"
                variant="unstyled"
                d="flex"
                _focus={{}}
                _active={{}}
              >
                {show ? <Icon as={BsEye} /> : <Icon as={BsEyeSlash} />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      ) : (
        <ChakraInput
          placeholder={placeholder}
          type={type}
          color="gray.100"
          border={border}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          padding="10px"
          height={height}
          size="md"
          // width={width}
          maxWidth={maxWidth}
          minWidth={minWidth}
          variant="unstyled"
          d="flex"
          _focus={{}}
          _active={{}}
          {...rest}
          ref={ref}
        />
      )}
    </Flex>
  );
};

const Input = forwardRef(InputBase);

export default Input;
