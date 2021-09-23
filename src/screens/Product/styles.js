import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #202a36;
  padding: 0 16px;
`;

export const ButtonReturnPresets = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ReturnText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #f2f2f2;

  margin-left: 8px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 16px 0;
`;

export const CaseContainer = styled.View`
  width: 100%;
  align-items: center;

  padding: 32px 0;
  margin: 8px 0 24px;

  background-color: #232e3b;
`;

export const ProductImage = styled.Image`
  width: 250px;
  height: 300px;
`;

export const ProductTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 28px;
  color: #f2f2f2;

  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #d1d1d1;
`;

export const BoxFooterInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
`;

export const ProductPrice = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 18px;
  color: #f2f2f2;
`;

export const ButtonAddToCart = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #00d172;
  border-radius: 4px;

  padding: 8px 16px;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #f2f2f2;
  margin-left: 8px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 20px;
`;

export const SpecificationsTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #f2f2f2;

  margin-top: 28px;
`;

export const TextFooter = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #f2f2f2;

  text-align: center;

  margin: 20px 0;
`;
