import ReactDOM from 'react-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import {Nav, NavLink } from 'react-bootstrap';
import './index.css'
import MegatronSlogan from './Components/MegatronSlogan';

class App extends React.Component {
  render() {
    return(
      <Container fluid className="container-pad">
        <div style={{backgroundColor : '#f5f5f5'}}>
          <Navbar style={{backgroundColor: '#d72836'}}>
            <Container>
              <Navbar.Brand href="#home" className="cursive-font navbrand-pdright" id="brandNavText">Plates</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="nav-links white-text">Home</Nav.Link>
                  <Nav.Link href="#about" className="nav-links white-text">About</Nav.Link>
                  <Nav.Link href="#services" className="nav-links white-text">Services</Nav.Link>
                </Nav>
                <Nav>
                  <NavLink href="#login" className="nav-links" id="login_button">Login</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <MegatronSlogan/>
        </div>
        
      </Container>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);