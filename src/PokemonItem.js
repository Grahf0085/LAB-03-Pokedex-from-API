import React, { Component } from 'react';
import './PokemonItem.css';

export default class PokemonItem extends Component {

  render() {

    const { pokemon } = this.props;

    return (
      <li
        className="PokemonItem"
        style={{
          backgroundColor: pokemon.color_1,
          color: pokemon.color_2,
          fontFamily: 'Pokemon'
        }}
      >
        <h2>{pokemon.pokemon}</h2>
        <img src={pokemon.url_image} alt={pokemon.pokemon} />
        <h3>Type: {pokemon.type_1}</h3>
        <h3>Attack: {pokemon.attack}</h3>
        <h3>Defence: {pokemon.defense}</h3>
      </li>

    );
  }
}