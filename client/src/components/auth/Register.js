import React, { Component } from 'react';

class register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
      username: '',
      password: ''
    }
  }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleSubmit (e) {
  e.preventDefault();
  console.log(this.state.user)
  this.props.handleRegister(this.state.user);
}

handleChange(e) {
  const {name, value} = e.target;
  this.setState((prevState) => {
    return {
      user: {
        ...prevState.user,
        [name]: value
      }
    }
  })
}


render() {
  return (
    <div className="container">
    <div className="register">
        <h1 className="header">
          register
        </h1>
        <p>Need to create an account? Please click <a href="/register">here to register.</a></p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <br />
          <input
            value={this.state.user.username}
            name="username"
            type="username"
            onChange={this.handleChange}
            autoComplete="off"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            value={this.state.user.password}
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <button
            type="submit"
            value="Submit"
            >
            Submit
          </button>
          </form>
       </div>
      </div>

  );
}

}

export default register;