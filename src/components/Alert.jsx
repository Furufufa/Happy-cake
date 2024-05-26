import Alert from "react-bootstrap/Alert";

function AlertForm({ formErrors }) {
  return (
    <>
      {formErrors && (
        <Alert
          variant={
            formErrors === "Contacto realizado exitosamente"
              ? "danger"
              : "danger"
          }
        >
          {formErrors}
        </Alert>
      )}
    </>
  );
}

export default AlertForm;