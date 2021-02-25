import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { helpfulClick, reportClick } from './handleReviewClicks.js';

export const IndividualReview = ({ counter, result, date }) => {
  const [helpful, setHelpful] = useState(result.helpfulness);
  const [clicked, setClicked] = useState(false);

  return (
    <div className='IndividualReview' key={result.review_id}>
      <div className='jStars'>
        <StarRatings
          rating={result.rating}
          starRatedColor='#394a6d'
          numberOfStars={5}
          name='rating'
          starDimension='20px'
        />
      </div>
      <div className='jDate'>{result.reviewer_name + ' ' + result.date}</div>
      <br />
      <div className='ReviewText'>
        <strong>{result.summary}</strong>
        <div>{result.body}</div>
        {!!result.response && <div id='jResponse'>{result.response}</div>}
        <div id='helpfulAndReport'>
          Helpful?&nbsp;
          <span
            onClick={(e) => {
              setClicked(true);
              result.helpfulness++;
              setHelpful(result.helpfulness);
              helpfulClick(e);
            }}
            className='d-underlined'
            id={result.review_id}
          >
            Yes
          </span>{' '}
          {clicked ? helpful : result.helpfulness} |&nbsp;
          <span onClick={reportClick} className='d-underlined' id={result.review_id}>
            Report
          </span>
        </div>
      </div>
    </div>
  );
};
