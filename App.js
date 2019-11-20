import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header/index';

import colors from './src/styles/colors';

// import { Container } from './styles';

export default function App() {
  return (
    <View style={{ backgroundColor: colors.dark }}>
      <Header />
    </View>
  );
}
