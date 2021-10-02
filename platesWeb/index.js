var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavLink } from 'react-bootstrap';
import './index.css';
import MegatronSlogan from './Components/MegatronSlogan';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Container,
        { fluid: true, className: 'container-pad' },
        React.createElement(
          'div',
          { style: { backgroundColor: '#f5f5f5' } },
          React.createElement(
            Navbar,
            { style: { backgroundColor: '#d72836' } },
            React.createElement(
              Container,
              null,
              React.createElement(
                Navbar.Brand,
                { href: '#home', className: 'cursive-font navbrand-pdright', id: 'brandNavText' },
                'Plates'
              ),
              React.createElement(Navbar.Toggle, { 'aria-controls': 'basic-navbar-nav' }),
              React.createElement(
                Navbar.Collapse,
                { id: 'basic-navbar-nav' },
                React.createElement(
                  Nav,
                  { className: 'me-auto' },
                  React.createElement(
                    Nav.Link,
                    { href: '#home', className: 'nav-links white-text' },
                    'Home'
                  ),
                  React.createElement(
                    Nav.Link,
                    { href: '#about', className: 'nav-links white-text' },
                    'About'
                  ),
                  React.createElement(
                    Nav.Link,
                    { href: '#services', className: 'nav-links white-text' },
                    'Services'
                  )
                ),
                React.createElement(
                  Nav,
                  null,
                  React.createElement(
                    NavLink,
                    { href: '#login', className: 'nav-links', id: 'login_button' },
                    'Login'
                  )
                )
              )
            )
          ),
          React.createElement(MegatronSlogan, null)
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));