import RegisterCard from '../components/RegisterCard.jsx';
import Navbar from '../components/Navbar.jsx';

export default function Register() {
  return (
    <>
      <Navbar navItems={['Home', 'Login', 'Cart()']} />
      <RegisterCard />
    </>
  );
}
