import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import AlertForm from "./Alert";

const Formulario = ({ handleUser, setFormErrors }) => {
  const [form, setForm] = useState({
    correo: "",
    descripcion: "",    
  });

  const enviarFormulario = (event) => {
    event.preventDefault();

    const { correo, descripcion } = form;
    const id = Date.now();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!correo || !descripcion) {
        setFormErrors("Todos los campos son obligatorios");
        return;
    }
    
    if (!emailRegex.test(correo)) {
        setFormErrors(
            "Verifica que el correo sea válido y no contenga espacios en blanco."
        );
        return;
    }
    
    const descripcionRegex = /^.{5,}$/;
    if (!descripcionRegex.test(descripcion)) {
      setFormErrors("la descripcion debe tener al menos 5 caracteres.");
      return;
    }
    
    const formData = {
      correo,
      descripcion,
    };

    handleUser(formData);
    setForm({
      correo: "",
      descripcion: "",
    });
    setFormErrors("Contacto realizado exitosamente");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <Form onSubmit={enviarFormulario}>
        <Form.Group className="mb-3" controlId="correo">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            name="correo"
            type="email"
            placeholder="name@example.com"
            value={form.correo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción</Form.Label>  
          <Form.Control
            name="descripcion"
            type="text"
            placeholder="En que podemos ayudarte"
            value={form.descripcion}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="danger" type="submit" className="mx-auto">
          Enviar
        </Button>
      </Form>
    </>
  );
}

Formulario.propTypes = {
  handleUser: PropTypes.func.isRequired,
  setFormErrors: PropTypes.func.isRequired,
};

export default Formulario;
