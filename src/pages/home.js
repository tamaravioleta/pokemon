import { useEffect, useState } from "react";
import Axios from "axios";
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [pokemonName, setPokemonName] = useState("");
  const [catchPokemon, setCatchPokemon] = useState([]);
  const [pokemonPil, setPokemonPil] = useState(false);
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    height: "",
  });

  // ======== LOCAL STORAGE =========
  // read local storage on firstload
  useEffect(() => {
    if (localStorage.getItem("tangkap")) {
      setCatchPokemon(JSON.parse(localStorage.getItem("tangkap")));
    }
  }, []);
  // getItem u/mendapatkan data
  // menguraikan sesuatu yg diterima sbg JSON

  useEffect(() => {
    localStorage.setItem("tangkap", JSON.stringify(catchPokemon));
  }, [catchPokemon]);
  // (nama item, nilai) setItem u/ menambahkan data
  // stringify mengubah objek javascript menjadi teks JSONdan menyimpan teks JSON dalam sebuah string (membuat string JSON dari objek / array)

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);
        setPokemon({
          id: response.data.id,
          name: pokemonName,
          img: response.data.sprites.front_default,
          type: response.data.types[0].type.name,
          height: response.data.height,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[3].base_stat,
        });
        setPokemonPil(true);
      })
      .catch((error) => {
        alert(
          "NOT FOUND - try to write another pokemon & Make sure that you write the pokemon in lowercase"
        );
      });
  };

  const pokemonc = () => {
    if (catchPokemon.find((item) => item.id === pokemon.id)) {
      alert("sudah pernah ditangkap");
    } else {
      if (catchPokemon.length === 6) {
        alert("Jumlah Pokemonmu sudah mencapai 6");
      } else {
        setCatchPokemon([...catchPokemon, pokemon]);
        alert("berhasil ditangkap");
      }
    }
  };

  const clearPokemon = () => {
    setPokemonPil(false);
  };

  return (
    <div className="App">
      <div className="Title">
        <h1>
          <u>List Form Pokemon</u>{" "}
        </h1>
        {/* // ======== BACKPACK ========= */}
        <div>
          <Link to="/backpack">
            <img className="backpack" src="bag.png" />
          </Link>
        </div>

        <input
          type="text"
          style={{ color: "black" }}
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>

      <div className="DisplayPokemon">
        {!pokemonPil ? (
          <h1>Search Your Pokemon!</h1>
        ) : (
          <>
            <h1>
              {pokemon.id} - {pokemon.name}
            </h1>
            <img src={pokemon.img} />
            <h3>Type: {pokemon.type}</h3>
            <h3>Height: {pokemon.height}</h3>
            <h3>Hp: {pokemon.hp}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.defense}</h3>
            <h3>Speed: {pokemon.speed}</h3>

            <div>
              <button
                type="button"
                onClick={() => pokemonc(pokemon)}
                class="btn btn-dark"
              >
                Catch {pokemon.name}
              </button>
              <button type="button" onClick={clearPokemon} class="btn btn-dark">
                Clear {pokemon.name}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
