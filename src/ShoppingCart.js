import React from 'react';
import CardCart from './CardCart';
import { getSavedProducts } from './services/localStorage';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    console.log('ShoppingCart-constructor');
    this.state = {
      products: [],
      isEmptyCart: true,
    };
  }

  componentDidMount = () => {
    console.log('componentDidMount');
    const response = getSavedProducts();
    if (response) {
      this.setState({
        products: response,
        isEmptyCart: false,
      });
    }
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate = () => {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');
  }

  render() {
    const { isEmptyCart, products } = this.state;
    console.log(products);

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
        />)))
    );
    return (
      <div>
        {isEmptyCart ? emptyCartElement : productsElement}
      </div>
    );
  }
}

export default ShoppingCart;
