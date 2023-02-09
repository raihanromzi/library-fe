import Navbar from '../components/Navbar.jsx';
import LoginCard from '../components/LoginCard.jsx';
import { Center, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function LoginUser() {
  return (
    <>
      <Navbar />
      <LoginCard loginHeader={'Login'} />
      <Center mt={10}>
        <LinkBox as={'section'}>
          Not registered yet?
          <LinkOverlay href={'www.google.com'}>
            <b> Register here</b>
          </LinkOverlay>
        </LinkBox>
      </Center>
    </>
  );
}
