import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Tabbar.css";

export default function Tabbar() {
  const navigate = useNavigate();
  return (
    <div className="Tabbar">
      <div className="photos-videos">
        <div
          className="photos"
          onClick={() => {
            navigate("/");
          }}
        >
          Photos
        </div>

        <div
          className="videos"
          onClick={() => {
            navigate("/videos");
          }}
        >
          Videos
        </div>
      </div>
      <div
        className="favourites"
        onClick={() => {
          navigate("/favourites");
        }}
      >
        Favourites
      </div>
    </div>
  );
}
