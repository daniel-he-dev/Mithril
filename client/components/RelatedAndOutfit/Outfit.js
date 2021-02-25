import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList: []
    };
  }

  addItemClick(item) {
    this.setState({ outfitList: this.state.outfitList.concat(item) });
  }

  render() {
    return (
      <div>
        <b>YOUR OUTFIT</b>
      </div>
    );
  }
}

export default Outfit;
