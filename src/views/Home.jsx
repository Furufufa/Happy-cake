import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <strong>Happy Cake</strong> 
      </h1>
      <h6>El lugar de los pasteles felices</h6>
      <span className="display-1" role="img" aria-label="Pastel de cumpleaños">🎂</span>
    </Container>
  );
};
export default Home;   