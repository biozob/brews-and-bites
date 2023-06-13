import React, { useState, useEffect } from 'react';

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import heroImg from '../assets/images/hero-img.png';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

const Home = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [sodaProducts, setSodaProducts] = useState([]);
  const [beerProducts, setBeerProducts] = useState([]);
  const [jellyProducts, setJellyProducts] = useState([]);
  const [chipsProducts, setChipsProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filterPopularProducts = products.filter(
      (item) => item.category === 'chocolate'
    );
    const filterSodaProducts = products.filter(
      (item) => item.category === 'soda'
    );
    const filterBeerProducts = products.filter(
      (item) => item.category === 'beer'
    );
    const filterJellyProducts = products.filter(
      (item) => item.category === 'jelly'
    );
    const filterChipsProducts = products.filter(
      (item) => item.category === 'chips'
    );

    setPopularProducts(filterPopularProducts);
    setSodaProducts(filterSodaProducts);
    setBeerProducts(filterBeerProducts);
    setJellyProducts(filterJellyProducts);
    setChipsProducts(filterChipsProducts);
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='brews and sweets' />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h2>Enjoy life with small BREWS and BITES</h2>
                <p className='hero__subtitle'>Our Bestsellers in {year}</p>
                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
                  <Link to='/shop'>Buy Now</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Popular Products</h2>
            </Col>
            <ProductsList data={popularProducts} />
            <ProductsList data={beerProducts} />
          </Row>
        </Container>
      </section>
      <Services />
      <section className='best__sellers'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Best Sellers</h2>
            </Col>
            <ProductsList data={sodaProducts} />
            <ProductsList data={chipsProducts} />
          </Row>
        </Container>
      </section>
      <section className='best__jelly'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>Most wanted</h2>
            </Col>
            <ProductsList data={jellyProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
