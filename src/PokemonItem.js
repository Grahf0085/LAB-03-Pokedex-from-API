import React, { Component } from 'react';
import './PokemonItem.css';

export default class PokemonItem extends Component {
  render() {
    return (

      <li className="PokemonItem">
        <h2>Squirtle</h2>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" />
        <h3>Water</h3>
        <h3>Attack: 48</h3>
        <h3>Defence: 65</h3>
      </li>

    );
  }
}