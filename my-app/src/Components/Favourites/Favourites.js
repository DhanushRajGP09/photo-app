import React from "react";
import "./Favourites.css";

import oval from "../../images/Oval.png";
import heart from "../../images/Path.png";
import videoimg from "../../images/video-rectangle.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getFav,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../features/Photo/PhotoSlice";

export default function Favourites() {
  const favdata = useSelector(getFav);
  const dispatch = useDispatch();
  return (
    <div className="Favourites-div">
      <div className="Favourites-container-div">
        <div className="Favourites-container">
          <img src={videoimg}></img>
          <img src={oval} className="profile-pic"></img>
          <span className="username">Favourite</span>
          <img
            className="heart"
            src={heart}
            onClick={() => {
              dispatch(removeOneFromFav({}));
              dispatch(removeOneFromLiked());
            }}
          ></img>
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
