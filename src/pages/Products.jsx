import { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/products.css';
import ProductsList from '../components/UI/ProductsList';
import useGetData from '../custom-hooks/useGetData';

const Products = () => {
  const { data: products, loading } = useGetData('products');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Set the default display to show all products on initial load
    setFilteredProducts(products);
  }, [products]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'all') {
      // If "Filter By Category" is selected, show all products
      setFilteredProducts(products);
    } else {
      // Filter products based on the selected category
      const filteredProducts = products.filter(
        (item) => item.category === filterValue
      );
      setFilteredProducts(filteredProducts);
    }
    document.getElementById('sortBy').selectedIndex = 0;
  };

  const handleSortBy = (e) => {
    const selectedSortOrder = e.target.value;
    const sortedProducts = [...filteredProducts];

    sortedProducts.sort((a, b) => {
      if (selectedSortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setFilteredProducts(sortedProducts);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(searchedProducts);
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
                    <option value='all'>Filter By Category</option>
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
              {loading ? (
                <h5 className='fw-bold'>Loading...</h5>
              ) : (
                <ProductsList data={filteredProducts} />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Products;
