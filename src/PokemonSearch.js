import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {

  state = {
    search: '',
    typeFilter: '',
    attackFilter: '',
    sortFilter: '',
    directionFilter: '',
    perPageFilter: '',
    sortByFilter: ''
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

  handleSortFilter = ({ target }) => {
    this.setState({ sortFilter: target.value });
  }

  handleDirectionFilter = ({ target }) => {
    this.setState({ directionFilter: target.value });
  }

  handlePerPage = ({ target }) => {
    this.setState({ perPageFilter: target.value });
  }

  handleSortBy = ({ target }) => {
    this.setState({ sortByFilter: target.value });
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

    const { type, attack, typesArray, direction, perPage, sortBy } = this.props;

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

          <h3>Sort By: </h3>
          <select
            name=""
            value={sortBy}
            onChange={this.handleSortBy}
          >

            <option name="name" value="pokemon">Name</option>
            <option name="attack" value="attack">Attack</option>
            <option name="type" value="type_1">Type</option>
            <option name="color" value="color_1">Color</option>


          </select>

        </label>

        <label>

          <h3>Sort Direction: </h3>
          <select
            name=""
            value={direction}
            onChange={this.handleDirectionFilter}
          >

            <option name="asc" value="asc">Ascending</option>
            <option name="desc" value="desc">Descending</option>

          </select>

        </label>

        <label>

          <h3>Per Page: </h3>
          <select
            name=""
            value={perPage}
            onChange={this.handlePerPage}
          >

            <option name="20" value="20">20</option>
            <option name="40" value="40">40</option>
            <option name="50" value="50">50</option>

          </select>

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
