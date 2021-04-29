import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PokemonList from '../PokemonList';
import pokemon from '../pokemon';
import PokemonSearch from '../PokemonSearch';

const pokemonType = [...new Set(pokemon.map(poke => poke.type_1))];

class App extends Component {

  state = {
    poke: pokemon
  }

  handleSearch = ({ nameSearch, typeFilter, sortField }) => {

    const nameRegex = new RegExp(nameSearch, 'i');

    const searchData = pokemon
      .filter(pokemon => {
        return !nameSearch || pokemon.pokemon.match(nameRegex);
      })
      .filter(pokemon => {
        return !typeFilter || pokemon.type_1 === typeFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return 1;
        if (a[sortField] > b[sortField]) return -1;
        return 0;
      });

    this.setState({ poke: searchData });

  }

  render() {

    const { poke } = this.state;

    return (

      <div className="App">

        <Header />

        <PokemonSearch types={pokemonType} onSearch={this.handleSearch} />

        <main>

          <PokemonList pokemon={poke} />

        </main>

        <Footer />
      </div>
    );
  }

}

export default App;
