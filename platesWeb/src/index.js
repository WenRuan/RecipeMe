import ReactDOM from 'react-dom'
import React from 'react'
import SignUp from './Components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Col, Nav } from 'react-bootstrap';
import './index.css'
import Row from 'react-bootstrap/Row'
import MegatronSlogan from './Components/MegatronSlogan';

class App extends React.Component {
  render() {
    return(
      <Container fluid className="container-pad">
        <div style={{backgroundColor : '#f5f5f5'}}>
          <Navbar style={{backgroundColor: '#d72836'}}>
            <Container>
              <Navbar.Brand href="#home" className="cursive-font navbrand-pdright">Plates</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home" className="nav-links">Home</Nav.Link>
                  <Nav.Link href="#about" className="nav-links">About</Nav.Link>
                  <Nav.Link href="#services" className="nav-links">Services</Nav.Link>
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