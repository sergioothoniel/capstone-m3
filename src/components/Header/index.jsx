import { Flex, Image } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

export function HeaderContent() {
  return (
    <Flex w="100%" h="100%" align="center" justify="space-between">
      <Image
        src={require('../../Img/LogoPsique.svg').default}
        alt="Logo escrito psiqué"
        w={['105px', '105px', '160px']}
      />
      <Flex w="max-content" height="max-content">
        <GiHamburgerMenu fontSize="45px" cursor="pointer" />
      </Flex>
    </Flex>
  );
}

export const Header = ({ children }) => {
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

// export default Header;
