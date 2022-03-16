import React from 'react';
import PropTypes from 'prop-types';

class CardSpec extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div
        className="card"
      >
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ price }</h3>
      </div>
    );
  }
}

CardSpec.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardSpec;
