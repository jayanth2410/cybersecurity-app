// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Courses from "./components/Courses"; // Import the new Courses component
import Navbar from "./components/nav";

function App() {
  return (
    <Router>
      <div className="nav-bar">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/courses/basics" />} />
          <Route path="/courses/basics" element={<Courses />} />
          <Route path="/courses/intermediate" element={<Courses />} />
          <Route path="/courses/advance" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
