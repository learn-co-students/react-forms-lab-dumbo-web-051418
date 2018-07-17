import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onChange = event => {
    let oldState = {...this.state};
    oldState[event.target.name] = event.target.value;
    this.setState({
      ...oldState,
    });
  }

  formSubmit = event => {
    event.preventDefault();
    this.state.username !== "" && this.state.password !== "" && this.props.onSubmit.bind(this).call(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.formSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" onChange={this.onChange} value={this.state.username} required/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" onChange={this.onChange} value={this.state.password} required/>
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
