import React, { useRef, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

import './header.css';
import logo from '../../assets/images/logo.png';

const nav__links = [
  { path: '/home', display: 'Home' },
  { path: '/shop', display: 'Products' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

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
                <motion.span whileTap={{ scale: 1.5 }}>
                  <i className='ri-user-line'></i>
                </motion.span>
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
