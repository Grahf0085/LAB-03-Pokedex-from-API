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
const TYPES_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex/types';

class App extends Component {

  state = {
    pokemon: null,
    loading: false,
    search: '',
    page: 1,
    types: [],
    typesArray: [],
    shapes: undefined,
    attack: 0,
    defence: 0,
    direction: 'asc',
    sortBy: 'pokemon'
  }

  componentDidMount() {
    this.fetchPokemon();
    this.fetchTypes();
  }


  async fetchPokemon() {

    const { search, page, types, attack, direction, sortBy, defence } = this.state;

    this.setState({ loading: true });

    try {
      const response = await request
        .get(POKEMON_API_URL)
        .query({ pokemon: search })
        .query({ sort: sortBy || 'pokemon' })
        .query({ page: page })
        .query({ type: types || [] })
        .query({ attack: attack || 0 })
        .query({ defense: defence || 0 })
        .query({ direction: direction });

      this.setState({ pokemon: response.body.results });

    }

    catch (err) {
      console.log(err);
    }

    finally {
      this.setState({ loading: false });
    }
  }

  async fetchTypes() {
    this.setState({ loading: true });

    try {
      const response = await request
        .get(TYPES_API_URL);

      this.setState({
        types: response.body.map(type => type.type),
        typesArray: response.body.map(type => type.type)
      });
    }

    catch (err) {
      console.log(err);
    }

    finally {
      this.setState({ loading: false });
    }

  }

  handleSearch = ({ search, typeFilter, attackFilter, directionFilter, sortFilter, defenceFilter }) => {
    this.setState(
      { search: search, page: 1, types: typeFilter, attack: attackFilter, direction: directionFilter, sortBy: sortFilter, defence: defenceFilter },
      () => this.fetchPokemon(),
    );
  }

  handlePrevPage = () => {
    this.setState(
      { page: Math.max(this.state.page - 1, 1) },
      () => this.fetchPokemon()
    );
  }

  handleNextPage = () => {
    this.setState(
      { page: Math.max(this.state.page + 1, 1) },
      () => this.fetchPokemon()
    );
  }

  render() {

    const { pokemon, page, types, typesArray, attack, direction, sortBy, defence } = this.state;

    return (

      <div className="App">

        <Header />

        <section className="search-options">
          <PokemonSearch onSearch={this.handleSearch} type={types} typesArray={typesArray} attack={attack} direction={direction} sortBy={sortBy} defence={defence} />
          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          />
        </section>

        <main>

          {pokemon && pokemon.length
            ? <PokemonList pokemon={pokemon} />
            : <p>Sorry no pokes for you</p>
          }

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
