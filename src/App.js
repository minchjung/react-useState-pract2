import React, {useState} from 'react';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './Detail.js';
import Main from './Main.js';
import data from './data.js';
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCommentDots, faSave } from '@fortawesome/free-solid-svg-icons'


const Navcomp = ()=>{
  return (
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Proto Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link > <Link to='/'>Home</Link> </Nav.Link>
        <Nav.Link > <Link to='/detail'>Detail</Link> </Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  )
}

function App() {
  let [shoes, setShoes] = useState(data);
  return (
  <div className="App">
    <Navcomp />
    <Switch>
      <Route exact path='/'>
        {/* <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> */}
        <Main shoes={shoes} />
      </Route>
      <Route exact path ='/detail/:id'><Detail shoes={shoes} /></Route>
    </Switch>
  </div>
  );
}

export default App;