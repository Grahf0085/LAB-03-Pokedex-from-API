import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {

  state = {
    search: '',
    sortField: '',
    typeFilter: ''
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

    const { search, sortField } = this.state;

    // const { nameSearch, typeFilter, sortField } = this.state;
    const { type } = this.props;
    console.log(type);
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

        </select>

        <select
          name="typeFilter"
          value={type}
          onChange={this.handleTypeFilter}
        >

          <option name="all" value="">All</option>
          <option key="grass" value="grass">Grass</option>
          <option key="fire" value="fire">Fire</option>
          <option key="water" value="water">Water</option>
          <option key="bug" value="bug">Bug</option>
          <option key="normal" value="normal">Normal</option>



          {/* <option value="">Type</option>
          {type.map(aType => (
            <option key={aType} value={aType}>{aType}</option>
          ))} */}
        </select>

      </form >

    );
  }
}
