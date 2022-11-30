import React, { useEffect, useState } from "react";
import "./Videos.css";

import oval from "../../images/Oval.png";
import heart from "../../images/Path-2.png";
import videoimg from "../../images/video-rectangle.png";
import filledheart from "../../images/Path.png";
import play from "../../images/play.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  addToheart,
  getLiked,
  getRecents,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../features/Photo/PhotoSlice";
export default function Videos() {
  const [unfilled, setUnfilled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="videos-div">
      <div className="videos-container-div">
        <div className="videos-container">
          <img src={videoimg}></img>
          <img
            src={play}
            className="play-button"
            onClick={() => {
              navigate("/Videolarge");
            }}
          ></img>
          <img src={oval} className="profile-pic"></img>
          <span className="username">abcd</span>

          <img className="heart" src={unfilled ? heart : filledheart}></img>
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
