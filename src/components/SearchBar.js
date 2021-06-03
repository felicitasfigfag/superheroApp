import React from 'react';

function SearchBar({handleChange, searchText}) {
//props from heroListing
  return (
    <section className="search">
    <form>
      <input
        id="search-bar"
        type="text"
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
