/* eslint-disable prettier/prettier */
import BooksAdmin from '../pages/BooksAdmin';
import CategoriesAdmin from '../pages/CategoriesAdmin';
import DashboardAdmin from '../pages/DashboardAdmin';
import Home from '../pages/Home';
import LoansAdmin from '../pages/LoansAdmin';
import LoginAdmin from '../pages/LoginAdmin';

import LoginUser from '../pages/LoginUser';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import PageProtected from './protected';
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
    element: (
      < PageProtected guestOnly={true}>
        <LoginUser />
      </ PageProtected>
    )
  },
  {
    path: '/register',
    element: (
      < PageProtected guestOnly={true}>
        <Register />
      </ PageProtected>
    )
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
    element: (
      < PageProtected guestOnly={true}>
        <LoginAdmin />
      </ PageProtected>
    )
  },
  {
    path: '/admin/dashboard',
    element: (
      < PageProtected needLogin={true} adminOnly={true}>
        <DashboardAdmin />
      </ PageProtected>
    )
  },
  {
    path: '/admin/dashboard/books',
    element: (
      <PageProtected needLogin={true} adminOnly={true}>
        <BooksAdmin />
      </PageProtected>
    )
  },
  {
    path: '/admin/dashboard/categories',
    element: (
      <PageProtected needLogin={true} adminOnly={true}>
        <CategoriesAdmin />
      </PageProtected>
    )
  },
  {
    path: '/admin/dashboard/loans',
    element: (
      <PageProtected needLogin={true} adminOnly={true}>
        <LoansAdmin />
      </PageProtected>
    )
  }
];


export default routes;
