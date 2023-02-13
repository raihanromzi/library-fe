import Navbar from '../components/Navbar.jsx';
import { Flex, Text } from '@chakra-ui/react';
import Footer from '../components/Footer.jsx';
import LoanBookCheckout from '../components/LoanBookCheckout.jsx';
import ButtonComponent from '../components/ButtonComponent.jsx';

export default function LoanCart() {
  return (
    <Flex justifyContent={'center'} flexDirection={'column'} alignContent={'center'}>
      <Flex justifyContent={'center'}>
        <Flex flexDirection={'column'} w={'1440px'} justifyContent={'space-between'}>
          <Navbar />
          <Flex
            mb={'200px'}
            mt={'100px'}
            flexDirection={'column'}
            alignContent={'center'}
            alignItems={'center'}>
            <Flex flexDirection={'column'}>
              <Text fontSize={'2xl'} fontWeight={'extrabold'} mb={6}>
                Loan Cart (3 Items)
              </Text>
              <Flex
                flexDirection={'column'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                gap={10}>
                <LoanBookCheckout />
                <LoanBookCheckout />
                <LoanBookCheckout />
                <ButtonComponent>Checkout</ButtonComponent>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}
