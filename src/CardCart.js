import React from 'react';
import PropTypes from 'prop-types';

class CardCart extends React.Component {
  render() {
    const { title, thumbnail, price, quantity } = this.props;
    return (
      <div
        className="card"
      >
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ price }</h3>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
      </div>
    );
  }
}

CardCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CardCart;
