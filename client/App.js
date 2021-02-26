import React, { useContext, Suspense, lazy } from 'react';
import { Header } from './components/defaults/Header.js';
import { ProductOverview } from './components/ProductOverview/index';
// const RatingsAndReviews = lazy(() => import('./components/RatingsReviews/RatingsReviews.js'));
// const QuestionsAndAnswers = lazy(() =>
//   import('./components/QuestionsAndAnswers/QuestionsAndAnswers.js')
// );
// const RelatedAndOutfit = lazy(() => import('./components/RelatedAndOutfit/RelatedAndOutfit.js'));
import RelatedAndOutfit from './components/RelatedAndOutfit/RelatedAndOutfit.js';
import HooksRelatedItems from './components/RelatedAndOutfit/hooksRelatedItems.js';
import RatingsAndReviews from './components/RatingsReviews/RatingsReviews.js';
import QuestionsAndAnswers from './components/QuestionsAndAnswers/QuestionsAndAnswers.js';
import { ProductContext } from './context/ProductContext.js';
import { Preloader, Circles } from 'react-preloader-icon';

export const App = () => {
  const { curStyle, curProduct } = useContext(ProductContext);

  return curStyle ? (
    <>
      <Header />
      <br />
      <div style={{ overflow: 'hidden' }} className='container'>
        <ProductOverview />
        {/* <RelatedAndOutfit /> */}
        <HooksRelatedItems />
        <QuestionsAndAnswers />
        <RatingsAndReviews product_id={curProduct.id} />
      </div>
    </>
  ) : (
    <div className='bg-secondary' style={{ height: '100vh', width: '100vw', display: 'flex' }}>
      <div className='m-auto'>
        <Preloader
          use={Circles}
          size={100}
          strokeWidth={21}
          strokeColor='#262626'
          duration={2000}
        />
      </div>
    </div>
  );
};
