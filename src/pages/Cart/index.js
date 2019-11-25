import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartCard from '../../components/CartCard/index';
import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Home,
  MainContainer,
  EmptyCartContainer,
  FinishContainer,
  FinishButton,
  ButtonTitle,
} from './styles';

function Cart(props) {
  const { products, total } = props;
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

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    priceFormatted: formatPrice(product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
