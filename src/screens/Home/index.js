/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import CardProduct from '../../components/CardProduct';

import Header from '../../components/Header';

import {PageTitle} from '../../styles/commonStyles';
import {
  Container,
  FlatBrand,
  TextButtonBrand,
  InfoAndFilter,
  FoundItems,
} from './styles';

const brands = ['Todas', 'Thermaltake', 'Cougar', 'Aigo'];

const Home = props => {
  const brand = 'Todas';
  return (
    <>
      <Header {...props} />
      <Container>
        <PageTitle>Presets</PageTitle>
        <View>
          <FlatList
            keyExtractor={item => item}
            ItemSeparatorComponent={() => <View style={{width: 16}} />}
            showsHorizontalScrollIndicator={false}
            data={brands}
            horizontal
            renderItem={({item}) => {
              return (
                <FlatBrand active={brand === item}>
                  <TextButtonBrand active={brand === item}>
                    {item}
                  </TextButtonBrand>
                </FlatBrand>
              );
            }}
          />
        </View>
        <InfoAndFilter>
          <FoundItems>3 Produtos</FoundItems>
        </InfoAndFilter>
        <CardProduct />
      </Container>
    </>
  );
};

export default Home;
