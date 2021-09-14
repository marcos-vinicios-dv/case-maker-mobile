import styled from 'styled-components/native';
import {MenuItem} from 'react-native-material-menu';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const AnchorText = styled.Text`
  color: #00d172;
  font-size: 18px;
  font-family: 'Roboto-Medium';
`;

export const MenuItemStyled = styled(MenuItem)`
  color: #d1d1d1;
  font-size: 18px;
`;
