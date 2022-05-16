import { Flex, Select as SelectChakra } from '@chakra-ui/react';

const Select = ({ width, height, children, placeholder }) => {
  return (
    <Flex>
      <SelectChakra
        variant="outline"
        fontSize="1.5 rem"
        color="gray.700"
        border="1px solid"
        borderColor="primary.0"
        focusBorderColor="none"
        placeholder={placeholder}
        width={width}
        height={height}
      >
        {children}
      </SelectChakra>
    </Flex>
  );
};
export default Select;
