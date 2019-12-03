import React from 'react';

import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import CartCard from '../../components/CartCard/index';
import { formatPrice } from '../../util/format';

import {
  Home,
  MainContainer,
  EmptyCartContainer,
  FinishContainer,
  FinishButton,
  ButtonTitle,
} from './styles';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({ ...product }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((t, product) => {
        return t + product.price * product.amount;
      }, 0)
    )
  );

  return (
    <Home>
      {products.length === 0 ? (
        <EmptyCartContainer>
          <Icon name="remove-shopping-cart" color="#e2e2e2" size={64} />
          <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
            Seu carrinho está vazio
          </Text>
        </EmptyCartContainer>
      ) : (
        <MainContainer>
          <FlatList
            style={{ maxHeight: '75%' }}
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <CartCard key={item.id} product={item} />}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
          >
            <Text style={{ color: '#999999', fontWeight: 'bold' }}>TOTAL</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 32 }}>{total}</Text>
          </View>
          <FinishContainer>
            <FinishButton>
              <ButtonTitle>FINALIZAR PEDIDO</ButtonTitle>
            </FinishButton>
          </FinishContainer>
        </MainContainer>
      )}
    </Home>
  );
}
