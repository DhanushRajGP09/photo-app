import React from "react";
import "./Videos.css";

import oval from "../../images/Oval.png";
import heart from "../../images/Path-2.png";
import videoimg from "../../images/video-rectangle.png";
export default function Photos() {
  return (
    <div className="videos-div">
      <div className="videos-container-div">
        <div className="videos-container">
          <img src={videoimg}></img>
          <img src={oval} className="profile-pic"></img>
          <span className="username">abcd</span>
          <img className="heart" src={heart}></img>
        </div>
        <div className="videos-container">
          <img src={videoimg}></img>
          <img src={oval} className="profile-pic"></img>
          <span className="username">abcd</span>
          <img className="heart" src={heart}></img>
        </div>
      </div>
    </div>
  );
}
