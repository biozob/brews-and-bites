import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const quick__links = [
  {
    path: '#',
    display: 'Chocolate',
  },
  {
    path: '#',
    display: 'Jelly',
  },
  {
    path: '#',
    display: 'Sodas',
  },
  {
    path: '#',
    display: 'Chips',
  },
  {
    path: '#',
    display: 'Beer',
  },
];

const quick__links2 = [
  {
    path: 'shop',
    display: 'Products',
  },
  {
    path: 'cart',
    display: 'Cart',
  },
  {
    path: 'login',
    display: 'Login',
  },
  {
    path: '#',
    display: 'Privacy Policy',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <h5 className='footer__link-title'>Our Products</h5>
            <ListGroup className='footer__quick-links'>
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='4'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='4'>
            <h5 className='footer__link-title'>Contact</h5>
            <ListGroup className='footer__quick-links'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  Address:
                </h6>
                <p className='mb-0'>Pleven, Bulgaria</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  Email:
                </h6>
                <p className='mb-0'>influcid91@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-phone-fill'></i>
                  </span>
                  Phone:
                </h6>
                <p className='mb-0'>+359890212177</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>
              Copyright {year}, design and develop by Ventsislav Panov, All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
