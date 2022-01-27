import React from "react";
import {
  Card,
  CardGroup,
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import "./home.css";

export const View = ({ pokemonTampil }) => {
  console.log(pokemonTampil);

  if (pokemonTampil && pokemonTampil.length > 0) {
    return pokemonTampil?.map((satuPokemon) => (
      <div className="container">
        <Card className="childs">
          <Card.Body className="bodycard">
            <Card.Title className="titlepokemon">
              <Card.Title className="idpokemon">{satuPokemon.id}</Card.Title>
              <Card.Title className="typepokemon">
                {satuPokemon.type}
              </Card.Title>
            </Card.Title>
            <Card.Img className="cardimg" src={satuPokemon.img} />
            <Card.Text className="cardtext">
              <div className="nameheight">
                <Table striped bordered>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Name: </b> {satuPokemon.name}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Height: </b> {satuPokemon.height}cm{" "}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="sisa">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th className="hp">HP</th>
                      <th className="speed">Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="isi">
                        <b>{satuPokemon.hp}</b>
                      </td>
                      <td>{satuPokemon.speed}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th className="att">Attack</th>
                      <th className="def">Deffense</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{satuPokemon.attack}</td>
                      <td>{satuPokemon.defense}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    ));
  } else {
    {
      pokemonTampil && pokemonTampil.length < 1 && (
        <div>No Pokemons are added yet</div>
      );
    }
  }

  {
    /* <tr className="tables" key={satuPokemon.id}>
        <td className="tab">{satuPokemon.id}</td>
        <td className="tab">{satuPokemon.name}</td>
        <td className="tab">{satuPokemon.type}</td>
        <td className="tab">{satuPokemon.attack}</td>
        <td className="tab">{satuPokemon.defense}</td>
        <td className="tab">{satuPokemon.height}</td>
        <td className="tab">{satuPokemon.hp}</td>
        <td className="tab">{satuPokemon.speed}</td>
        <img style={{ paddingLeft: "45px" }} src={satuPokemon.img}></img>
        {/* <td>
        {" "}
        <img className="imgs" src="{satuPokemon.img}"></img>{" "}
      </td> */
  }
  {
    /* </tr> */
  }
  {
    /* <ListGroup className="list-group-flush">
            <ListGroupItem>asa</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup> */
  }
  {
    /* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */
  }
};
