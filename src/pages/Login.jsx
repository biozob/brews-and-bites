import { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';

import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        setLoading(false);
        toast.success('Logged in successfully');
        navigate('/checkout');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setLoading(false);
        toast.error(errorMessage);
      });
  };

  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg='12' className='text=center'>
                <h5 className='fw-bold'>Loading...</h5>
              </Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold fs-4 mb-4'>Login</h3>
                <Form className='auth__form ' onSubmit={signIn}>
                  <FormGroup className='form__group'>
                    <input
                      type='email'
                      placeholder='Your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input
                      type='password'
                      placeholder='Your password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type='submit' className='primary__btn auth__btn'>
                    Login
                  </button>
                  <p>
                    Dont have account? <Link to='/signup'>Create account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
