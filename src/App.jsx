import './App.css';
import Filter from './components/Filter.jsx';
import Navbar from './components/Navbar.jsx';
import CardBook from './components/Card.jsx';
import { Flex } from '@chakra-ui/react';

export default function App() {
  return (
    <>
      <Navbar />
      <Filter />
      <Flex gap={'8'} mt={10} flexWrap={'wrap'}>
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
      </Flex>
    </>
  );
}
