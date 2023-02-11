import Home from '../pages/Home.jsx';
import LoginUser from '../pages/LoginUser.jsx';
import Register from '../pages/Register.jsx';
import BookDetail from '../pages/BookDetail.jsx';
import NotFound from '../pages/NotFound.jsx';
import LoginAdmin from '../pages/LoginAdmin.jsx';

const routes = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginUser />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/book',
    element: <BookDetail />
  },
  {
    path: '/*',
    element: <NotFound />
  },
  {
    path: '/admin/login',
    element: <LoginAdmin />
  }
];

export default routes;
