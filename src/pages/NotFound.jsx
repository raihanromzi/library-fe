import { Button, Center, Flex, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar.jsx';

export default function NotFound() {
  return (
    <>
      <Navbar navItems={['Home', 'Login', 'Cart()']} />
      <Center minH={'80vh'}>
        <Flex flexDir="column" gap={'4'}>
          <Text fontSize={'xl'}>
            <b>404</b> Page Not Found
          </Text>
          <Button
            p={6}
            bg={'black'}
            color={'white'}
            rounded={'none'}
            _hover={{
              bg: 'blackAlpha.900'
            }}>
            Back to Home
          </Button>
        </Flex>
      </Center>
    </>
  );
}
