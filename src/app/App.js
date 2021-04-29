import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PokemonList from '../PokemonList';
import PokemonSearch from '../PokemonSearch';
import request from 'superagent';
import Paging from '../Paging';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

// const pokemonShape = [...new Set(pokemon.map(poke => poke.shape))];
// const pokemonType = [...new Set(pokemon.map(poke => poke.type_1))];

class App extends Component {

  state = {
    pokemon: []
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  // async componentDidMount() {
  //   const response = await request.get(POKEMON_API_URL);
  //   this.setState({ pokemon: response.body.results });
  // }

  async fetchPokemon(search) {
    const response = await request
      .get(POKEMON_API_URL)
      .query({ pokemon: search });

    this.setState({ pokemon: response.body.results });
  }

  handleSearch = ({ search }) => {
    this.fetchPokemon(search);
  }

  // handleSearch = ({ nameSearch, typeFilter, sortField }) => {

  //   const nameRegex = new RegExp(nameSearch, 'i');

  //   const searchData = pokemon
  //     .filter(pokeOne => {
  //       return !nameSearch || pokeOne.pokemon.match(nameRegex);
  //     })
  //     .filter(pokeOne => {
  //       return !typeFilter || pokeOne.type_1 === typeFilter;
  //     })
  //     .sort((a, b) => {
  //       if (a[sortField] < b[sortField]) return 1;
  //       if (a[sortField] > b[sortField]) return -1;
  //       return 0;
  //     });
  //   console.log(sortField);
  //   this.setState({ poke: searchData });

  // }

  render() {

    const { pokemon } = this.state;

    return (

      <div className="App">

        <Header />

        {/* <PokemonSearch shape={pokemonShape} types={pokemonType} onSearch={this.handleSearch} /> */}

        <section className="search-options">
          <PokemonSearch onSearch={this.handleSearch} />
          <Paging />
        </section>

        <main>

          <PokemonList pokemon={pokemon} />

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
