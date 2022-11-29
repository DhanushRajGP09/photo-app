import React from "react";
import "./header.css";
import mask from "../../images/Mask.png";
import logo from "../../images/Photo-logo.png";

const Header = () => {
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
            ></input>
            <button className="search-button"> SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
