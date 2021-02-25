import React from 'react';
import { HooksRelatedItems } from './hooksRelatedItems.js';

class RelatedAndOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfit: []
    };
  }

  render() {
    return (
      <div className='c-related-items-and-outfit d-module'>
        <section className='c-related-items'>
          <div>
            <HooksRelatedItems />
          </div>
        </section>
      </div>
    );
  }
}

export default RelatedAndOutfit;
