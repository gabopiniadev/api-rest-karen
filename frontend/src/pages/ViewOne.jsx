import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import '../assets/css/viewone.scss';

function PokeSearch() {
    const inputRef = useRef();

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const name = inputRef.current.value;

        history(`https://pokeapi.co/api/v2/pokemon/${name}`);
    };

    
    const history = useNavigate();

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Buscar pokemon por nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el nombre" ref={inputRef} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Buscar
            </Button>
        </Form>
    );
}

export default PokeSearch;