import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import Logo from '../assets/logo-openlibz.png';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';

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
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Account
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Button
                  variant="nav"
                  onClick={() => {
                    navigate('../login');
                  }}>
                  Login
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  variant="nav"
                  onClick={() => {
                    navigate('../Home');
                  }}>
                  Loan List
                </Button>
              </MenuItem>
              <MenuItem>
                <Button variant="nav">Cart(0)</Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}
