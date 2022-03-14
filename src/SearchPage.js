import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';

class SearchPage extends Component {
  render() {
    return (
      <div className="search">
        <input className="search-input" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <BsCart4 className="eye" />
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default SearchPage;
