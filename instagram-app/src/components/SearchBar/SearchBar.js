//Searchbar
import React from "react";
import Icon from "../img/instagram-icon.png";
import "./SearchBar.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ClearUser = e => {
  window.localStorage.removeItem("user");
  window.location.reload();
};

const SearchBar = props => {
  return (
    <div className="search-container">
      <div className="logo">
        <img src={Icon} alt="instagram icon" />
      </div>
      <form className="search">
        <input
          type="text"
          placeholder="search"
          value={props.search}
          onChange={props.change}
        />
      </form>
      <div className="searchButton">
        <Button color="secondary" onSubmit={props.searchGram}>
          Search
        </Button>
      </div>
      <div className="LogoutButton">
        <Button color="danger" onClick={ClearUser}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
