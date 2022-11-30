import React from "react";
import "./Photolarge.css";
import largeimg from "../../images/image-large.png";
import emptyheartlarge from "../../images/emptyheartlarge.png";
import zoomin from "../../images/zoom-positive.png";
import zoomout from "../../images/zoom-negative.png";
import profilepiclarge from "../../images/profilepiclarge.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecent,
  fetchAsyncPhoto,
  getLarge,
  getRecents,
} from "../../features/Photo/PhotoSlice";

export default function Photolarge() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(getRecents);
  console.log(data);

  return (
    <>
      {data && (
        <div className="photo-large-div">
          <img
            src={data && data.src && data.src.large}
            className="photo-large"
          ></img>

          <div className="photo-large-div-container">
            <span className="photo-desc">{data.alt}</span>
            <img className="heart-large-img" src={emptyheartlarge}></img>
            <div className="zoom">
              <div className="zoom-in">
                <img src={zoomin}></img>
              </div>
              <div className="zoom-out">
                <img src={zoomout}></img>
              </div>
            </div>
            <div className="profile-name-image-container-large">
              <img src={data.photographer_id}></img>
              <span className="profile-large-name">{data.photographer}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
