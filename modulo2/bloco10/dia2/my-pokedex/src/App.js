import './App.css';
import Pokedex from './Pokedex';
import Header from './Header';
import './pokemon.css'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pokedex />
      </div>
    );
  }
}
export default App;
