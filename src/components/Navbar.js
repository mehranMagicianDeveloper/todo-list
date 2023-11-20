import React, { useState } from "react";
import searchIcon from "./icon/search-icon.svg";
import darkIcon from "./icon/dark.svg";
import lightIcon from "./icon/light.svg";
import { useDispatch } from "react-redux";
import { setSearchData } from "../features/todo/todosSlice";

function Navbar() {
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState("");
  const [isLightOrDark, setIsLightOrDark] = useState(false);

  function handleSearchClick() {
    dispatch(setSearchData(inputData));
  }

  function handleSearchChange(event) {
    const value = event.target.value;
    setInputData(value);
    dispatch(setSearchData(value));
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
            value={inputData}
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
