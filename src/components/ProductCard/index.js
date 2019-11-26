/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'proptypes';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCart,
  ProductAdd,
  ButtonTitle,
} from './styles';

function ProductCard(props) {
  const { product, cart } = props;
  const { id, title, image, priceFormatted } = product;

  const handleAdicionar = productId => {
    const { addToCartRequest } = props;

    addToCartRequest(productId);
  };

  const getAmount = productId => {
    if (cart.length === 0) return 0;
    const products = cart.filter(p => p.id === productId);
    if (!products[0]) return 0;
    return products[0].amount;
  };

  return (
    <Container>
      <ProductImage
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <ProductName>{title}</ProductName>
        <ProductPrice>{priceFormatted}</ProductPrice>
      </View>

      <ProductAdd onPress={() => handleAdicionar(id)}>
        <ProductCart>
          <Icon name="add-shopping-cart" color="white" size={20} />
          <Text style={{ color: 'white', fontSize: 14 }}>{getAmount(id)}</Text>
        </ProductCart>
        <ButtonTitle>ADICIONAR</ButtonTitle>
      </ProductAdd>
    </Container>
  );
}

ProductCard.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
    subtotal: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
