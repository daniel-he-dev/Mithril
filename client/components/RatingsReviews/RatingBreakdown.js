import React from 'react';
import ratingCalculations from './ratingCalculations.js';

const RatingBreakdown = ({ allRatings, recommend }) => {
  //set ratings with 0 reviews to 0 and convert to array
  let ratingStats = ratingCalculations(allRatings);
  let ratingPercentages = [];
  // individual star review / ratingsCount
  for (let x = 1; x < 6; x++) {
    if (!allRatings[x]) {
      allRatings[x] = 0;
    }
    ratingPercentages.unshift((allRatings[x] / ratingStats.ratingsCount) * 100);
  }
  let counter = 6;
  recommend.true = parseInt(recommend.true);
  recommend.false = parseInt(recommend.false);
  let recommendPercent = 100;
  if (recommend.true || recommend.false) {
    recommendPercent = (recommend.true / (recommend.true + recommend.false)) * 100;
  }

  return (
    <div>
      {!isNaN(recommendPercent) ? Math.round(recommendPercent) : 100}% of users recommend this item.
      <div className='jbarGraph'>
        <div className='row'>
          {ratingPercentages.map((percentage) => {
            counter--;
            return (
              <React.Fragment key={counter}>
                <div className='side'>
                  <div className='jXAxis'>{counter} stars</div>
                </div>
                <div className='middle'>
                  <div className='jbar-container'>
                    <div className='jbars' style={{ width: `${percentage || 0}%` }}></div>
                  </div>
                </div>{' '}
                <br />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RatingBreakdown;
