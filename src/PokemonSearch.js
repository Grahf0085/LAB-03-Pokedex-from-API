import React, { Component } from 'react';
import './PokemonSearch.css';

export default class PokemonSearch extends Component {

  state = {
    nameSearch: ''
  }

  handleNameSearch = ({ target }) => {
    this.setState({ nameSearch: target.value });
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

    const { nameSearch } = this.state;

    return (

      <form className="PokemonSearch" onSubmit={this.handleSubmit}>

        <label>
          Name:
          <input
            name="nameSearch"
            value={nameSearch}
            onChange={this.handleNameSearch}
          />
        </label>

      </form>

    );
  }
}
