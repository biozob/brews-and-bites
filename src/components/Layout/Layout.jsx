import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import AdminNav from '../../admin/AdminNav';
import { useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />}
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
