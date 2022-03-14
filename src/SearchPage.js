import React, { Component } from 'react';
import { getCategories } from './services/api';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="search">
        <input className="search-input" />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <BsCart4 className="eye" />
        </Link>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div className="sideBar">
          {categories.map((categoria) => (
            <label htmlFor={ categoria.id } data-testid="category" key={ categoria.id }>
              <input
                type="radio"
                id={ categoria.id }
                name={ categoria.id }
                value={ categoria.name }
              />
              {categoria.name}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

export default SearchPage;
