import React, { Component } from 'react';
import './PokemonList.css';
import PokemonItem from './PokemonItem';

export default class PokemonList extends Component {

  render() {

    const { pokemon } = this.props;

    return (

      <ul className="PokemonList">
        {pokemon.map(poke => (
          <PokemonItem key={poke._id} pokemon={poke} />
        ))}
      </ul>

    );
  }
}
