import { Input as ChakraInput, Flex, Text } from '@chakra-ui/react';

const Input = ({
  text,
  placeholder,
  type,
  border,
  backgroundColor,
  size,
  width,
  color,
}) => {
  return (
    <Flex flexDirection="column">
      <Text align="left" color={color}>
        {text}
      </Text>

      <ChakraInput
        placeholder={placeholder}
        type={type}
        color="gray.100"
        border={border}
        backgroundColor={backgroundColor}
        size={size}
        width={width}
      />
    </Flex>
  );
};
export default Input;
