import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Formulario from '../components/Form'; 

const Contact = () => {
  const [formErrors, setFormErrors] = useState(null);

  const handleUser = (formData) => {
    // Lógica para manejar los datos del formulario
    console.log(formData);
  };

  return (
    <Container className="text-center">
      <h1 className="pt-5">Cuentanos, ¿en que te podemos ayudar? </h1>
      <Formulario handleUser={handleUser} setFormErrors={setFormErrors} />
      {/* Aquí puedes mostrar los errores del formulario si es necesario */}
      {formErrors && <p className="error">{formErrors}</p>}
    </Container>
  );
};

export default Contact;
