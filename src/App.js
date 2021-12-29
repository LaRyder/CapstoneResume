import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import LeapExperience from "./pages/leapExperience/LeapExperience";
import NavBanner from "./NavBanner/NavBanner";

function App() {
  return (
    <BrowserRouter>
      <NavBanner />
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="LeapExperience" element={<LeapExperience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;