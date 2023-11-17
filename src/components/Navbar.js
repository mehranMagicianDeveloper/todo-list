import React, { useState } from "react";
import searchIcon from "./icon/search-icon.svg";
import darkIcon from "./icon/dark.svg";
import lightIcon from "./icon/light.svg";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");
  const [isLightOrDark, setIsLightOrDark] = useState(false);

  function handleSearchClick() {
    dispatch(setSearchData(searchData));
  }

  function handleSearchChange(event) {
    const value = event.target.value;
    setSearchData(value);
    dispatch(setSearchData(searchData));
  }

  return (
    <nav className="navbar">
      <h1 className="navbar-title">TODO LIST</h1>
      <div className="searchbar-container">
        <div className="searchbar">
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={searchData}
            onChange={handleSearchChange}
          />
          <img
            className="search-icon"
            src={searchIcon}
            alt="search-icon"
            onClick={handleSearchClick}
          />
        </div>
        <img
          className="ligh-dark-icon"
          src={isLightOrDark ? lightIcon : darkIcon}
          alt="dark-icon"
        />
      </div>
    </nav>
  );
}

export default Navbar;
