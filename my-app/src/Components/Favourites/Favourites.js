import React from "react";
import "./Favourites.css";

import oval from "../../images/Oval.png";
import heart from "../../images/Path-2.png";
import videoimg from "../../images/video-rectangle.png";

export default function Favourites() {
  return (
    <div className="Favourites-div">
      <div className="Favourites-container-div">
        <div className="Favourites-container">
          <img src={videoimg}></img>
          <img src={oval} className="profile-pic"></img>
          <span className="username">Favourite</span>
          <img className="heart" src={heart}></img>
        </div>
        <div className="Favourites-container">
          <img src={videoimg}></img>
          <img src={oval} className="profile-pic"></img>
          <span className="username">Favourite</span>
          <img className="heart" src={heart}></img>
        </div>
      </div>
    </div>
  );
}
