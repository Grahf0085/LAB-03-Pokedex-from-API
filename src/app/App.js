import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PokemonList from '../PokemonList';
import pokemon from '../pokemon';
import PokemonSearch from '../PokemonSearch';
import request from 'superagent';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

const pokemonShape = [...new Set(pokemon.map(poke => poke.shape))];
const pokemonType = [...new Set(pokemon.map(poke => poke.type_1))];

class App extends Component {

  state = {
    poke: []
  }

  async componentDidMount() {
    const response = await request.get(POKEMON_API_URL);
    console.log(response.body);
  }

  handleSearch = ({ nameSearch, typeFilter, sortField }) => {

    const nameRegex = new RegExp(nameSearch, 'i');

    const searchData = pokemon
      .filter(pokeOne => {
        return !nameSearch || pokeOne.pokemon.match(nameRegex);
      })
      .filter(pokeOne => {
        return !typeFilter || pokeOne.type_1 === typeFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return 1;
        if (a[sortField] > b[sortField]) return -1;
        return 0;
      });
    console.log(sortField);
    this.setState({ poke: searchData });

  }

  render() {

    const { poke } = this.state;

    return (

      <div className="App">

        <Header />

        <PokemonSearch shape={pokemonShape} types={pokemonType} onSearch={this.handleSearch} />

        <main>

          <PokemonList pokemon={poke} />

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
