import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  usernameHandler = (e) => {
    this.setState({username: e.target.value})
  }

  passwordHandler = (e) => {
    this.setState({password: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.usernameHandler} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.passwordHandler} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
