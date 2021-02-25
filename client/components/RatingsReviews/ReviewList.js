import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AddReview from './AddReview.js';
import { IndividualReview } from './individualReview.js';
import { sort, SortContext } from './SortReviews.js';
import { ProductContext } from '../../context/ProductContext.js';

const getReviews = (productId) => {
  let url = '/proxy/api/fec2/hratx/reviews/?product_id=' + productId;
  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
//adding comment to see if it shows up
const SortReviews = () => {
  const { setSortMethod, sortMethod } = useContext(SortContext);
  const handleChange = (e) => {
    sortProvider(e.target.value);
  };

  const changeMethod = (e) => {
    setSortMethod(e.target.value.toLowerCase());
  };

  return (
    <div>
      Sort reviews by:&nbsp;
      <select
        onChange={changeMethod}
        className='form-select row w-100'
        aria-label='sort reviews, select option'
      >
        <option>Relevance</option>
        <option>Helpfulness</option>
        <option>Newest</option>
      </select>
    </div>
  );
};

export const ReviewList = (props) => {
  const { curProduct } = useContext(ProductContext);
  const [reviews, setReviews] = useState(<div>Loading reviews...</div>);
  const [numReviews, setNumReviews] = useState(2);
  const { sortMethod } = useContext(SortContext);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  useEffect(() => {
    getReviews(curProduct.id)
      .then((data) => {
        data = sort(data.data.results, sortMethod);
        setReviews(
          data.map((result, index) => {
            result.dateForSort = result.date;
            let date = new Date(result.date);
            result.date =
              monthNames[date.getMonth()] +
              ' ' +
              (parseInt(date.getDate()) + 1) +
              ', ' +
              date.getFullYear();
            if (index < numReviews) {
              return <IndividualReview counter={index} result={result} date={date} key={index} />;
            }
          })
        );
      })
      .catch((err) => {
        throw err;
      });
  }, [numReviews, sortMethod, curProduct]);

  return (
    <>
      <div className='ReviewList'>
        <SortReviews />
        <div>{reviews}</div>
      </div>
      <div className='jButtonContainer'>
        <AddReview productId={curProduct.id} characteristics={props.characteristics} />
        {reviews.length > numReviews ? (
          <button
            className='d-bold d-border-button'
            onClick={() => {
              setNumReviews(numReviews + 2);
            }}
          >
            More Reviews
          </button>
        ) : (
          <button
            disabled
            className='d-bold d-border-button'
            onClick={() => {
              setNumReviews(numReviews + 2);
            }}
          >
            More Reviews
          </button>
        )}
      </div>
    </>
  );
};
