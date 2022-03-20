import React from 'react';
import PropTypes from 'prop-types';
import { saveProduct } from './services/localStorage';

class CardSpec extends React.Component {
  addToCart = () => {
    const product = {
      ...this.props,
      quantity: 1,
    };
    saveProduct(product);
  }

  render() {
    const { title, thumbnail, price, id } = this.props;
    console.log('CardSpec', this.props);
    return (
      <div
        className="card"
      >
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ price }</h3>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addToCart }
          id={ id }
        >
          Adicionar ao carrinho
        </button>
        <h3>{ price }</h3>
      </div>
    );
  }
}

CardSpec.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardSpec;
