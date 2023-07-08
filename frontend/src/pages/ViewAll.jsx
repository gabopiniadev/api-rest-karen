import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/table.scss';

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function PokeTable() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=30")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>URL</th>
          <th>Visualizar</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{pokemon.name}</td>
            <td>{pokemon.url}</td>
            <td><a name="" id="" class="btn btn-primary" href={pokemon.url} role="button">Ver</a></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PokeTable;