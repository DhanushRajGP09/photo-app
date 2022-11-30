import React, { useEffect, useState } from "react";
import "./header.css";
import mask from "../../images/Mask.png";
import logo from "../../images/Photo-logo.png";
import {
  addSearch,
  fetchAsyncSearch,
  getSearch,
} from "../../features/Photo/PhotoSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const data = useSelector(getSearch);
  console.log(data);

  return (
    <div className="header-main">
      <div className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="header-inside">
          <div className="discover-the-worlds">
            Discover the world’s best photos & videos
            <span className="best-memories-online">Best memories online</span>
          </div>
          <div className="search-bar">
            <input
              className="search-input"
              placeholder="Search photos, videos, artists"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            ></input>
            <button
              className="search-button"
              onClick={() => {
                dispatch(fetchAsyncSearch(inputValue));
              }}
            >
              {" "}
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
