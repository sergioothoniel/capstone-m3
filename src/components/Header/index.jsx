import { Flex } from '@chakra-ui/react';

const Header = ({ children }) => {
  return (
    <Flex
      bg="primary.100"
      w="100vw"
      h={['106px', '106px', '127px']}
      as="header"
      px={['40px', '40px', '54px']}
      align="center"
      justify="center"
    >
      {children}
    </Flex>
  );
};

export default Header;
