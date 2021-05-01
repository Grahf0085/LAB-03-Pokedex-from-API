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

class App extends Component {

  state = {
    pokemon: null,
    loading: false,
    search: '',
    page: 1,
    types: undefined,
    shapes: undefined,
    attack: 0
  }

  componentDidMount() {
    this.fetchPokemon();
  }


  async fetchPokemon() {

    const { search, page, types, shapes, attack } = this.state;

    this.setState({ loading: true });

    try {
      const response = await request
        .get(POKEMON_API_URL)
        .query({ pokemon: search })
        .query({ page: page })
        .query({ type: types || undefined })
        .query({ shape: shapes || undefined })
        .query({ attack: attack || 0 });

      this.setState({ pokemon: response.body.results });

    }

    catch (err) {
      console.log(err);
    }

    finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = ({ search, typeFilter, shapeFilter, attackFilter }) => {
    this.setState(
      { search: search, page: 1, types: typeFilter, shapes: shapeFilter, attack: attackFilter },
      () => this.fetchPokemon()
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

    const { pokemon, loading, page, types, shapes, attack } = this.state;

    return (

      <div className="App">

        <Header />

        <section className="search-options">
          <PokemonSearch onSearch={this.handleSearch} type={types} shape={shapes} attack={attack} />
          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          />
        </section>

        <main>

          {pokemon && (pokemon.length
            ? <PokemonList pokemon={pokemon} />
            : <p>Sorry no pokes for you</p>)
          }

          {loading && <img className="loading" src="./loading.gif" alt="loading" />}

        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
