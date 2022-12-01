import React, { useEffect, useState } from "react";
import "./Videolarge.css";
import largeimg from "../../images/image-large.png";

import profilepiclarge from "../../images/profilepiclarge.png";
import playlarge from "../../images/Playlarge.png";
import playiconbelow from "../../images/playiconbelow.png";
import fullscreen from "../../images/Fullscreenicon.png";
import emptyheartlarge from "../../images/emptyheartlarge.png";
import filledheartlarge from "../../images/Filledheartlarge.png";
import pauseicon from "../../images/Pause-icon.png";
import slidericon from "../../images/slider-icon.png";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../images/arrow back.png";
import {
  addToFav,
  addToheart,
  getLarge,
  getLiked,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../features/Photo/PhotoSlice";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
export default function Videolarge() {
  const [play, setPlay] = useState(false);
  const [data, setData] = useState({});
  function handlePlay() {
    setPlay(!play);
  }
  const video = useSelector(getLarge);
  console.log(video);
  const [heartpressed, setHeartpressed] = useState(null);
  const videolink = video && video?.video_files?.[0]?.link;
  const video_desc = video && video?.url;
  const description = video_desc?.split("/");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getlikeddata = useSelector(getLiked);
  useEffect(() => {
    setData(video);
  }, []);

  return (
    <>
      {video && (
        <div className="Video-large-div">
          <div className="react-player">
            <ReactPlayer
              controls
              url={video && videolink}
              height="100%"
              width="100%"
            />
          </div>

          <div className="Video-large-div-container">
            <img
              src={arrow}
              className="Video-back"
              onClick={() => {
                navigate("/videos");
              }}
            ></img>
            <span className="Video-desc">{video && description?.[4]}</span>
            <img
              className="Video-heart-large-img"
              src={
                getlikeddata?.includes(video?.id)
                  ? filledheartlarge
                  : emptyheartlarge
              }
              onClick={() => {
                if (!getlikeddata?.includes(video.id)) {
                  dispatch(addToheart(video?.id));
                  setHeartpressed(video?.id);
                  dispatch(addToFav(video));
                } else {
                  dispatch(removeOneFromFav({ id: video?.id }));
                  dispatch(removeOneFromLiked(video?.id));
                }
              }}
            ></img>
            <div className="Video-profile-name-image-container-large">
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
