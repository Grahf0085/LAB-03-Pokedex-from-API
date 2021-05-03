import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {

  state = {
    search: '',
    typeFilter: '',
    attackFilter: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleTypeFilter = ({ target }) => {
    this.setState({ typeFilter: target.value });

  }

  handleAttackFilter = ({ target }) => {
    this.setState({ attackFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {

    const { search } = this.state;

    const { type, attack, typesArray } = this.props;

    return (

      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <label>

          <h3>Name: </h3>
          <input
            name="search"
            value={search}
            onChange={this.handleSearchChange}
          />

        </label>

        <label>

          <h3>Type: </h3>
          <select
            name="typeFilter"
            value={type}
            onChange={this.handleTypeFilter}
          >

            <option value="">Type</option>
            {typesArray.map(aType => (
              <option key={aType} value={aType}>{aType}</option>
            ))}
          </select>

        </label>

        <label>
          <h3>Attack: </h3>
          <input
            name="attack"
            value={attack}
            onChange={this.handleAttackFilter}
          >
          </input>

        </label>

      </form >

    );
  }
}
