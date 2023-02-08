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
      <Flex justifyContent={'center'} gap={'4'} mt={10}>
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
        <CardBook title={'Atomic Habit'} author={'James'} />
      </Flex>
    </>
  );
}
