import {Container, Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom' 

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">News App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">News</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    {/* <Nav.Link as={NavLink} to="/counter">Counter</Nav.Link> */}
                    </Nav>
                <Nav>
                    <Nav.Link>Signup</Nav.Link>
                    <Nav.Link>
                        Login
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
