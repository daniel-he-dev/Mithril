import React from 'react';

const SearchBar = ({ handleInput }) => {
  return (
    <input
      className='d-border-button d-search-bar'
      aria-label='Search answers'
      placeholder='Have a question? Search for Answers...'
      onChange={handleInput}
    ></input>
  );
};

export default SearchBar;
