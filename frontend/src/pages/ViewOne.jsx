import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

function PokeSearch() {
    // Definir una referencia al campo de texto del formulario
    const inputRef = useRef();

    // Definir una función para manejar el envío del formulario
    const handleSubmit = (event) => {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();
        // Obtener el valor del campo de texto
        const name = inputRef.current.value;
        // Redirigir a la ruta que muestra los detalles del pokemon buscado
        history.push(`/pokemon/${name}`);
    };

    // Obtener el objeto history de React Router
    const history = useNavigate();

    // Renderizar el componente
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