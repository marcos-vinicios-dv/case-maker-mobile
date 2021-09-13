import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 100%;

  background-color: #232e3b;
  border-radius: 4px;
  margin-top: 26px;
  padding: 4px 12px;

  border: ${props => (props.focus ? '1px' : 0)} solid #00d172;

  position: relative;
`;

export const StyledInput = styled.TextInput`
  color: #d1d1d1;
  font-size: 16px;
`;

export const Error = styled.Text`
  color: #00d172;
  font-size: 16px;
  position: absolute;
  top: 120%;
`;
