import { useState } from "react";
//import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Home2 from "./components/Home2"
//import Add from "./components/Add";
import { Route, Routes } from "react-router-dom";
import { Mentor } from "./components/Mentor";
import { Wshop } from "./components/Wshop";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/web" element={<Wshop />} />
      </Routes>
    </>
  );
}

export default App;
