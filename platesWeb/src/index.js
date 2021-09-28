import ReactDOM from 'react-dom'
import React from 'react'
import SignUp from './Components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import './index.css'

class App extends React.Component {
  render() {
    return(
      <Container>
        <div style={{backgroundColor : 'aquamarine'}}>
          <Navbar bg='danger'>
            <Container>
              <Navbar.Brand href="#home">Plates</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <SignUp/>
        </div>
        
      </Container>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);