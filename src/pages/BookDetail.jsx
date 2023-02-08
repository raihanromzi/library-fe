import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Image, Text } from '@chakra-ui/react';
import ButtonComponent from '../components/ButtonComponent.jsx';

export default function BookDetail() {
  return (
    <>
      <Navbar navItems={['Home', 'Login', 'Cart()']} />
      <Box>
        <Image />
        <Text>Atomic Habits</Text>
        <Text>James</Text>
        <Text>Lorem ipsum</Text>
        <ButtonComponent>Register</ButtonComponent>
      </Box>
      <Footer />
    </>
  );
}
