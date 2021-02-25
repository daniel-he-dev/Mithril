import React from 'react';

const ProductBreakdown = ({ characteristics }) => {
  let charArray = [];
  for (let key in characteristics) {
    charArray.push([key, characteristics[key].value * 20]);
  }
  return (
    <div className='jbarGraph'>
      <div className='row'>
        {charArray.map((array, index) => {
          return (
            <React.Fragment key={index}>
              <div className='side'>
                <div className='jXAxis'>
                  {array[0]}:&nbsp;{array[1] ? (array[1] / 20).toFixed(1) : 0}
                </div>
              </div>
              <div className='middle'>
                <div className='jMarkerContainer'>
                  <div style={{ marginLeft: `${array[1] - 5}%` }}>
                    <span className='jmarker'>▼</span>
                  </div>
                </div>
                {['Length', 'Size', 'Width'].includes(array[0]) ? (
                  <div>
                    <span>Too Small</span>
                    <span style={{ float: 'right' }}>Too Big</span>
                  </div>
                ) : (
                  <div>
                    <span>Poor</span>
                    <span style={{ float: 'right' }}>Great</span>
                  </div>
                )}
              </div>{' '}
              <br />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProductBreakdown;
