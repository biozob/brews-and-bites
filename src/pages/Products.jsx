import { useState } from 'react';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/products.css';

import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Products = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    const filteredProducts = products.filter(
      (item) => item.category === filterValue
    );
    setProductsData(filteredProducts);
    document.getElementById('sortBy').selectedIndex = 0;
  };

  const handleSortBy = (e) => {
    const selectedSortOrder = e.target.value;
    const sortedProducts = [...productsData];

    sortedProducts.sort((a, b) => {
      if (selectedSortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setProductsData(sortedProducts);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <>
      <Helmet title='Products'>
        <CommonSection title='Our Products' />
        <section>
          <Container>
            <Row>
              <Col lg='3' md='6' sm='6'>
                <div className='filter__widget'>
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value='soda'>Soda</option>
                    <option value='beer'>Beer</option>
                    <option value='chocolate'>Chocolate</option>
                    <option value='jelly'>Jelly</option>
                    <option value='chips'>Chips</option>
                  </select>
                </div>
              </Col>
              <Col lg='3' md='6' sm='6'>
                <div className='filter__widget'>
                  <select id='sortBy' onChange={handleSortBy}>
                    <option>Sort by</option>
                    <option value='asc'>Price (Low to High)</option>
                    <option value='desc'>Price (High to Low)</option>
                  </select>
                </div>
              </Col>
              <Col lg='6' md='12'>
                <div className='search__box'>
                  <input
                    type='text'
                    placeholder='Search...'
                    onChange={handleSearch}
                  />
                  <span>
                    <i className='ri-search-line'></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='pt-2'>
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1>No products are found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Products;
