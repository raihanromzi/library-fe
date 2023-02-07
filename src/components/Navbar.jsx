import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo-openlibz.png';

export default function Navbar() {
  return (
    <Box as={'header'} id="header">
      <Flex as={'nav'} w="100%" px="6" py="5" align="center" justify="space-between">
        <HStack as={'ul'}>
          <Image src={Logo} h={'24px'} />
        </HStack>
        <HStack as={'ul'}>
          <Button variant="nav">Home</Button>
          <Button variant="nav">Login</Button>
          <Button variant="nav">Cart(0)</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
