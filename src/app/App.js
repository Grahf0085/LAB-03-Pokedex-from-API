import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PokemonList from '../PokemonList';
import pokemon from '../pokemon';


class App extends Component {

  state = {
    poke: pokemon
  }

  render() {

    const { poke } = this.state;

    return (

      <div className="App">

        <Header />

        <main>
          <PokemonList pokemon={poke} />
        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
