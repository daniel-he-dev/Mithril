import React, { useState, useEffect, useContext } from 'react';
import { ReviewList } from './ReviewList.js';
import RatingSummary from './RatingSummary.js';
import RatingBreakdown from './RatingBreakdown.js';
import ProductBreakdown from './ProductBreakdown.js';
import axios from 'axios';
import { SortProvider } from './SortReviews.js';
import { ProductContext } from '../../context/ProductContext.js';

const getMetaData = function (productId) {
  let url = '/proxy/api/fec2/hratx/reviews/meta?product_id=' + productId;
  return axios.get(url).catch((err) => {
    throw err;
  });
};

const RatingsAndReviews = () => {
  const { curProduct } = useContext(ProductContext);
  const [metaData, setMetaData] = useState(undefined);
  useEffect(() => {
    getMetaData(curProduct.id)
      .then((data) => {
        setMetaData(data.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [curProduct]);
  if (metaData) {
    return (
      <div className='jcontainer'>
        <SortProvider>
          <ReviewList characteristics={metaData.characteristics} />
        </SortProvider>
        <div className='ReviewSideBar'>
          <div className='SideBarContainer'>
            <RatingSummary allRatings={metaData.ratings} />
            <RatingBreakdown allRatings={metaData.ratings} recommend={metaData.recommended} />
            <ProductBreakdown characteristics={metaData.characteristics} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default RatingsAndReviews;
