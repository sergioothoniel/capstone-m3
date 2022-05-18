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


const InputBase = ({
  text,
  placeholder,
  type,
  border,
  backgroundColor,
  size,
  width,
  minWidth,
  maxWidth,
  color,
  borderColor,
  fontWeight,
  error,
  isPassword = false,
  ...rest
},ref) => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (

    <Flex flexDirection="column">

      <Flex flexDir="row">
      <Text align="left" color={color} fontWeight={fontWeight}>
        {text}
      </Text>
      {!!error && <Text color="red.400">  &nbsp; - {error} </Text>}
      <Text>

      </Text>
      </Flex>
      {isPassword ? (
        <Box>
        <InputGroup size="md">
          <ChakraInput
            placeholder={placeholder}
            type={show ? 'text' : 'password'}
            color="gray.100"
            border={border}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            size={size}
            width={width}
            minWidth={minWidth}    
            maxWidth={maxWidth} 

            {...rest}
            ref={ref}
            />
          {/*<InputRightElement width="9">
            <Button
              onClick={handleClick}
              backgroundColor="transparent"

              variant="unstyled"
              d="flex"
              padding="10px"
              _focus={{}}
              _active={{}}
              {...rest}
              ref={ref}
      />*/}
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
          borderColor={borderColor}
          backgroundColor={backgroundColor}

          size={size}
          width={width}
          minWidth={minWidth}    
          maxWidth={maxWidth} 
          focusBorderColor='none'          
          padding="10px"             

          variant="unstyled"
          d="flex"          
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
