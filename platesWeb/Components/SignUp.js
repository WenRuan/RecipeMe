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

        _this.state = { user_name: '', email: '', first_name: '', last_name: '', password: '' };
        return _this;
    }

    _createClass(SignUp, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var signupInfo = {};

            var requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token'
                },
                body: JSON.stringify({ user_name: this.state })
            };

            fetch('localhost:5000/api/v1/api/create_user', requestOptions).then(function (response) {
                return response.json;
            }).then(function (data) {
                return _this2.setState({ postId: data.id });
            });
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
                        React.createElement(Form.Control, { type: 'text', placeholder: 'Enter username', value: this.state.user_name, onChange: this.handleChange })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicEmail' },
                        React.createElement(Form.Control, { type: 'email', placeholder: 'Enter email', value: this.state.email })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicFName' },
                        React.createElement(Form.Control, { type: 'text', placeholder: 'First Name', value: this.state.first_name })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicLName' },
                        React.createElement(Form.Control, { type: 'text', placeholder: 'Last Name', value: this.state.last_name })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicPassword' },
                        React.createElement(Form.Control, { type: 'password', placeholder: 'Password', value: this.state.password })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicPasswordCheck' },
                        React.createElement(Form.Control, { type: 'passwordCheck', placeholder: 'Re-enter Password' })
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