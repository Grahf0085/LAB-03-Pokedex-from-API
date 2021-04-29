import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PokemonList from '../PokemonList';
import pokemon from '../pokemon';
import PokemonSearch from '../PokemonSearch';

const pokemonNames = [...new Set(pokemon.map(poke => poke.pokemon))];

class App extends Component {

  state = {
    poke: pokemon
  }

  handleSearch = ({ nameSearch }) => {

    const nameRegex = new RegExp(nameSearch, 'i');

    const searchData = pokemon
      .filter(pokemon => {
        return !nameSearch || pokemon.pokemon.match(nameRegex);
      });

    this.setState({ poke: searchData });

  }

  render() {

    const { poke } = this.state;

    return (

      <div className="App">

        <Header />

        <PokemonSearch onSearch={this.handleSearch} />

        <main>

          <PokemonList pokemon={poke} />

        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
