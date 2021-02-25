/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
import { submitReview } from './handleReviewClicks.js';

const AddReview = ({ productId, characteristics, setReviews, reviews }) => {
  const [show, setShow] = useState(false);
  const [overallRating, setOverallRating] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let ratingObject = {
    product_id: productId,
    rating: overallRating,
    photos: []
  };
  let characteristicKeys = Object.keys(characteristics);
  ratingObject.characteristics = {};

  const handleCharacteristics = (e) => {
    let array = e.target.id.split(' ');
    ratingObject.characteristics[array[1]] = array[0];
  };
  const handleRecommend = (e) => {
    e.target.id === 'Yes'
      ? (ratingObject['recommend'] = true)
      : (ratingObject['recommend'] = false);
  };

  return (
    <div>
      <button className='d-bold d-border-button' onClick={handleShow}>
        Add A Review
      </button>
      <Modal show={show} onHide={handleClose} dialogClassName='jModal' size='lg'>
        <Modal.Title>Write a review</Modal.Title> <br />
        <Modal.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleClose();
              submitReview(ratingObject, setReviews, reviews);
            }}
          >
            <Form.Label required as='legend' style={{ fontSize: '18px' }}>
              Overall Rating*
            </Form.Label>
            <StarRatings
              required
              feedback='Required'
              rating={overallRating}
              starRatedColor='#394a6d'
              numberOfStars={5}
              name='rating'
              starDimension='20px'
              changeRating={(rating) => {
                setOverallRating(rating);
              }}
            />{' '}
            <br />
            <br />
            <Form.Group required feedback='Required' onChange={handleRecommend}>
              <Form.Label as='legend' style={{ fontSize: '18px' }}>
                Do you recommend this product?*
              </Form.Label>
              {['Yes', 'No'].map((rating) => (
                <Form.Check
                  key={rating}
                  inline
                  name={'recommend'}
                  type={'radio'}
                  id={rating}
                  label={rating}
                />
              ))}
            </Form.Group>
            {characteristicKeys.map((characteristic) => (
              <div key={characteristic}>
                <Form.Group required feedback='Required' onChange={handleCharacteristics}>
                  <Form.Label as='legend' style={{ fontSize: '18px' }}>
                    {characteristic}*&nbsp;
                  </Form.Label>
                  {['1', '2', '3', '4', '5'].map((rating) => (
                    <Form.Check
                      key={rating + characteristics[characteristic].id}
                      inline
                      name={characteristic}
                      type={'radio'}
                      id={rating + ' ' + characteristics[characteristic].id}
                      label={rating}
                    />
                  ))}
                </Form.Group>
                <br />
              </div>
            ))}
            <Form.Group>
              <Form.Label as='legend' style={{ fontSize: '18px' }}>
                Add a summary
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Example: Best purchase ever!'
                onChange={(e) => {
                  ratingObject['summary'] = e.target.value;
                }}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label as='legend' style={{ fontSize: '18px' }}>
                Add a written review*
              </Form.Label>
              <Form.Control
                required
                type='text'
                as='textarea'
                placeholder='Why did you like the product or not?'
                onChange={(e) => {
                  ratingObject['body'] = e.target.value;
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label as='legend' style={{ fontSize: '18px' }}>
                What is your nickname?*
              </Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Example: jackson11!'
                onChange={(e) => {
                  ratingObject['name'] = e.target.value;
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label as='legend' style={{ fontSize: '18px' }}>
                Your email*
              </Form.Label>
              <Form.Control
                required
                type='email'
                placeholder='Example: jackson11@email.com'
                onChange={(e) => {
                  ratingObject['email'] = e.target.value;
                }}
              />
              For authentication reasons, you will not be emailed
            </Form.Group>
            <br />
            <Button variant='secondary' onClick={() => setShow(false)}>
              Close
            </Button>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddReview;
