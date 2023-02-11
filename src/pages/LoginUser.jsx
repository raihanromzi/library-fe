import Navbar from '../components/Navbar.jsx';
import LoginCard from '../components/LoginCard.jsx';
import { Center, Flex, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function LoginUser() {
  return (
    <Flex justifyContent={'center'}>
      <Flex flexDirection={'column'} w={'1440px'} justifyContent={'space-between'}>
        <Navbar />
        <LoginCard loginHeader={'Login'} />
        <Center mt={10}>
          <LinkBox as={'section'}>
            Not registered yet?
            <LinkOverlay href={'../register'}>
              <b> Register here</b>
            </LinkOverlay>
          </LinkBox>
        </Center>
      </Flex>
    </Flex>
  );
}
