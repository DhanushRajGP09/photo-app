import React from "react";
import "./Photolarge.css";
import largeimg from "../../images/image-large.png";
import emptyheartlarge from "../../images/emptyheartlarge.png";
import filledheartlarge from "../../images/Filledheartlarge.png";
import zoomin from "../../images/zoom-positive.png";
import zoomout from "../../images/zoom-negative.png";
import profilepiclarge from "../../images/profilepiclarge.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFav,
  addToheart,
  getImagelarge,
  getLarge,
  getLiked,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../features/Photo/PhotoSlice";

export default function Photolarge() {
  const [heartpressed, setHeartpressed] = useState(null);
  const image = useSelector(getLarge);
  const dispatch = useDispatch();
  console.log(image);
  const imagelink = image && image?.src && image?.src?.large;
  const getlikeddata = useSelector(getLiked);

  return (
    <>
      <div className="photo-large-div">
        <img src={imagelink} className="photo-large"></img>

        <div className="photo-large-div-container">
          <span className="photo-desc">{image && image?.alt}</span>
          <img
            className="heart-large-img"
            src={
              getlikeddata?.includes(image?.id)
                ? filledheartlarge
                : emptyheartlarge
            }
            onClick={() => {
              if (!getlikeddata?.includes(image.id)) {
                dispatch(addToheart(image?.id));
                setHeartpressed(image?.id);
                dispatch(addToFav(image));
              } else {
                dispatch(removeOneFromFav({ id: image?.id }));
                dispatch(removeOneFromLiked(image?.id));
              }
            }}
          ></img>
          <div className="zoom">
            <div className="zoom-in">
              <img src={zoomin}></img>
            </div>
            <div className="zoom-out">
              <img src={zoomout}></img>
            </div>
          </div>
          <div className="profile-name-image-container-large">
            <img src={profilepiclarge}></img>
            <span className="profile-large-name">
              {image && image?.photographer}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
