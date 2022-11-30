import React from "react";
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

  return (
    <div className="App">
      <div id="navbar">
        <div>
          <img src={navimg} className="nav-img"></img>
        </div>
        <div className="nav-search-bar">
          <input
            className="nav-search-input"
            placeholder="Search photos, videos, artists"
          ></input>
          <button className="nav-search-button"> SEARCH</button>
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
