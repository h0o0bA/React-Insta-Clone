//Searchbar
import React from 'react';
import Icon from '../img/instagram-icon.png';
import './SearchBar.css';
import { Button } from 'reactstrap';


const SearchBar = props => {
  return(
    <div className="search-container">
      <div className="logo">
        <img src={Icon} alt="instagram icon"/>
      </div>
      <form className="search">
        <input type="text" placeholder="search" value={props.search} onChange={props.change} />
      </form>
      <div className="searchButton">
        <button onSubmit={props.searchGram}>Search</button>
      </div>
    </div>
  )
}

export default SearchBar;