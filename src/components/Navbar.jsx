import { Box, Button, Flex, HStack, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Logo from '../assets/logo-openlibz.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Box as={'header'} id="header">
      <Flex as={'nav'} w="100%" py="5" align="center" justify="space-between">
        <HStack as={'ul'}>
          <LinkBox as={'section'}>
            <LinkOverlay href={'../home'}>
              <Image src={Logo} h={'24px'} />
            </LinkOverlay>
          </LinkBox>
        </HStack>
        <HStack as={'ul'}>
          <Button
            variant="nav"
            onClick={() => {
              navigate('../home');
            }}>
            Home
          </Button>
          <Button
            variant="nav"
            onClick={() => {
              navigate('../login');
            }}>
            Login
          </Button>
          <Button variant="nav">Cart(0)</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
