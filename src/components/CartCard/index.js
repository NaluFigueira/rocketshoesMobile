import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'proptypes';
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

export default function CartCard({ product }) {
  const { id, title, image, amount } = product;
  const subtotal = formatPrice(product.price * product.amount);
  const priceFormatted = useSelector(() => formatPrice(product.price));

  const dispatch = useDispatch();

  function incrementProductQuantity(p) {
    dispatch(CartActions.updateAmountRequest(p.id, p.amount - 1));
  }

  function decrementProductQuantity(p) {
    dispatch(CartActions.updateAmountRequest(p.id, p.amount + 1));
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
          onPress={() => dispatch(CartActions.removeProduct(id))}
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

CartCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
