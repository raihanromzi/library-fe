import Navbar from '../components/Navbar.jsx';
import { Flex } from '@chakra-ui/react';
import Book from '../components/Book.jsx';
import Footer from '../components/Footer.jsx';

export default function BookDetail() {
  return (
    <Flex justifyContent={'center'} flexDirection={'column'} alignContent={'center'}>
      <Flex justifyContent={'center'}>
        <Flex flexDirection={'column'} w={'1440px'} justifyContent={'space-between'}>
          <Flex flexDirection={'column'} gap={200} justifyContent={'center'}>
            <Navbar />
            <Flex justifyContent={'center'} mb={'300'}>
              <Book />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
