import Navbar from '../components/Navbar.jsx';
import Filter from '../components/Filter.jsx';
import { Flex } from '@chakra-ui/react';
import BookCard from '../components/BookCard.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <Flex justifyContent={'center'}>
      <Flex flexDirection={'column'} w={'1440px'} justifyContent={'space-between'}>
        <Navbar />
        <Filter />
        <Flex
          flexDirection={'row'}
          mt={10}
          gap={'53px'}
          mb={'400'}
          wrap={'wrap'}
          justifyContent={'flex-start'}>
          <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
          <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
}
