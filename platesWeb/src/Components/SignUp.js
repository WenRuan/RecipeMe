import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { user_name: '', email: '', first_name: '', last_name:'', password:''};
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit (e){
        e.preventDefault();
        const signupInfo = {}

        const requestOptions ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
            },
            body: JSON.stringify({user_name: this.state})
        }
        
        fetch('localhost:5000/api/v1/api/create_user', requestOptions)
            .then(response => response.json)
            .then(data => this.setState({ postId: data.id}))
    };
    

  render() {
    return(
        <Container variant="signup" className="signup-box">
            <h1>Sign Up</h1>
            <Form className="form-button-bpad" onSubmit={this.handleSubmit}>
            <Form.Text>Please enter the information to create an account</Form.Text>
            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Control type="text" placeholder="Enter username" value={this.state.user_name} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" value={this.state.email}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFName">
                <Form.Control type="text" placeholder="First Name" value={this.state.first_name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLName">
                <Form.Control type="text" placeholder="Last Name" value={this.state.last_name}/>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={this.state.password} />
            </Form.Group>
 
            <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
                <Form.Control type="passwordCheck" placeholder="Re-enter Password"/>
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