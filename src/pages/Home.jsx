import Navbar from '../components/Navbar.jsx';
import Filter from '../components/Filter.jsx';
import { Flex } from '@chakra-ui/react';
import BookCard from '../components/BookCard.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Filter />
      <Flex
        flexDirection={'row'}
        gap={'8'}
        mt={10}
        mb={'400'}
        wrap={'wrap'}
        justifyContent={'space-between'}>
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
        <BookCard navigateTo={'../book'} title={'Atomic Habit'} author={'James'} />
      </Flex>
      <Footer />
    </>
  );
}
