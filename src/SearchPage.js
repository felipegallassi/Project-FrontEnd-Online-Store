import React, { Component } from 'react';

class SearchPage extends Component {
  render() {
    return (
      <div className="search">
        <input className="search-input" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default SearchPage;
