import Navbar from '../components/Navbar.jsx';
import LoginCard from '../components/LoginCard.jsx';
import { Flex } from '@chakra-ui/react';

export default function LoginAdmin() {
  return (
    <Flex justifyContent={'center'}>
      <Flex flexDirection={'column'} w={'1440px'} justifyContent={'space-between'}>
        <Navbar />
        <LoginCard loginHeader={'Admin'} />
      </Flex>
    </Flex>
  );
}
