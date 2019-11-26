import React, { Component } from 'react';

import { FlatList } from 'react-native';

import PropTypes from 'proptypes';
import { Container } from './styles';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import ProductCard from '../../components/ProductCard';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { navigation } = this.props;
    const { products } = this.state;
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
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
