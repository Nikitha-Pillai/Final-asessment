import { useState } from "react";
//import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Home2 from "./components/Home2"
//import Add from "./components/Add";
import { Route, Routes } from "react-router-dom";
import { Mentor } from "./components/Mentor";
import { Wshop } from "./components/Wshop";
import PersonalityQuiz from "./components/PersonalityQuiz";
import ResultsPage from "./components/ResultsPage";
import LoginPage from "./components/Login";
import SignUpPage from "./components/Signup";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/web" element={<Wshop />} />
        <Route path="/quiz" element={<PersonalityQuiz />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
