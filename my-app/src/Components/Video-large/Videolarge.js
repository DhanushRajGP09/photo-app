import React, { useEffect, useState } from "react";
import "./Videolarge.css";
import largeimg from "../../images/image-large.png";
import emptyheartlarge from "../../images/emptyheartlarge.png";

import profilepiclarge from "../../images/profilepiclarge.png";
import playlarge from "../../images/Playlarge.png";
import playiconbelow from "../../images/playiconbelow.png";
import fullscreen from "../../images/Fullscreenicon.png";
import pauseicon from "../../images/Pause-icon.png";
import slidericon from "../../images/slider-icon.png";
import { useSelector } from "react-redux";
import { getLarge } from "../../features/Photo/PhotoSlice";
import ReactPlayer from "react-player";
export default function Videolarge() {
  const [play, setPlay] = useState(false);
  const [data, setData] = useState({});
  function handlePlay() {
    setPlay(!play);
  }
  const video = useSelector(getLarge);
  console.log(video);

  const videolink = video && video?.video_files?.[0]?.link;
  const video_desc = video && video?.url;
  const description = video_desc?.split("/");

  useEffect(() => {
    setData(video);
  }, []);

  return (
    <>
      {video && (
        <div className="Video-large-div">
          <ReactPlayer
            controls
            url={video && videolink}
            height="522px"
            width="940px"
          />
          <div className="Video-large-div-container">
            <span className="Video-desc">{video && description?.[4]}</span>
            <img src={emptyheartlarge} className="Video-heart-large-img"></img>
            <div className="profile-name-image-container-large">
              <img src={profilepiclarge}></img>
              <span className="profile-large-name">
                {video ? video?.user?.name : ""}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
