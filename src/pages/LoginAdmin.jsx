import Navbar from '../components/Navbar.jsx';
import LoginCard from '../components/LoginCard.jsx';

export default function LoginAdmin() {
  return (
    <>
      <Navbar />
      <LoginCard loginHeader={'Admin'} />
    </>
  );
}
