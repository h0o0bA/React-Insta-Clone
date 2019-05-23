//Searchbar
import React from 'react';

 const SearchBar = props => {
  return(
    <div className="search-container">
      <div className="logo">
        <img src="../img/instagram-icon.png" alt="instagram camera"/>
      </div>
      <div className="search">
        <input type="text" />
      </div>
    </div>
  )
}

 export default SearchBar;