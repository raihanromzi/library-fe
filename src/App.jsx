import './App.css';
import Filter from './components/Filter.jsx';
import Navbar from './components/Navbar.jsx';
import CardBook from './components/Card.jsx';
import { Flex } from '@chakra-ui/react';
import Footer from './components/Footer.jsx';

export default function App() {
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
