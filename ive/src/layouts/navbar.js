import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from "react-router-dom";

const NavBarIVE = () => {
    return (
        <>
        <Navbar  expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">IVE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Nav.Link as={Link} to="/Users">Usuarios</Nav.Link>
              <Nav.Link as={Link} to="/Products">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      <section>
      <Outlet></Outlet>
      </section>

      </>
       
    )
}
export default NavBarIVE