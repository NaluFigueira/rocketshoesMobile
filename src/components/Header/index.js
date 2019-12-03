/* eslint-disable global-require */
import React from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import Navigation from '../../services/navigation';

import { Container, Badge, BadgeNumber } from './styles';

export default function Header() {
  const cart = useSelector(state => state.cart);

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
