import React from 'react';
import PropTypes from 'prop-types';

class ProductSpec extends React.Component {
  render() {
    const { attributes } = this.props;
    return (
      <div
        className="productSpec"
      >
        <h2>Especificações Técnicas</h2>
        <div className="body">
          {attributes.map(({ name, value_name: valueName, id }) => (
            <p key={ id }>
              {name}
              :
              {' '}
              <strong>{valueName}</strong>
            </p>
          ))}
        </div>

      </div>
    );
  }
}

ProductSpec.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductSpec;
