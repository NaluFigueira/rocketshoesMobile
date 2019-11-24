import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import {
  MainContainer,
  ProductImage,
  InfoContainer,
  ProductPrice,
  QuantityContainer,
  FinishContainer,
  FinishButton,
  ButtonTitle,
  ProductAmount,
} from './styles';

export default function CartCard() {
  return (
    <MainContainer>
      <InfoContainer>
        <ProductImage
          resizeMode="contain"
          source={{
            uri:
              'https://static.zattini.com.br/produtos/sapato-casual-em-couro-d&r-shoes-masculino/06/FAO-0332-006/FAO-0332-006_zoom1.jpg',
          }}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text>Tênis de caminhada leve</Text>
          <ProductPrice>R$ 179,90</ProductPrice>
        </View>
        <Icon name="delete-forever" color={colors.primary} size={30} />
      </InfoContainer>
      <QuantityContainer>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="remove-circle-outline" color={colors.primary} size={20} />
          <ProductAmount value="0" />
          <Icon name="add-circle-outline" color={colors.primary} size={20} />
        </View>
        <ProductPrice>R$ 179,90</ProductPrice>
      </QuantityContainer>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: '#999999', fontWeight: 'bold' }}>TOTAL</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 32 }}>R$ 179,90</Text>
      </View>
      <FinishContainer>
        <FinishButton>
          <ButtonTitle>FINALIZAR PEDIDO</ButtonTitle>
        </FinishButton>
      </FinishContainer>
    </MainContainer>
  );
}
