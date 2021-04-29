import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {

  state = {
    nameSearch: '',
    typeFilter: '',
    sortField: ''
  }

  handleNameSearch = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleTypeFilter = ({ target }) => {
    this.setState({ typeFilter: target.value });
  }

  handleSortField = ({ target }) => {
    this.setState({ sortField: target.value });
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

    const { nameSearch, typeFilter, sortField } = this.state;
    const { types, shape } = this.props;

    return (

      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleTypeFilter}
        >

          <option value="">Type</option>
          {types.map(aType => (
            <option key={aType} value={aType}>{aType}</option>
          ))}
        </select>

        <label>
          Name:
          <input
            name="nameSearch"
            value={nameSearch}
            onChange={this.handleNameSearch}
          />
        </label>

        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSortField}
        >
          <option value="">Shape</option>
          {shape.map(aShape => (
            <option key={aShape} value={aShape}>{aShape}</option>
          ))}

        </select>

      </form>

    );
  }
}
