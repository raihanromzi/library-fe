import RegisterCard from '../components/RegisterCard.jsx';
import Navbar from '../components/Navbar.jsx';
import { Flex } from '@chakra-ui/react';

export default function Register() {
  return (
    <Flex justifyContent={'center'}>
      <Flex flexDirection={'column'} w={'1440px'} justifyContent={'space-between'}>
        <Navbar />
        <RegisterCard />
      </Flex>
    </Flex>
  );
}
