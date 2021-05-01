import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {

  state = {
    search: '',
    // sortField: '',
    typeFilter: '',
    shapeFilter: '',
    attackFilter: ''
  }

  handleSearchChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleShapeFilter = ({ target }) => {
    this.setState({ shapeFilter: target.value });
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

    const { type, shape, attack } = this.props;

    return (

      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <input
          name="search"
          value={search}
          onChange={this.handleSearchChange}
        />

        {/* <select
          name=""
          value={sortField}
          onChange={this.handleSortField}
        >

        </select> */}

        <select
          name="typeFilter"
          value={type}
          onChange={this.handleTypeFilter}
        >
          console.log(type);
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

        <select
          name="shapeFilter"
          value={shape}
          onChange={this.handleShapeFilter}
        >

          <option name="all" value="">All</option>
          <option name="upright" value="upright">Upright</option>
          <option name="na" value="NA">NA</option>

        </select>

        <input
          name="attack"
          value={attack}
          onChange={this.handleAttackFilter}
        >
        </input>

      </form >

    );
  }
}
