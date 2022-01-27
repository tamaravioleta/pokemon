import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Backpack from "./pages/backpack";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backpack" element={<Backpack />} />
      </Routes>
    </div>
  );
}
