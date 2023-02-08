import Navbar from '../components/Navbar.jsx';
import LoginCard from '../components/LoginCard.jsx';
import { Center, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

export default function LoginUser() {
  return (
    <>
      <Navbar navItems={['Home', 'Admin']} />
      <LoginCard loginHeader={'Login'} />
      <Center mt={10}>
        <Text>
          Not registered yet?
          <LinkBox as={'section'}>
            <LinkOverlay href={'www.google.com'}>
              <b>Register here</b>
            </LinkOverlay>{' '}
          </LinkBox>
        </Text>
      </Center>
    </>
  );
}
