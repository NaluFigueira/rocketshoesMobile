import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  const { navigate } = props.navigation;
  const { id, title, image, priceFormatted } = props.product;

  const handleAdicionar = id => {
    const { addToCartRequest } = props;

    addToCartRequest(id);
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
          <Text style={{ color: 'white', fontSize: 14 }}> 0 </Text>
        </ProductCart>
        <ButtonTitle>ADICIONAR</ButtonTitle>
      </ProductAdd>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
