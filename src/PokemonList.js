import React, { Component } from 'react';
import './PokemonList.css';
import PokemonItem from './PokemonItem';

export default class PokemonList extends Component {
  render() {
    return (
      <ul>
        <PokemonItem />
      </ul>
    );
  }
}
