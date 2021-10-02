import React from 'react'
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class MegatronSlogan extends React.Component{
    render(){
        return(
            <Container>
            <Row>
              <Col className="slogan-main">
                <div className="slogan-main">
                Know what you want, when you want it! <br></br>
                <h1 className="cursive-font">Plates</h1>
                </div>
              </Col>
              <Col></Col>
              <Col><SignUp/></Col>
            </Row>
          </Container>
        )
    }
}

export default MegatronSlogan;