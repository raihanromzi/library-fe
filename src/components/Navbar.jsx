import { Button, chakra, Flex, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo-openlibz.png';

export default function Navbar() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <HStack as="nav" spacing="5">
          <Link key={'a'}>
            <Image src={Logo} h={'24px'} />
          </Link>
        </HStack>
        <HStack>
          <Button variant="nav">Home</Button>
          <Button variant="nav">Login</Button>
          <Button variant="nav">Cart(0)</Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
