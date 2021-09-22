import ReactDOM from 'react-dom'
import React from 'react'

class LoginForm extends React.Component {
  render() {
    return(
      <div className="LoginForm">
        <h1>Hello World</h1>
        <form>
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="fname"/><br/><br/>
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lname"/><br/><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}

ReactDOM.render(
  <LoginForm/>,
  document.getElementById('root')
);