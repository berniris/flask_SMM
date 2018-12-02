import React from 'react';
import { withRouter } from 'react-router';
// import './login.css';

class Register extends React.Component {
  state = {
    username: '',
    password: '',
  }

  onChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  clearLogin = () => {
    this.setState({
      username: '',
      password: '',
    });
  }

  sendLoginInformation = (username, password) => {
    const { router } = this.props;
    const API_HEADERS_AND_MODE = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
    };
  
    const API_SETTINGS = {
      settings: {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
    }

    return fetch('http://localhost:5000/registration', {
      ...API_HEADERS_AND_MODE,
      ...API_SETTINGS.settings
    }).then(res => {
      if (res.status >= 400) {
        return res.json().then(err => {
          throw err;
        });
      }
      console.log(res.json());
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="auth-container">
        <div className="logo">
          <h3 className="demo">Demo Auth Site</h3>
        </div>
        <div className="auth-input-holder">
        <div className="username-icon" />
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          <div className="password-icon" />
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </div>
        <div className="auth-button">
            <button
            className="auth-button-go"
            onClick={() => this.sendLoginInformation(username, password)}
            >
              Proceed
            </button>
        </div>
      </div>
    )
  }
};

export default withRouter(Register);