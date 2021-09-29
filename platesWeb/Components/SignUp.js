var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

var SignUp = function (_React$Component) {
    _inherits(SignUp, _React$Component);

    function SignUp() {
        _classCallCheck(this, SignUp);

        return _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).apply(this, arguments));
    }

    _createClass(SignUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                Container,
                { variant: 'signup' },
                React.createElement(
                    'h1',
                    null,
                    'Sign Up'
                ),
                React.createElement(
                    Form,
                    null,
                    React.createElement(
                        Form.Text,
                        null,
                        'Please enter the information to create an account'
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicEmail' },
                        React.createElement(Form.Control, { type: 'email', placeholder: 'Enter email' })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicFName' },
                        React.createElement(Form.Control, { type: 'text', placeholder: 'First Name' })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicLName' },
                        React.createElement(Form.Control, { type: 'text', placeholder: 'Last Name' })
                    ),
                    React.createElement(
                        Form.Group,
                        { className: 'mb-3', controlId: 'formBasicPassword' },
                        React.createElement(Form.Control, { type: 'password', placeholder: 'Password' })
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