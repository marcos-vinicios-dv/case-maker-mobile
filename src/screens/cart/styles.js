import styled from 'styled-components/native';

export const CheckoutContainer = styled.View`
  margin: auto 0 16px;

  align-items: center;
`;

export const SubText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #3c4856;

  margin: 8px 16px 0 0;
`;

export const TotalPrice = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: #f2f2f2;
`;

export const CheckoutButton = styled.TouchableOpacity`
  background-color: #00d172;
  border-radius: 4px;

  margin-top: 16px;
  padding: 8px 0;
  width: 100%;

  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: #f2f2f2;
`;

export const TextEmptyCart = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #d1d1d1;
`;
