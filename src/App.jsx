import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import LoginUser from './pages/LoginUser.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';
import LoginAdmin from './pages/LoginAdmin.jsx';
import BookDetail from './pages/BookDetail.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes key={'route'}>
        <Route exact path={'/home'} element={<Home />} />;
        <Route exact path={'/login'} element={<LoginUser />} />;
        <Route exact path={'/register'} element={<Register />} />;
        <Route exact path={'/book'} element={<BookDetail />} />;
        <Route exact path={'/*'} element={<NotFound />} />;
        <Route exact path={'/admin/login'} element={<LoginAdmin />} />;
      </Routes>
    </BrowserRouter>
  );
}
