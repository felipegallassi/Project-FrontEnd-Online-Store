import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
import { getCategories, getProductsFromQuery } from './services/api';
import Card from './Card';

class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      inputQuery: '',
    };
  }

  componentDidMount = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  queryProducts = async () => {
    const { inputQuery } = this.state;
    const productsFetched = await getProductsFromQuery(inputQuery);
    this.setState({
      products: productsFetched.results,
    });
  }

  render() {
    const { categories, products, inputQuery } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          className="search-input"
          data-testid="query-input"
          id="query"
          name="inputQuery"
          onChange={ this.handleChange }
          value={ inputQuery }
        />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <BsCart4 className="shoppinCart" />
        </Link>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.queryProducts }
        >
          Buscar
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div className="searchPageResults">
          <div className="sideBar">
            {categories.map((categoria) => (
              <label htmlFor={ categoria.id } data-testid="category" key={ categoria.id }>
                <input
                  type="radio"
                  id={ categoria.id }
                  name="categories"
                  value={ categoria.name }
                />
                {categoria.name}
              </label>
            ))}
          </div>
          <div className="container">
            {products.length > 0
              ? (products.map((product) => (
                <Card
                  key={ product.id }
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  price={ product.price }
                />)))
              : (<h2>Nenhum produto foi encontrado</h2>)}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
