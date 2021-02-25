import React, { useState, createContext } from 'react';
export const SortContext = createContext({
  sortMethod: 'relevance',
  setSortMethod: (method) => {}
});

export const SortProvider = ({ children }) => {
  const [sortMethod, setSortMethod] = useState('relevance');
  return (
    <SortContext.Provider value={{ sortMethod, setSortMethod }}>{children}</SortContext.Provider>
  );
};

export const sort = (reviews, method) => {
  const sortHelpful = (a, b) => b.helpfulness - a.helpfulness;
  const sortNewest = (a, b) => b.review_id - a.review_id;
  const sortRelevance = (a, b) => {
    return b.review_id / 1000 + b.helpfulness - (a.review_id / 1000 + a.helpfulness);
  };

  if (method === 'helpfulness') {
    return reviews.sort(sortHelpful);
  } else if (method === 'newest') {
    return reviews.sort(sortNewest);
  } else if (method === 'relevance') {
    return reviews.sort(sortRelevance);
  }
  return reviews;
};
