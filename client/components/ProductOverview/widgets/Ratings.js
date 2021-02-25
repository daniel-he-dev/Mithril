import StarRatings from 'react-star-ratings';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import { Link } from 'react-scroll';

export const Ratings = () => {
  const { curProduct, getProductRating } = useContext(ProductContext);
  const ref = useRef(null);

  const scroll = () => ref.current.scrollIntoView();

  return (
    <div className='col'>
      <StarRatings starDimension='20px' rating={curProduct.rating || 0} starSpacing='3px' />
      {'  '}
      <small>
        <Link to='jcontainer' style={{ 'text-decoration': 'underline', cursor: 'pointer' }}>
          Read all reviews
        </Link>
      </small>
    </div>
  );
};
