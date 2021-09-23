import React from 'react';
import styled from 'styled-components/native';

const SessionDataSheet = ({ title = 'Titulo', content = [] }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {content.map((item, i) => (
        <ItemText key={item + i}>- {item}</ItemText>
      ))}
    </Container>
  );
};

export default SessionDataSheet;

const Container = styled.View`
  margin-top: 20px;
`;

const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #f2f2f2;

  margin-bottom: 8px;
`;

const ItemText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: #d1d1d1;
`;
