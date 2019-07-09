//Searchbar
import React from "react";
import Icon from "../img/instagram-icon.png";
// import "./SearchBar.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;

}
.logo {
  margin-top: -20px;
}
.search {
  margin-left: 30px;
  
}

.searchButton {
  margin-left: -70px;
}

.LogoutButton {
  margin-right: -50px;
}
`;

const ClearUser = e => {
  window.localStorage.removeItem("user");
  window.location.reload();
};

const SearchBar = props => {
  return (
    <SearchContainer>
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
    </SearchContainer>
  );
};

export default SearchBar;
