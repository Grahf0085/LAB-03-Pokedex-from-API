import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {

  state = {
    search: '',
    sortField: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  // handleNameSearch = ({ target }) => {
  //   this.setState({ nameSearch: target.value });
  // }

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

    const { search, sortField, typeFilter } = this.state;

    // const { nameSearch, typeFilter, sortField } = this.state;
    const { type } = this.props;
    return (

      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <input
          name="search"
          value={search}
          onChange={this.handleSearchChange}
        />

        <select
          name=""
          value={sortField}
          onChange={this.handleSortField}
        >
          <option value="Attack">Attack</option>

        </select>

        <select
          name="typeFilter"
          value={typeFilter}
          onChange={this.handleTypeFilter}
        >

          <option value="">Type</option>
          {type.map(aType => (
            <option key={aType} value={aType}>{aType}</option>
          ))}
        </select>

      </form >

    );
  }
}
