import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductDetails } from './services/api';
import CardSpec from './CardSpec';
import ProductSpec from './ProductSpec';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      thumbnail: '',
      price: 0,
      attributes: [],
      id: '',
    };
  }

  componentDidMount = async () => {
    const { match: { params: { idParam } } } = this.props;
    const productDetails = await getProductDetails(idParam);
    const { title, thumbnail, price, attributes, id } = productDetails;
    this.setState({
      title,
      thumbnail,
      price,
      attributes,
      id,
    });
  }

  render() {
    const { title, thumbnail, price, attributes, id } = this.state;
    return (
      <div className="productDetails">
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <BsCart4 className="shoppinCart" />
        </Link>
        <CardSpec title={ title } thumbnail={ thumbnail } price={ price } id={ id } />
        <ProductSpec attributes={ attributes } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      idParam: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
