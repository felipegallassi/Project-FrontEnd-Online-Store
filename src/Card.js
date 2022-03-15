import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div className="card" data-testid="product">
        <h3>{ title }</h3>
        <h3>{ price }</h3>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
