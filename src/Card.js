import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import { getSavedProducts } from './services/localStorage';

class Card extends React.Component {
  constructor() {
    super();
    // console.log('card', props);
    this.state = {
      redirectOk: false,
      addProduct: false,
      /*  title: '',
      thumbnail: '',
      price: 0,
      quantity: 1,
      id: '', */
    };
  }

  showProductsDetails = () => {
    this.setState({
      redirectOk: true,
    });
  }

  /*  addToCart = () => {
    const product = {
      ...this.props,
      quantity: 1,
    };
  } */

  render() {
    const { title, thumbnail, price, id } = this.props;
    const { redirectOk, addProduct } = this.state;
    console.log(addProduct);
    const pathToProduct = `product-details/${id}`;
    return (
      <div
        className="card"
        data-testid="product"
      >
        <h3>{ title }</h3>
        <h3>{ price }</h3>
        <img src={ thumbnail } alt={ title } />
        <button
          data-testid="product-detail-link"
          type="button"
          onClick={ this.showProductsDetails }
        >
          Detalhes do produto
        </button>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.addToCart }
        >
          Adicionar ao carrinho
        </button>
        { redirectOk && <Redirect to={ pathToProduct } /> }
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
