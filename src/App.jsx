import './App.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './routers/ProtectedRoute';
import AddProducts from './admin/AddProducts';
import AllProducts from './admin/AllProducts';
import Dashboard from './admin/Dashboard';
import Users from './admin/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Navigate to='home' /> },
      { path: 'home', element: <Home /> },
      { path: 'shop', element: <Products /> },
      { path: 'shop/:id', element: <ProductDetails /> },
      { path: 'cart', element: <Cart /> },
      {
        path: '/',
        element: <ProtectedRoute />,
        children: [
          {
            path: '/checkout',
            element: <Checkout />,
          },
          {
            path: '/dashboard/',
            element: <Dashboard />,
          },
          {
            path: '/dashboard/all-products',
            element: <AllProducts />,
          },
          {
            path: '/dashboard/add-products',
            element: <AddProducts />,
          },
          {
            path: '/dashboard/users',
            element: <Users />,
          },
        ],
      },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
