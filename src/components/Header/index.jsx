import { Flex, Grid, GridItem } from '@chakra-ui/react';

const Header = ({ childrenLeft, childrenMiddle, childrenRight }) => {
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
      <Grid
        h="100%"
        w="100%"
        maxW="1160px"
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        justify="center"
      >
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          {childrenLeft}
        </GridItem>
        <GridItem display="flex" alignItems="center" justifyContent="center">
          {childrenMiddle}
        </GridItem>
        <GridItem display="flex" alignItems="center" justifyContent="center">
          {childrenRight}
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Header;
