import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import '../styles/product-details.css';
import { motion } from 'framer-motion';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import useGetData from '../custom-hooks/useGetData';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();

  const { data: products } = useGetData('products');

  const docRef = doc(db, 'products', id);

  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log('no product!');
      }
    };
    getProduct();
  }, [docRef]);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    toast.success('Review submitted');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );

    toast.success(`${productName} added to Cart.`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [products]);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <Helmet title={productName}>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt='' />
            </Col>
            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <div className='d-flex justify-content-between'>
                  <span>{category}</span>
                  <div className='product__rating d-flex align-items-center gap-2 mb-4'>
                    <div>
                      <span>
                        <i className='ri-star-s-fill'></i>
                        <i className='ri-star-s-fill'></i>
                        <i className='ri-star-s-fill'></i>
                        <i className='ri-star-s-fill'></i>
                        <i className='ri-star-half-s-fill'></i>
                      </span>
                    </div>
                    <p>
                      <span>{avgRating}</span>
                    </p>
                  </div>
                </div>

                <span className='product__price'>${price}</span>

                <p className='mt-3 mb-4'>{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='primary__btn'
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab__wrapper d-flex align-items-center gap-5'>
                <h6
                  className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Reviews
                </h6>
              </div>
              {tab === 'desc' ? (
                <div className='tab__content mt-4'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product__review mt-4'>
                  <div className='review__wrapper'>
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className='mb-3'>
                          <h6>Ventsi Test</h6>
                          <span>({item.rating} rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className='review__form'>
                      <h4>Write review about the product</h4>
                      <form onSubmit={submitHandler}>
                        <div className='form__group'>
                          <input
                            type='text'
                            placeholder='Enter Name'
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className='form__group d-flex align-items-center gap-4 rating__group'>
                          <motion.span
                            className={rating === 1 ? 'active' : ''}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => handleRatingClick(1)}
                          >
                            1<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            className={rating === 2 ? 'active' : ''}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => handleRatingClick(2)}
                          >
                            2<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            className={rating === 3 ? 'active' : ''}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => handleRatingClick(3)}
                          >
                            3<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            className={rating === 4 ? 'active' : ''}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => handleRatingClick(4)}
                          >
                            4<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            className={rating === 5 ? 'active' : ''}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => handleRatingClick(5)}
                          >
                            5<i className='ri-star-s-fill'></i>
                          </motion.span>
                        </div>
                        <div className='form__group'>
                          <textarea
                            rows={4}
                            type='text'
                            placeholder='Review Message'
                            ref={reviewMsg}
                            required
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type='submit'
                          className='primary__btn'
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>Recomended for you</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
