import React, { Component } from 'react';
import './PokemonList.css';
import PokemonItem from './PokemonItem';

export default class PokemonList extends Component {
  render() {
    return (
      <ul className="PokemonList">
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    );
  }
}
