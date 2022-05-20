import { forwardRef } from 'react';
import { Flex, Select as SelectChakra } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
const SelectBase = ({
  width,
  height,
  children,
  placeholder,
  color,
  fontWeight,
  text,
  minWidth,
  maxWidth,
  bgColor,
  ...rest
}, ref) => {
  return (
    <Flex flexDir="column">
      <Text align="left" color={color} fontWeight={fontWeight}>
        {text}
      </Text>
      <SelectChakra
        bgColor={bgColor}
        variant="outline"
        fontSize="1.5 rem"
        color="gray.100"
        border="1px solid"
        borderColor="primary.0"
        focusBorderColor="none"
        placeholder={placeholder}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        height={height}
        _focus="none"
        {...rest}
        ref={ref}
      >
        {children}
      </SelectChakra>
    </Flex>
  );
};
const Select = forwardRef(SelectBase);
export default Select;
