import React from 'react';
import PropTypes from 'prop-types';
import {
  incProductQuantity,
  decProductQuantity,
  deleteProduct } from './services/localStorage';

class CardCart extends React.Component {
  render() {
    const { title, thumbnail, price, quantity, id, callback } = this.props;
    return (
      <div
        className="card"
      >
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ price }</h3>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
        <h3>{ price * quantity }</h3>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => { incProductQuantity(id); callback(); } }
          id={ id }
        >
          Mais
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => { decProductQuantity(id); callback(); } }
          id={ id }
        >
          Menos
        </button>
        <button
          type="button"
          onClick={ () => { deleteProduct(id); callback(); } }
          id={ id }
        >
          Remover produto
        </button>
      </div>
    );
  }
}

CardCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default CardCart;
