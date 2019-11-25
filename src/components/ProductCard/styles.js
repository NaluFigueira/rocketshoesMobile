import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: white;
  padding: 20px 20px;
  margin: 20px 20px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
`;

export const ProductName = styled.Text`
  font-size: 18px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const ButtonTitle = styled.Text`
  flex: 0.75;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 16;
`;

export const ProductAdd = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: ${colors.primary};
  border-radius: 4px;
`;

export const ProductCart = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 10px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex: 0.25;
  background: ${darken(0.03, colors.primary)};
`;
