
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget.jsx/CartWidget"


export const NavBar = () => {
  return (

    
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">ReadingBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Top 10</Nav.Link>
            <Nav.Link href="#action2">Ficción</Nav.Link>
            <Nav.Link href="#action2">Educativos</Nav.Link>
            <Nav.Link href="#action2">Novedades</Nav.Link>
            <Nav.Link href="#action2">Contacto</Nav.Link>
           
           
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          
          </Nav>
          <p>Carro de compras</p>

          
          <CartWidget />
          

        

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}
