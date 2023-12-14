
import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "../CartWidget.jsx/CartWidget"


const category = [
  {id: 1, name: "Arte", path:"arte", description:"libros de arte"},
  {id: 2, name: "Ficción", path:"ficción", description:"libros de ficción"},
  {id: 3, name: "Educativos", path:"educativos", description:"libros educativos"},
]

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
            <NavLink className={ ( { isActive } ) => isActive ? "btn btn-dark" : "btn" } to="/">Home</NavLink>
            {category.map(category => <NavLink key={category.id} className={ ( { isActive } ) => isActive ? "btn btn-dark" : "btn" } to={`/category/${category.path}`}>{category.name}</NavLink> )}


           
           
          
          </Nav>
          <p>Carro de compras</p>

          < Link className="btn" to="/cart">
            <CartWidget />
          </Link>
          
          

        

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  )
}
