/* eslint-disable global-require */
import React from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Badge, BadgeNumber } from './styles';

export default function Header() {
  return (
    <Container>
      <Image
        style={{ width: '50%', resizeMode: 'contain' }}
        source={require('../../assets/logo.png')}
      />
      <View>
        <Icon name="shopping-basket" size={24} color="white" />
        <Badge>
          <BadgeNumber>0</BadgeNumber>
        </Badge>
      </View>
    </Container>
  );
}
