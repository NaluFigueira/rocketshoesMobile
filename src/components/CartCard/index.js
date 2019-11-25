import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import { ProductImage, ProductPrice } from './styles';

export default function CartCard(props) {
  const { title, image, priceFormatted } = props.product;
  return (
    <>
      <ProductImage
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text>{title}</Text>
        <ProductPrice>{priceFormatted}</ProductPrice>
      </View>
      <Icon name="delete-forever" color={colors.primary} size={30} />
    </>
  );
}
