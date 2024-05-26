import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-danger text-white">
            <Container className='d-flex justify-content-between align-items-center'>
                <ul className="navbar-nav d-flex align-items-center">
                    <li className="nav-item me-3">
                        <Link to="/" className='nav-link text-white ms-3 text-decoration-none'>
                            🏠 Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link text-white ms-3 text-decoration-none">
                            📧 Contacto
                        </Link>
                    </li>
                    <li className="nav-item navbar-logo">
                        <Link to="/" className='nav-link text-white'>
                            Happy Cake 🍰
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar;
