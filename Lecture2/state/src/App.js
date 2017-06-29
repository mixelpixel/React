import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'My Awesome React App'}/>
        <Counter />
      </div>
    );
  }
}

export default App;
