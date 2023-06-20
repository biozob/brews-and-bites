import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import Hemlet from '../components/Helmet/Helmet';
import '../styles/checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Hemlet title='Checkout'>
      <section>
        <section className='checkout__text text-center'>
          <Container>
            <Row>
              <Col lg='12'>
                <h2 className='checkout__title'>Checkout</h2>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='7'>
              <h6 className='mb-4 fw-bold'>Delivery address</h6>
              <Form className='delivery__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Name' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='email' placeholder='Email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='number' placeholder='Phone' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Address' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='City' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Postal Code' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Contry' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='5'>
              <h6 className='mb-4 fw-bold'>Order Overview</h6>
              <div className='checkout__summary'>
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className='buy__btn auth__btn w-100'>
                  Complete Order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Hemlet>
  );
};

export default Checkout;
