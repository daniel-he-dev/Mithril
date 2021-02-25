import React, { useContext, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext';

const AddQuestion = ({ handleSubmit }) => {
  const { curProduct } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleClickSubmit = () => {
    handleSubmit({
      body: question,
      name: nickname,
      email: email,
      product_id: curProduct.id
    });
    setShow(false);
  };

  return (
    <>
      <div className='d-add-question d-border-button d-bold' onClick={() => setShow(true)}>
        Add A Question
      </div>
      <Modal show={show} onHide={() => setShow(false)} backdrop='static' keyboard={false}>
        <Modal.Header>
          <Modal.Title>Ask Your Question</Modal.Title>
          <Modal.Title as='p'>About the {curProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Your Question</Form.Label>
              <Form.Control
                required
                type='text'
                as='textarea'
                placeholder='How many can I buy?'
                onChange={(e) => setQuestion(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Nickname</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='example&#58; jackson1'
                onChange={(e) => setNickname(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                required
                type='email'
                placeholder='joe_josephson@joe.com'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClickSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddQuestion;
