import React, {useState} from 'react';

function SearchBar(props) {
const {handleChange, searchText} = props;

  return (
    <section className="search">
    <form>
      <input
        id="search-bar"
        type="search"
        className="form-control"
        placeholder="Search Superheros"
        autoFocus
        onChange={handleChange}
        value={searchText}
      />
    </form>
    </section >
  );
}

export default SearchBar;