
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from "../CartWidget.jsx/CartWidget"
import { Link } from 'react-router-dom';



export const NavBar = () => {
  return (

    
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#">ReadingBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="btn" to="/">Home</Link>
            <Link className="btn" to="/category">Arte</Link>
            <Link className="btn" to="/category">Ficción</Link>
            <Link className="btn" to="/category">Educativos</Link>
            
           
           
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

          < Link className="btn" to="">
            <CartWidget />
          </Link>
          
          

        

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}
