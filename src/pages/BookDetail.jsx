import Navbar from '../components/Navbar.jsx';
import { Flex } from '@chakra-ui/react';
import Book from '../components/Book.jsx';

export default function BookDetail() {
  return (
    <Flex justifyContent={'center'}>
      <Flex flexDirection={'column'} w={'1440px'} justifyContent={'space-between'}>
        <Flex flexDirection={'column'} gap={200} justifyContent={'center'}>
          <Navbar />
          <Flex justifyContent={'center'} my={'auto'}>
            <Book />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
