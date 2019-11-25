import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Home = styled.View`
  background-color: ${colors.dark};
  flex: 1;
`;

export const EmptyCartContainer = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px 10px;
  margin: 20px 20px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
`;

export const MainContainer = styled.View`
  flex: 0.6;
  flex-direction: column;
  background-color: white;
  padding: 10px 10px;
  margin: 20px 20px;
  border-radius: 4px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
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
  color: gray;
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

export const ProductPrice = styled.Text`
  font-weight: bold;
`;
