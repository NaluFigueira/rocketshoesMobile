/* eslint-disable global-require */
import React from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import Navigation from '../../services/navigation';

import { Container, Badge, BadgeNumber } from './styles';

function Header(props) {
  const { cart } = props;
  return (
    <Container>
      <Image
        style={{ width: '50%', resizeMode: 'contain' }}
        source={require('../../assets/logo.png')}
        onPress={() => Navigation.navigate('Home')}
      />
      <View>
        <Icon
          name="shopping-basket"
          size={24}
          color="white"
          onPress={() => Navigation.navigate('Cart')}
        />
        <Badge>
          <BadgeNumber>{cart.length}</BadgeNumber>
        </Badge>
      </View>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
