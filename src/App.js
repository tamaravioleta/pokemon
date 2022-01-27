import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Backpack from "./pages/backpack";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

function App({ pokemons }) {
  console.log(pokemons)
  return (
    <div className="App">
      {JSON.stringify(pokemons)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backpack" element={<Backpack />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons
})

export default connect(mapStateToProps)(App)
