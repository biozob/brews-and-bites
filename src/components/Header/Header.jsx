import { useRef, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { getAuth, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';

import './header.css';
import logo from '../../assets/images/logo.png';

const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/shop', display: 'Products' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  const Logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success('Logged out successfully');
        navigate('/home');
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <header className='header' ref={headerRef}>
        <Container>
          <Row>
            <div className='nav__wrapper'>
              <div className='logo'>
                <Link to='home'>
                  <motion.img whileTap={{ scale: 1.5 }} src={logo} alt='logo' />
                </Link>
              </div>
              <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                <ul className='menu'>
                  {nav__links.map((item, index) => (
                    <li className='nav__item' key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? 'active__link' : ''
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='nav__icons'>
                {currentUser ? (
                  <>
                    <div className='user-logged'>
                      <div className='user-logged-name'>
                        <span>Hi, {currentUser.displayName}</span>
                      </div>
                      <div className='user-logout'>
                        <button onClick={Logout}>Logout</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to='/login'>
                    <motion.span whileTap={{ scale: 1.5 }}>
                      <i className='ri-user-line'></i>
                    </motion.span>
                  </Link>
                )}
                {/* <p>{currentUser.displayName}</p> */}

                <span className='fav__icon'>
                  <i className='ri-heart-line'></i>
                  <span className='badge'>1</span>
                </span>
                <span className='cart__icon'>
                  <Link to='/cart'>
                    <i className='ri-shopping-bag-line'></i>
                    <span className='badge'>{totalQuantity}</span>
                  </Link>
                </span>
                <div className='mobile__menu' onClick={toggleMenu}>
                  <span>
                    <i className='ri-menu-line'></i>
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
