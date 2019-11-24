import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductCart,
  ProductAdd,
  ButtonTitle,
} from './styles';

export default function ProductCard({ navigation }) {
  const { navigate } = navigation;
  return (
    <Container>
      <ProductImage
        resizeMode="contain"
        source={{
          uri:
            'https://static.zattini.com.br/produtos/sapato-casual-em-couro-d&r-shoes-masculino/06/FAO-0332-006/FAO-0332-006_zoom1.jpg',
        }}
      />
      <ProductName>Tênis de caminhada leve</ProductName>
      <ProductPrice>R$ 179,90</ProductPrice>
      <ProductAdd onPress={() => navigate('Cart')}>
        <ProductCart>
          <Icon name="add-shopping-cart" color="white" size={20} />
          <Text style={{ color: 'white', fontSize: 14 }}> 0 </Text>
        </ProductCart>
        <ButtonTitle>ADICIONAR</ButtonTitle>
      </ProductAdd>
    </Container>
  );
}
