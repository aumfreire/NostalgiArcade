// /src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";

import About from "./pages/About";

import DinoGame from "./components/Games/DinoGame";

import SpaceInvadersGame from "./components/Games/SpaceInvaders";
import AsteroidsGame from "./components/Games/Asteroids";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CategoriesBar from "./components/CategoriesBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/games/spaceinvaders" element={<SpaceInvadersGame />} />
          <Route path="/games/asteroids" element={<AsteroidsGame />} />
          <Route path="/About" element={<About />} />
          <Route path="/games/dinointerface" element={<DinoGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
