import React from 'react';

import { Container } from './styles';

import ProductCard from '../../components/ProductCard';

export default function Home({ navigation }) {
  return (
    <Container>
      <ProductCard navigation={navigation} />
    </Container>
  );
}
