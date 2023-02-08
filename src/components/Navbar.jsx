import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo-openlibz.png';

export default function Navbar({ navItems }) {
  return (
    <Box as={'header'} id="header">
      <Flex as={'nav'} w="100%" py="5" align="center" justify="space-between">
        <HStack as={'ul'}>
          <Image src={Logo} h={'24px'} />
        </HStack>
        <HStack as={'ul'}>
          {navItems.map((item, index) => (
            <Button key={index} variant="nav">
              {item}
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
