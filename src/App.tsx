import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Navbar from "./component/Navbar";
import CarouselInfo from "./component/Carousel";

const App = () => {
  return (
    <Router>
      <div className="z-10 bg-primary bg-opacity-90 relative">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>

      <CarouselInfo carouselData={["lkd", "wa", "tw"]} />
    </Router>
  );
};

export default App;
