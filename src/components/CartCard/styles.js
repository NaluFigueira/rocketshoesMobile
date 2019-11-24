import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const MainContainer = styled.View`
  flex: 0.6;
  flex-direction: column;
  background-color: white;
  padding: 10px 10px;
  margin: 20px 20px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const ProductImage = styled.Image`
  width: 30%;
  height: 100%;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
`;

export const QuantityContainer = styled.View`
  background-color: #e2e2e2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 0.3;
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
`;

export const FinishContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
`;

export const FinishButton = styled.TouchableOpacity`
  padding: 10px 10px;
  width: 100%;
  align-items: center;
  background: ${darken(0.03, colors.primary)};
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-weight: bold;
`;
