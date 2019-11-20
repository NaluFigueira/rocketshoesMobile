import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
  padding: 10px 0px;
`;

export const Badge = styled.View`
  border-radius: 8px;
  width: 16px;
  height: 16px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: -5px;
  left: 15px;
`;

export const BadgeNumber = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 8px;
`;
