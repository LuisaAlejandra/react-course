import "./App.css";
import React from "react";
import Header from "./Header";
import TodoComponent from "./TodoComponent";
import About from "./About";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<TodoComponent />} ></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
    </>
  );
}


export default App;
