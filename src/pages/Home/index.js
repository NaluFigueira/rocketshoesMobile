import React, { useState, useEffect } from 'react';

import { FlatList } from 'react-native';

import PropTypes from 'proptypes';
import { Container } from './styles';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import ProductCard from '../../components/ProductCard';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductCard key={item.id} navigation={navigation} product={item} />
        )}
      />
    </Container>
  );
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
