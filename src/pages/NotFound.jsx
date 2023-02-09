import { Button, Center, Flex, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar.jsx';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Center minH={'80vh'}>
        <Flex flexDir="column" gap={'4'}>
          <Text fontSize={'xl'}>
            <b>404</b> Page Not Found
          </Text>

          <Button
            onClick={() => navigate('../Home')}
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
