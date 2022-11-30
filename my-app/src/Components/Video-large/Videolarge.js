import React, { useState } from "react";
import "./Videolarge.css";
import largeimg from "../../images/image-large.png";
import emptyheartlarge from "../../images/emptyheartlarge.png";

import profilepiclarge from "../../images/profilepiclarge.png";
import playlarge from "../../images/Playlarge.png";
import playiconbelow from "../../images/playiconbelow.png";
import fullscreen from "../../images/Fullscreenicon.png";
import pauseicon from "../../images/Pause-icon.png";
import slidericon from "../../images/slider-icon.png";
export default function Videolarge() {
  const [play, setPlay] = useState(false);
  function handlePlay() {
    setPlay(!play);
  }

  return (
    <div className="Video-large-div">
      <img src={largeimg}></img>
      <div className="Video-large-div-container">
        <span className="Video-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <img className="Video-heart-large-img" src={emptyheartlarge}></img>
        <div className="profile-name-image-container-large">
          <img src={profilepiclarge}></img>
          <span className="profile-large-name">
            profilelargenameaaaaaaaaaaaaaaa
          </span>
        </div>
        <img className="play-button-large" src={playlarge}></img>
        <img
          className="play-icon-below"
          src={play ? pauseicon : playiconbelow}
          onClick={() => {
            handlePlay();
          }}
        ></img>
        <div className="video-slider"></div>
        <div className="fullscreen-icon">
          <img src={fullscreen}></img>
        </div>
      </div>
    </div>
  );
}
