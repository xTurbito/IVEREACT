import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBarIVE = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            IVE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Users">
                Usuarios
              </Nav.Link>
              <Nav.Link as={Link} to="/Products">
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/Departaments">
                Departamentos
              </Nav.Link>
              <Nav.Link as={Link} to="/Clients">
               Clientes
              </Nav.Link>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Reportes"
                menuVariant="dark"
              >
                <NavDropdown.Item as={Link}  to="/CatalogoProducts">Productos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default NavBarIVE;
