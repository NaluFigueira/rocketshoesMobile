import styled from 'styled-components/native';

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityContainer = styled.View`
  background-color: #e2e2e2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 4px;
`;

export const ProductAmount = styled.TextInput`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  color: gray;
`;
