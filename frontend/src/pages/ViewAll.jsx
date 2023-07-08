import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../assets/css/table.scss';

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function PokeTable() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + search)
      .then((response) => {
        setPokemons([response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div class="text-center">
        <form onSubmit={handleSubmit}>
          <Form.Control type="text" value={search} id="inputPassword5" aria-describedby="passwordHelpBlock" onChange={handleChange} placeholder="Indique el nombre.."/>
          <Button variant="secondary" type="submit">Buscar</Button>
        </form>
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
  </div>  
  );
}

export default PokeTable; 



