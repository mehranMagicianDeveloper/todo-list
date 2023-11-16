import React, { useState } from "react";
import { useSelector } from "react-redux";
import searchIcon from "./icon/search-icon.svg";
import darkIcon from "./icon/dark.svg";
import lightIcon from "./icon/light.svg";

function Navbar() {
  const [searchData, setSearchData] = useState("");
  const [isLightOrDark, setIsLightOrDark] = useState(false);

  function handleSearchClick() {
    setIsLightOrDark((preV) => !preV);
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
            onChange={(e) => setSearchData(e.value)}
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
