import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  ProductImage,
  ProductPrice,
  InfoContainer,
  QuantityContainer,
  ProductAmount,
} from './styles';

function CartCard(props) {
  const { updateAmountRequest, removeProduct, product } = props;
  const { id, title, image, priceFormatted, subtotal, amount } = props.product;

  function incrementProductQuantity(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  function decrementProductQuantity(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  return (
    <>
      <InfoContainer>
        <ProductImage
          resizeMode="contain"
          source={{
            uri: image,
          }}
        />
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text ellipsizeMode="head">{title}</Text>
          <ProductPrice>{priceFormatted}</ProductPrice>
        </View>
        <Icon
          name="delete-forever"
          color={colors.primary}
          size={30}
          onPress={() => removeProduct(id)}
        />
      </InfoContainer>
      <QuantityContainer>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name="remove-circle-outline"
            color={colors.primary}
            size={20}
            onPress={() => incrementProductQuantity(product)}
          />
          <ProductAmount editable={false} value={amount.toString()} />
          <Icon
            name="add-circle-outline"
            color={colors.primary}
            size={20}
            onPress={() => decrementProductQuantity(product)}
          />
        </View>
        <ProductPrice>{subtotal}</ProductPrice>
      </QuantityContainer>
    </>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
