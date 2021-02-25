import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Modal } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

export const HooksRelatedItems = () => {
  const { curProduct, getSingleProduct } = useContext(ProductContext);
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  const [relatedProductInfo, setRelatedProductInfo] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [combinedFeatures, setCombinedFeatures] = useState([]);
  const [show, setShow] = useState(false);

  const getRelatedProductInfo = () => {
    let relatedProdInfoArr = [];
    relatedProductIds.map((item) => {
      let tempObj = {};
      let urls = [
        '/proxy/api/fec2/hratx/products/' + item.toString(),
        '/proxy/api/fec2/hratx/products/' + item.toString() + '/styles'
      ];
      Promise.all(
        urls.map((url) => {
          return axios.get(url).then((res) => res.data);
        })
      )
        .then((data) => {
          tempObj = data[0];
          if (data[1].results[0].photos[0].thumbnail_url) {
            tempObj.thumbnail = data[1].results[0].photos[0].thumbnail_url;
          }
        })
        .then(() => {
          relatedProdInfoArr.push(tempObj);
          if (relatedProdInfoArr.length === relatedProductIds.length) {
            setRelatedProductInfo(relatedProdInfoArr);
          }
        })
        .catch((error) => {
          console.error(
            error,
            'OOOPS!  There was an error getting the information about related product.'
          );
        });
    });
  };

  useEffect(() => {
    let url = `/proxy/api/fec2/hratx/products/${curProduct.id}/related`;
    axios
      .get(url)
      .then((results) => {
        setRelatedProductIds(results.data);
      })
      .catch((error) => {
        console.error(
          error,
          'OOOPS!  There was an error getting the list of items related to this one.'
        );
      });
  }, [curProduct]);

  useEffect(() => {
    getRelatedProductInfo();
  }, [relatedProductIds]);

  return (
    <>
      <b>RELATED ITEMS</b>
      <br />
      <div style={{ overflow: 'hidden' }}>
        <CarouselProvider
          className='c-related-items-carousel'
          naturalSlideHeight={100}
          naturalSlideWidth={100}
          totalSlides={relatedProductInfo.length}
          visibleSlides={3}
          dragEnabled={true}
        >
          <Slider aria-label='related products carousel'>
            {relatedProductInfo.map(
              (product, idx) =>
                product.thumbnail && (
                  <Slide
                    aria-label='product slide'
                    key={idx}
                    style={{
                      borderStyle: 'solid',
                      height: '300px',
                      width: '325px',
                      marginLeft: '7px',
                      marginRight: '7px',
                      position: 'relative'
                    }}
                    index={0}
                  >
                    <div
                      style={{
                        height: '400px',
                        width: '280px',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '95%'
                      }}
                    >
                      <div
                        style={{
                          height: '70%',
                          width: '100%',
                          position: 'absolute'
                        }}
                      >
                        <div
                          onClick={() => {
                            getSingleProduct(product.id);
                          }}
                          style={{
                            height: '300px',
                            width: '300px',
                            backgroundImage: product.thumbnail
                              ? `url(${
                                  product.thumbnail.split('&w=')[0] + '&w=300&h=300&crop=faces'
                                })`
                              : null,
                            backgroundRepeat: 'no-repeat'
                          }}
                        ></div>
                        <div style={{ height: '30%', width: '100%' }}>
                          <div className='fs-6 m-0'>{product.category}</div>
                          <div className='fs-6 m-0'>{product.name}</div>
                          <div className='fs-6 m-0'>${product.default_price}</div>
                          <div className='fs-6 m-0'>
                            <StarRatings
                              rating={3.8}
                              starRatedColor='#394a6d'
                              numberOfStars={5}
                              name='rating'
                              starDimension='20px'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                )
            )}
          </Slider>
        </CarouselProvider>
      </div>
    </>
  );
};
