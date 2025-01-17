import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Add from "./components/Add";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
