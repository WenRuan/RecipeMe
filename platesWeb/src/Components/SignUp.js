import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class SignUp extends React.Component {
  render() {
    return(
        <Container variant="signup">
            <h1>Sign Up</h1>
            <Form>
            <Form.Text>Please enter the information to create an account</Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFName">
                <Form.Control type="text" placeholder="First Name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLName">
                <Form.Control type="text" placeholder="Last Name"/>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
 
            <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
                <Form.Control type="passwordCheck" placeholder="Re-enter Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Sign Up
            </Button>
        </Form>
        </Container>
        
    );
  }
}

export default SignUp;