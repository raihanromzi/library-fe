import Navbar from '../components/Navbar.jsx';
import { Flex } from '@chakra-ui/react';
import Book from '../components/Book.jsx';

export default function BookDetail() {
  return (
    <Flex flexDirection={'column'} gap={200} justifyContent={'center'}>
      <Navbar />
      <Flex justifyContent={'center'} my={'auto'}>
        <Book />
      </Flex>
    </Flex>
  );
}
