import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: #f2f2f2;

  margin-top: 24px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-self: flex-end;
  background-color: ${props => (props.editable ? '#00d172' : 'transparent')};
  border-radius: 4px;

  padding: 8px 16px;
  margin: 24px 0 16px;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: ${props => (props.editable ? '#f2f2f2' : '#3c4856')};
`;
