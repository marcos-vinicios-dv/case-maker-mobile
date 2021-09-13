import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;

  background-color: #202a36;
`;

export const QuantityItemsInCart = styled.View`
  width: 16px;
  height: 16px;

  background-color: #de3636;
  border-radius: 100px;

  justify-content: center;
  align-items: center;

  position: absolute;
  right: -5px;
  z-index: 1;
`;
