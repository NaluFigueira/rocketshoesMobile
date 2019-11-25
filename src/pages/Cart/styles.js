import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Home = styled.View`
  background-color: ${colors.dark};
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
  flex-direction: column;
  background-color: white;
  padding: 10px 10px;
  margin: 20px 20px;
  border-radius: 4px;
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
