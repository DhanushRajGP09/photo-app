import React from "react";

import { NavLink, Link, useNavigate } from "react-router-dom";

import "./Tabbar.css";

export default function Tabbar() {
  const navigate = useNavigate();

  return (
    <div className="Tabbar">
      <div className="photos-videos">
        <NavLink className="tab-line" to="/">
          <p className="photos">Photos</p>
        </NavLink>

        <NavLink className="tab-line" to="/videos">
          <p className="videos">Videos</p>
        </NavLink>
      </div>

      <NavLink className="tab-line" to="/favourites">
        <p className="favourites">favourites</p>
      </NavLink>
    </div>
  );
}
