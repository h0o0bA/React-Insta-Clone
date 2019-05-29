import React, { Component } from "react";
import './App.css';
import dummyData from './components/dummy-data';
import PostPage from './components/PostPage';
import Login from './components/Login/Login'
import withAuthenticate from './components/Authentication/Authenticate'


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


 

  render() {
    return (
      <div className="App">
        <Comp/>
      </div>
    );
  }
}

const Comp = withAuthenticate(PostPage)(Login);

export default App;
