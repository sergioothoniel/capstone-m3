import { Flex, Select } from "@chakra-ui/react";



const StyledSelect = ({width, height, children, placeholder}) => {
    
    return (
        <Flex>
            <Select variant='outline' fontSize="1.5 rem" color="gray.700" border="1px solid" borderColor="primary.0" focusBorderColor="primary.0" placeholder={placeholder} width={width} height={height}>
        	{children}
            </Select>
        </Flex>
        )
  };
  export default StyledSelect;
