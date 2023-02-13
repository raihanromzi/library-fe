import BooksAdmin from '../pages/BooksAdmin';
import CategoriesAdmin from '../pages/CategoriesAdmin';
import DashboardAdmin from '../pages/DashboardAdmin';
import Home from '../pages/Home';
import LoansAdmin from '../pages/LoansAdmin';
import LoginAdmin from '../pages/LoginAdmin';

import LoginUser from '../pages/LoginUser';
import NotFound from '../pages/NotFound';
import RegisterUser from '../pages/RegisterUser.jsx';
import PageProtected from './protected';
import BookDetail from '../pages/BookDetail.jsx';
import LoanCart from '../pages/LoanCart.jsx';

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
    element: <RegisterUser />
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
    path: '/loancart',
    element: <LoanCart />
  },
  {
    path: '/admin/login',
    element: (
      <PageProtected guestOnly={true}>
        <LoginAdmin />
      </PageProtected>
    )
  },
  {
    path: '/admin/dashboard',
    element: (
      <PageProtected needLogin={true} adminOnly={true}>
        <DashboardAdmin />
      </PageProtected>
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
