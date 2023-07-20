import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import '../styles/admin-add-products.css';
import { toast } from 'react-toastify';
import { db, storage } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterShortDesc, setEnterShortDesct] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterCategory, setEnterCategory] = useState('');
  const [enterPrice, setEnterPrice] = useState('');
  const [enterProductImg, setEnterProductImg] = useState('null');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    // add product to firebase
    try {
      const docRef = await collection(db, 'products');

      const storageRef = ref(
        storage,
        `productImages/${Date.now() + enterProductImg.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

      uploadTask.on(
        () => {
          toast.error('images not uploaded');
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await addDoc(docRef, {
              productName: enterTitle,
              shortDesc: enterShortDesc,
              description: enterDescription,
              category: enterCategory,
              price: enterPrice,
              imgUrl: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success('Product successfully added');
      navigate('/dashboard/all-products');
    } catch (err) {
      setLoading(false);
      toast.error('Product not added');
    }
  };

  return (
    <section className='admin__add-products'>
      <Container>
        <Row>
          <Col lg='12'>
            {loading ? (
              <h4 className='py-5 text-center'>Loading...</h4>
            ) : (
              <>
                <h4 className='mb-4'>Add Product</h4>
                <Form onSubmit={addProduct}>
                  <FormGroup className='form__group'>
                    <span>Product Title</span>
                    <input
                      type='text'
                      placeholder='Nesquik'
                      value={enterTitle}
                      onChange={(e) => setEnterTitle(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <span>Short Description</span>
                    <input
                      type='text'
                      placeholder='lorem...'
                      value={enterShortDesc}
                      onChange={(e) => setEnterShortDesct(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <span>Description</span>
                    <input
                      type='text'
                      placeholder='Description...'
                      value={enterDescription}
                      onChange={(e) => setEnterDescription(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <div className='d-flex align-items-center justify-content-between gap-5'>
                    <FormGroup className='form__group w-50'>
                      <span>Price</span>
                      <input
                        type='number'
                        placeholder='$25'
                        value={enterPrice}
                        onChange={(e) => setEnterPrice(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className='form__group w-50'>
                      <span>Category</span>
                      <select
                        name=''
                        id=''
                        className='w-100 p-2'
                        value={enterCategory}
                        onChange={(e) => setEnterCategory(e.target.value)}
                      >
                        <option>- Please Select -</option>
                        <option value='chocolate'>Choko</option>
                        <option value='beer'>Beer</option>
                        <option value='jelly'>Jelly</option>
                        <option value='soda'>Soda</option>
                        <option value='chips'>Chips</option>
                      </select>
                    </FormGroup>
                  </div>
                  <div>
                    <FormGroup className='form__group'>
                      <span>Product Image</span>
                      <input
                        type='file'
                        onChange={(e) => setEnterProductImg(e.target.files[0])}
                        required
                      />
                    </FormGroup>
                  </div>
                  <button className='primary__btn'>Add Product</button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
