var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var SignUp = function (_React$Component) {
    _inherits(SignUp, _React$Component);

    function SignUp(props) {
        _classCallCheck(this, SignUp);

        var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));

        _this.handleChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.state = { user_name: '', email: '', first_name: '', last_name: '', password: '', passwordCheck: '',
            errors: { user_name: '', email: '', first_name: '', last_name: '', password: '', passwordCheck: '' }
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(SignUp, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();

            if (this.validate()) {

                alert('A form was submitted: ' + this.state);

                var requestOptions = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.state)
                };

                console.log(JSON.stringify(this.state));

                fetch('http://127.0.0.1:5000/api/v1/api/create-user', requestOptions).then(function (response) {
                    console.log(requestOptions);
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Something went wrong ...');
                    }
                });
            }
        }
    }, {
        key: 'validate',
        value: function validate() {
            var input = this.state;
            var isValid = true;
            var errors = {};

            if (!input["user_name"]) {
                isValid = false;
                errors["user_name"] = "Please enter a valid username";
            }

            if (!input["email"]) {
                isValid = false;
                errors["email"] = "Please enter a valid email";
            }

            if (!input["first_name"]) {
                isValid = false;
                errors["first_name"] = "Please enter a first name";
            }

            if (!input["last_name"]) {
                isValid = false;
                errors["last_name"] = "Please enter a last name";
            }

            if (!input["password"]) {
                isValid = false;
                errors["password"] = "Please enter your password";
            }

            if (!input["passwordCheck"]) {
                isValid = false;
                errors["passwordCheck"] = "Please confirm your password";
            }
            if (typeof input["password"] !== "undefined" && typeof input["passwordCheck"] !== "undefined") {

                if (input["password"][0] !== input["passwordCheck"][0]) {

                    isValid = false;
                    errors["password"] = "Passwords don't match";
                }
            }

            this.setState({ errors: errors });
            return isValid;
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                Container,
                { variant: 'signup', className: 'signup-box' },
                React.createElement(
                    'h1',
                    null,
                    'Sign Up'
                ),
                React.createElement(
                    Form,
                    { className: 'form-button-bpad', onSubmit: this.handleSubmit },
                    React.createElement(
                        Form.Text,
                        null,
                        'Please enter the information to create an account'
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formUserName' },
                        React.createElement(Form.Control, { type: 'text', placeholder: 'Enter username', name: 'user_name', value: this.state.user_name, onChange: this.handleChange }),
                        React.createElement(
                            'div',
                            { className: 'form-warning' },
                            this.state.errors.user_name
                        )
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicEmail' },
                        React.createElement(Form.Control, { type: 'email', placeholder: 'Enter email', name: 'email', value: this.state.email, onChange: this.handleChange }),
                        React.createElement(
                            'div',
                            { className: 'form-warning' },
                            this.state.errors.email
                        )
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicFName' },
                        React.createElement(Form.Control, { type: 'text', placeholder: 'First Name', name: 'first_name', value: this.state.first_name, onChange: this.handleChange }),
                        React.createElement(
                            'div',
                            { className: 'form-warning' },
                            this.state.errors.first_name
                        )
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicLName' },
                        React.createElement(Form.Control, { type: 'text', placeholder: 'Last Name', name: 'last_name', value: this.state.last_name, onChange: this.handleChange }),
                        React.createElement(
                            'div',
                            { className: 'form-warning' },
                            this.state.errors.last_name
                        )
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicPassword' },
                        React.createElement(Form.Control, { type: 'password', placeholder: 'Password', name: 'password', value: this.state.password, onChange: this.handleChange }),
                        React.createElement(
                            'div',
                            { className: 'form-warning' },
                            this.state.errors.password
                        )
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicPasswordCheck' },
                        React.createElement(Form.Control, { type: 'password', placeholder: 'Re-enter Password', name: 'passwordCheck', value: this.state.passwordCheck, onChange: this.handleChange }),
                        React.createElement(
                            'div',
                            { className: 'form-warning' },
                            this.state.errors.passwordCheck
                        )
                    ),
                    React.createElement(
                        Button,
                        { variant: 'primary', type: 'submit' },
                        'Sign Up'
                    )
                )
            );
        }
    }]);

    return SignUp;
}(React.Component);

export default SignUp;