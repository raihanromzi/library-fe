import Navbar from '../components/Navbar.jsx';
import Filter from '../components/Filter.jsx';
import { Flex } from '@chakra-ui/react';
import CardBook from '../components/Card.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <Filter />
      <Flex flexDirection={'row'} gap={'8'} mt={10} mb={'400'} wrap={'wrap'}>
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
      </Flex>
      <Footer />
    </>
  );
}
