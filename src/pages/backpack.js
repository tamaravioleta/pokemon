import "./home.js";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { View } from "./View.js";
import "./home.css";
import { Link } from "react-router-dom";

function Backpack() {
  const getDatafromLS = () => {
    const data = localStorage.getItem("tangkap");
    if (data) {
      return setPokemonTampil(JSON.parse(data));
    } else {
      return setPokemonTampil([]);
    }
  };

  const [pokemonTampil, setPokemonTampil] = useState([]);
  const [catchPokemon, setCatchPokemon] = useState([]);

  useEffect(() => {
    getDatafromLS();
  }, []);

  // function pokemonShow(e){
  //   setPokemonTampil(e.target.value);
  // }X

  // const List = ({ list, onRemove }) => (
  //   <ul>
  //     {list.map((item) => (
  //       <Item key={item.id} item={item} onRemove={onRemove} />
  //     ))}
  //   </ul>
  // );

  // const Backpack = ({ pokemons }) => (
  //   <ul>
  //     {pokemons.map((satuPokemon) => (
  //       <pokemonTampil key={satuPokemon.id.toString()} />
  //     ))}
  //   </ul>
  // );

  // const listPokemon = pokemonTampil.map((satuPokemon) => (
  //   <li key={satuPokemon.id.toString()}>{satuPokemon}</li>
  // ));

  // useEffect(() => {
  //   if (localStorage.getItem("tangkap")) {
  //     setPokemonTampil(localStorage.getItem("tangkap"));
  // let pokemon = localStorage.getItem("tangkap");
  // document.write(pokemon);
  //   }
  // }, []);

  // const pokemons = () => {
  // setPokemonTampil(localStorage.getItem("tangkap"));
  // };

  // useEffect(() => {
  //   const data = localStorage.getItem("tangkap");
  //   if (data) {
  //     setPokemonTampil(JSON.parse(data));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tangkap", JSON.stringify(pokemonTampil));
  // }); {/* {localStorage.getItem("tangkap")} */}

  return (
    <div className="Backpacks">
      {/* <Link to="/home">
        <button type="button" class="position-absolute top-0 start-0">
          Back
        </button>
      </Link> */}
      <div
        className="Titles"
        style={{
          height: "80px",
          padding: "0px",
          margin: "1px",
        }}
      >
        <h2>
          {" "}
          <u>BAG ITEM</u>
        </h2>
      </div>

      <div className="view-container">
        {pokemonTampil && pokemonTampil.length > 0 && (
          <View pokemonTampil={pokemonTampil} />
        )}
        {pokemonTampil && pokemonTampil.length < 1 && (
          <div>No Pokemons are added yet</div>
        )}
      </div>

      {/* {pokemonTampil} */}

      {/* <ul>
        {pokemonTampil.map((satuPokemon) => (
          <li key={satuPokemon.id.toString()}>{satuPokemon}</li>
        ))}
      </ul> */}

      {/* <listPokemon pokemons={this.state.pokemonTampil} /> */}
      {/* <ul>
        {tangkap.map((pokemons) => (
          <Pokemon key={pokemons.id} pokemon={pokemons} />
        ))}
      </ul> */}
      {/* map: menampilkan data 1 per satu */}
    </div>
  );
}

export default Backpack;

{
  /* <Card>
<Card.Img src="https://id.pinterest.com/pin/633740978838124001/" />
<Card.Body>
  <Card.Title>Card Example</Card.Title>
  <Card.Text>This is an example of cards</Card.Text>
  <Button variant="primary">Read More</Button>
</Card.Body>
</Card> */
}
