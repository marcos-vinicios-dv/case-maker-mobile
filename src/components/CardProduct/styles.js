import styled from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  flex-direction: row;

  background-color: #232e3b;
  border-radius: 4px;

  padding: 20px 16px;
  margin-bottom: 16px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 92px;
`;

export const Info = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProductTitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  color: #f2f2f2;
`;

export const SubTitle = styled.Text`
  font-family: 'Roboto-Medium';
  color: #3c4856;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  margin-top: auto;

  font-family: 'Roboto-Bold';
  font-size: 13px;
  color: #f2f2f2;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  margin-top: auto;
  width: 28px;
  height: 28px;
  background-color: #202a36;

  border-radius: 14px;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 20px;
  right: 16px;
`;

export const QuantityDisplay = styled.View`
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 20px;
  right: 16px;
`;

export const LabelDisplay = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #d1d1d1;

  margin: 0 16px;
`;

export const SwipeableRightContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 16px;

  background-color: #de3636;
  border-radius: 4px;
  width: 100%;
  height: 131px;
`;

export const TextSwipeable = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #f2f2f2;
  margin-right: 16px;
`;
