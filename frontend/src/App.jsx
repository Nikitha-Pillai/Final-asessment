import { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
import Add from "./components/Add";
import Cal from "./components/Cal";

function App() {
  return (
    <> <DndProvider backend={HTML5Backend}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/web" element={<Wshop />} />
        <Route path="/quiz" element={<PersonalityQuiz />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/add" element={<Add />} />
        <Route path="/cal" element={<Cal />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      </DndProvider>
    </>
  );
}

export default App;
