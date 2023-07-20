import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title='Cart'>
      <section>
        <section className='cart__head text-center'>
          <Container>
            <Row>
              <Col lg='12'>
                <h2 className='cart__title'>Cart Page</h2>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='9' className='mt-3'>
              {cartItems.length === 0 ? (
                <>
                  <h2 className='fs-4 mb-4'>There are no items in the cart.</h2>
                  <button className='primary__btn'>
                    <Link to='/shop'>Continue shopping</Link>
                  </button>
                </>
              ) : (
                <>
                  <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                  <button className='primary__btn'>
                    <Link to='/shop'>Continue shopping</Link>
                  </button>
                </>
              )}
            </Col>
            <Col lg='3' className='mt-3'>
              {cartItems.length === 0 ? (
                ''
              ) : (
                <>
                  <div>
                    <h6 className='d-flex align-items-center justify-content-between'>
                      Subtotal
                      <span className='fs-4 fw-bold'>${totalAmount}</span>
                    </h6>
                  </div>
                  <div>
                    <button className='primary__btn mt-4 w-100'>
                      <i className='ri-store-2-line'></i>
                      <Link to='/checkout'> Go to Checkout</Link>
                    </button>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt='' />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>x {item.quantity}</td>
      <td>
        <i onClick={deleteProduct} className='ri-delete-bin-line'></i>
      </td>
    </tr>
  );
};

export default Cart;
