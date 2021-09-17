import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #202a36;
  padding: 0 16px;
`;

export const FlatBrand = styled.TouchableOpacity`
  padding: 4px 8px;

  margin: 0 16px 0 -7px;
`;

export const TextButtonBrand = styled.Text`
  color: ${props => (props.active ? '#f2f2f2' : '#2e3a48')};
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;

export const InfoAndFilter = styled.View`
  margin: 16px 0 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FoundItems = styled.Text`
  color: #2e3a48;
  font-family: 'Roboto-Medium';
  font-size: 18px;
`;
