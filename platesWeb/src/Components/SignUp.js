import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user_name: '', email: '', first_name: '', last_name:'', password:'', passwordCheck: '',
        errors: {user_name: '', email: '', first_name: '', last_name:'', password:'', passwordCheck: ''}
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]})
    }

    handleSubmit (e){
        e.preventDefault();

        let formState = {user_name: this.state.user_name, email: this.state.email, first_name: this.state.first_name, last_name: this.state.last_name, password: this.state.password};


        if(this.validate()){

            alert('A form was submitted: ' + formState)

            const requestOptions ={
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token',
                },
                body: JSON.stringify(formState)
            }
            
            fetch('localhost:5000/api/v1/api/create-user', requestOptions)
                .then(response => response.json)
        }

        
    };

    validate(){
        let input = this.state;
        let isValid = true;
        let errors = {};

        if (!input["user_name"]) {
            isValid = false;
            errors["user_name"] = "Please enter a valid username"
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter a valid email"
        }

        if (!input["first_name"]) {
            isValid = false;
            errors["first_name"] = "Please enter a first name"
        }

        if (!input["last_name"]) {
            isValid = false;
            errors["last_name"] = "Please enter a last name"
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password"
        }

        if (!input["passwordCheck"]) {
            isValid = false;
            errors["passwordCheck"] = "Please confirm your password"
        }
        if(typeof input["password"] !== "undefined" && typeof input["passwordCheck"] !== "undefined"){

            if (input["password"][0] !== input["passwordCheck"][0]){

                isValid = false;
                errors["password"] = "Passwords don't match"

            }
        }


        this.setState({errors:errors});
        return isValid;
    }
    

  render() {
    return(
        <Container variant="signup" className="signup-box">
            <h1>Sign Up</h1>
            <Form className="form-button-bpad" onSubmit={this.handleSubmit}>
            <Form.Text>Please enter the information to create an account</Form.Text>
            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Control type="text" placeholder="Enter username" name="user_name" value={this.state.user_name} onChange={this.handleChange}/>
                <div>{this.state.errors.user_name}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFName">
                <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLName">
                <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
            </Form.Group>
        
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
            </Form.Group>
 
            <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
                <Form.Control type="password" placeholder="Re-enter Password" name="passwordCheck" value={this.state.passwordCheck} onChange={this.handleChange}/>
            </Form.Group>
            <div className="text-danger"></div>
            <Button variant="primary" type="submit">
            Sign Up
            </Button>
        </Form>
        </Container>
        
    );
  }
}

export default SignUp;