import { createBrowserRouter } from 'react-router-dom';
import UserPage from './UserPage';
import UserDetails from './UserDetails';
import TransactionShow from './TransactionShow';
import NavBar from '../components/NavBar';
import Layout from './Layout';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import UserAddPage from './UserAddPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'users',
        children: [
          {
            index: true,
            element: <UserPage />,
          },
          {
            path: ':id',
            element: <UserDetails />,
          },
          {
            path: 'new', // /user/new
            element: <UserAddPage />,
          },
        ],
      },
    ],
  },
]);
