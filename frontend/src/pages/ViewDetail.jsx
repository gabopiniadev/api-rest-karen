import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

function PokeDetail() {
    // Definir el estado del componente
    const [pokemon, setPokemon] = useState(null);

    // Obtener el nombre del pokemon desde la ruta
    const { name } = useParams();

    // Hacer la petición a la API cuando el componente se monta o el nombre cambia
    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                // Guardar los datos en el estado
                setPokemon(response.data);
            })
            .catch((error) => {
                // Manejar el error
                console.error(error);
            });
    }, [name]);

    return (
        <div>
            {pokemon ? (
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={pokemon.sprites.front_default} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                            <strong>Peso:</strong> {pokemon.weight} kg
                        </Card.Text>
                        <Card.Text>
                            <strong>Altura:</strong> {pokemon.height} m
                        </Card.Text>
                        <Card.Text>
                            <strong>Habilidades:</strong>{" "}
                            {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
}

export default PokeDetail;