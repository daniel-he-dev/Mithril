/* eslint-disable camelcase */
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../../context/ProductContext';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide, ButtonNext, ButtonBack, Dot } from 'pure-react-carousel';

export const ImageGallery = () => {
  const { curStyle, setZoomIn, zoomIn } = useContext(ProductContext);
  const [curSlide, setCurSlide] = useState(0);
  const [slideStart, setSlideStart] = useState(0);
  const [slideEnd, setSlideEnd] = useState(7);

  const nextImg = () => {
    setCurSlide(curSlide + 1);
    if (curSlide > 5) {
      setSlideStart(slideStart + 1);
      setSlideEnd(slideEnd + 1);
    }
  };

  const prevImg = () => {
    setCurSlide(curSlide - 1);
    if (curSlide > 6) {
      setSlideStart(slideStart - 1);
      setSlideEnd(slideEnd - 1);
    }
  };

  const updateCurImg = (index) => {
    setCurSlide(index);
    setZoomIn(true);
  };

  return (
    <div className='m-auto'>
      {!zoomIn ? (
        <CarouselProvider
          totalSlides={curStyle.photos.length}
          naturalSlideHeight={100}
          naturalSlideWidth={95}
          dragEnabled={false}
        >
          <div
            style={{
              height: '700px',
              width: '700px',
              position: 'relative'
            }}
          >
            <div className='position-absolute row w-100 h-100'>
              <Slider aria-label='product overview carousel'>
                {curStyle.photos.map(({ url }, i) => {
                  return url ? (
                    <Slide index={i} key={i}>
                      <div
                        style={{
                          height: '700px',
                          width: '700px'
                        }}
                      >
                        <img
                          src={url.split('&w=')[0] + '&w=700&h=700&crop=faces'}
                          alt={curStyle.name}
                          height='700'
                          width='700'
                        />
                      </div>
                    </Slide>
                  ) : (
                    <div
                      key={i}
                      className='text-center d-flex bg-secondary'
                      style={{
                        height: '700px',
                        width: '700px'
                      }}
                    >
                      <div className='fs-1 m-auto text-light'>OUT OF STOCK</div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div
              style={zoomIn ? { marginRight: '123px' } : {}}
              className='position-absolute row h-100 w-100'
            >
              <div className='col-2'>
                <div className='col p-3'>
                  {curSlide - 6 > 0 && curSlide !== 0 && (
                    <ButtonBack onClick={() => prevImg()} className='mCarouselStyle'>
                      <span>
                        <i className='fas fa-arrow-up text-light fs-3'></i>
                      </span>
                    </ButtonBack>
                  )}
                  {curStyle.photos.map(({ thumbnail_url }, i) => {
                    return (
                      thumbnail_url &&
                      i >= slideStart &&
                      i < slideEnd && (
                        <Dot
                          onClick={() => updateCurImg(i)}
                          className='mCarouselStyle'
                          slide={i}
                          key={i}
                        >
                          <div
                            className='bg-secondary my-2'
                            style={{
                              backgroundImage: `url(${
                                thumbnail_url.split('&w=')[0] + '&w=50&h=50&crop=faces'
                              })`,
                              height: '50px',
                              width: '50px',
                              opacity: curSlide === i ? '' : '50%',
                              border: curSlide === i && '2px solid black'
                            }}
                          ></div>
                        </Dot>
                      )
                    );
                  })}
                  {curStyle.photos.length - 6 > 0 && curSlide !== curStyle.photos.length - 1 && (
                    <ButtonNext onClick={() => nextImg()} className='mCarouselStyle'>
                      <span>
                        <i className='fas fa-arrow-down text-light fs-3'></i>
                      </span>
                    </ButtonNext>
                  )}
                </div>
              </div>
              <div className='col-10 d-flex justify-content-between align-items-center'>
                {curSlide !== 0 ? (
                  <ButtonBack onClick={() => prevImg()} className='mCarouselStyle'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                  </ButtonBack>
                ) : (
                  <div></div>
                )}

                {curSlide !== curStyle.photos.length - 1 ? (
                  <ButtonNext onClick={() => nextImg()} className='mCarouselStyle float-right'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                  </ButtonNext>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div
              style={{
                top: '0px',
                right: '0px',
                color: 'white',
                marginRight: '23px'
              }}
              className='position-absolute'
            >
              {!zoomIn && (
                <i
                  onClick={() => setZoomIn(true)}
                  style={{ cursor: 'zoom-in' }}
                  className='fs-3 bi bi-zoom-in'
                ></i>
              )}

              {zoomIn && (
                <i
                  onClick={() => setZoomIn(false)}
                  style={{ cursor: 'zoom-out' }}
                  className='fs-3 bi bi-zoom-out'
                ></i>
              )}
            </div>
          </div>
        </CarouselProvider>
      ) : (
        <CarouselProvider
          totalSlides={curStyle.photos.length}
          naturalSlideHeight={100}
          naturalSlideWidth={100}
          dragEnabled={false}
        >
          <div className='row'>
            <div className='col-3'>
              {curStyle.photos.map(({ thumbnail_url }, i) => {
                return (
                  thumbnail_url &&
                  i >= slideStart &&
                  i < slideEnd && (
                    <Dot
                      onClick={() => updateCurImg(i)}
                      className='mCarouselStyle'
                      slide={i}
                      key={i}
                    >
                      <div
                        className='bg-secondary my-2'
                        style={{
                          backgroundImage: `url(${
                            thumbnail_url.split('&w=')[0] + '&w=100&h=100&crop=faces'
                          })`,
                          height: '100px',
                          width: '100px',
                          opacity: curSlide === i ? '' : '50%',
                          border: curSlide === i && '2px solid black'
                        }}
                      ></div>
                    </Dot>
                  )
                );
              })}
            </div>
            <div className='col-9'>
              <div
                style={{
                  height: '700px',
                  width: '700px',
                  position: 'relative'
                }}
              >
                <div className='position-absolute row w-100 h-100'>
                  <Slider aria-label='product overview carousel'>
                    {curStyle.photos.map(({ url }, i) => {
                      return url ? (
                        <Slide index={i} key={i}>
                          <div
                            style={{
                              height: '700px',
                              width: '1000px'
                            }}
                          >
                            <img
                              src={url.split('&w=')[0] + '&w=1000&h=700&crop=faces'}
                              alt={curStyle.name}
                              height='700'
                              width='1000'
                            />
                          </div>
                        </Slide>
                      ) : (
                        <div
                          key={i}
                          className='text-center d-flex bg-secondary'
                          style={{
                            height: '700px',
                            width: '1000px'
                          }}
                        >
                          <div className='fs-1 m-auto text-light'>OUT OF STOCK</div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
                <div
                  style={zoomIn ? { marginRight: '123px' } : {}}
                  className='position-absolute row h-100 w-100'
                >
                  <div className='col-12 d-flex justify-content-between align-items-center'>
                    {curSlide !== 0 ? (
                      <ButtonBack onClick={() => prevImg()} className='mCarouselStyle'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                      </ButtonBack>
                    ) : (
                      <div></div>
                    )}

                    {curSlide !== curStyle.photos.length - 1 ? (
                      <ButtonNext onClick={() => nextImg()} className='mCarouselStyle float-right'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                      </ButtonNext>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    top: '0px',
                    right: '0px',
                    color: 'white',
                    marginRight: '23px'
                  }}
                  className='position-absolute'
                >
                  {!zoomIn && (
                    <i
                      onClick={() => setZoomIn(true)}
                      style={{ cursor: 'zoom-in' }}
                      className='fs-3 bi bi-zoom-in'
                    ></i>
                  )}

                  {zoomIn && (
                    <i
                      onClick={() => setZoomIn(false)}
                      style={{ cursor: 'zoom-out' }}
                      className='fs-3 bi bi-zoom-out'
                    ></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CarouselProvider>
      )}
    </div>
  );
};
