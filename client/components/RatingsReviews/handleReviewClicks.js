import axios from 'axios';

export const helpfulClick = (e) => {
  let url = `/proxy/api/fec2/hratx/reviews/${e.target.id}/helpful`;
  axios.put(url).catch((err) => {
    console.log(err);
  });
};

export const reportClick = (e) => {
  let url = `/proxy/api/fec2/hratx/reviews/${e.target.id}/report`;
  axios.put(url).catch((err) => {
    console.log(err);
  });
};

export const submitReview = (review, setReviews, reviews) => {
  let url = 'proxy/api/fec2/hratx/reviews/';
  axios.post(url, review).catch((err) => {
    throw err;
  });
};
