import React from 'react';
import CardCart from './CardCart';
import { getSavedProducts } from './services/localStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isEmptyCart: true,
    };
  }

  componentDidMount = () => {
    this.getCartSavedProducts();
  }

  getCartSavedProducts = () => {
    const response = getSavedProducts();
    if (response) {
      this.setState({
        products: response,
        isEmptyCart: false,
      });
    } else {
      this.setState({
        isEmptyCart: true,
      });
    }
  }

  render() {
    const { isEmptyCart, products } = this.state;
    const emptyCartElement = (
      <h1 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h1>);

    const productsElement = (
      (products.map((product) => (
        <CardCart
          key={ product.id }
          id={ product.id }
          title={ product.title }
          thumbnail={ product.thumbnail }
          price={ product.price }
          quantity={ product.quantity }
          callback={ this.getCartSavedProducts }
        />)))
    );
    return (
      <div>
        {isEmptyCart ? emptyCartElement : productsElement}
        <div>
          <h2>Valor total da compra: </h2>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
