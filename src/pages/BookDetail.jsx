import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Flex } from '@chakra-ui/react';
import Book from '../components/Book.jsx';

export default function BookDetail() {
  return (
    <Flex flexDirection={'column'}>
      <Navbar />
      <Book />
      <Footer />
    </Flex>
  );
}
