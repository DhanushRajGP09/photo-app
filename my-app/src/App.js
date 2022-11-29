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
import Favourites from "./Components/Favourites/Favourites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Tabbar />
        <Routes>
          <Route path="/" exact element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
