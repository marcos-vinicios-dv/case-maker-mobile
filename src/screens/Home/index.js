import React from 'react';
import CardProduct from '../../components/CardProduct';

import Header from '../../components/Header';

import {PageTitle} from '../../styles/commonStyles';
import {Container} from './styles';

const Home = props => {
  return (
    <>
      <Header {...props} />
      <Container>
        <PageTitle>Presets</PageTitle>
        <CardProduct />
      </Container>
    </>
  );
};

export default Home;
