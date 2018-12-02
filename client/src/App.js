import React, { Component } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { Router, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

// import Success from './Success';
// import { requiredAuth  } from './authentication';


class App extends Component {
  render() {
    console.log('hi')
    return (
      <div>
       <div>
        <Login/>
       </div>
    <div>
    <Register/>
    </div>
    </div>
    );
}
}

export default App;
