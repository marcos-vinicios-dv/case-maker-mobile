import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

import CardProduct from '../../components/CardProduct';
import DropdownScreen from '../../components/DropMenu';
import Header from '../../components/Header';
import api from '../../services/api';

import { PageTitle } from '../../styles/commonStyles';
import {
  Container,
  FlatBrand,
  TextButtonBrand,
  InfoAndFilter,
  FoundItems,
} from './styles';

const brands = ['Todas', 'Thermaltake', 'Cougar', 'Aigo'];

async function getProducts() {
  const { categoria } = (await api.get('categorias/Padrao')).data;

  const promises = categoria.produtos.map(async (product) => {
    const data = (await api.get(`avaliacoes?produto=${product._id}`)).data;

    return {
      ...product,
      avaliacao: data.avaliacoes[0]?.pontuacao ?? 0,
      preco_formatado: product.preco.toFixed(2).split('.'),
    };
  });

  const formattingProducts = await Promise.all(promises);

  return formattingProducts;
}

const orders = (arr, by) => {
  const order = {
    'Menor Preço': () => {
      return arr.sort((a, b) => {
        if (b.preco > a.preco) return -1;
        if (b.preco < a.preco) return 1;
      });
    },
    'Maior Preço': () => {
      return arr.sort((a, b) => {
        if (b.preco < a.preco) return -1;
        if (b.preco > a.preco) return 1;
      });
    },
  };
  return order[by]();
};

const Home = (props) => {
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [brand, setBrand] = useState('Todas');
  const [orderBy, setOrderBy] = useState('Ordenar');
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function filterProducts() {
      setLoadingProducts(true);
      const defaultList = await getProducts();
      let productListFiltered = defaultList;

      if (brand !== 'Todas') {
        productListFiltered = defaultList.filter(
          (product) => product.marca === brand
        );
      }

      if (orderBy !== 'Ordenar') {
        productListFiltered = orders(productListFiltered, orderBy);
      }

      setProductList(productListFiltered);
      setLoadingProducts(false);
    }
    filterProducts();
    AsyncStorage.removeItem('@caseMaker:messageCart');
  }, [brand, orderBy]);

  return (
    <>
      <Header {...props} />
      <Container>
        <PageTitle>Presets</PageTitle>
        <View>
          <FlatList
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            data={brands}
            horizontal
            renderItem={({ item }) => {
              return (
                <FlatBrand
                  active={brand === item}
                  onPress={() => setBrand(item)}
                >
                  <TextButtonBrand active={brand === item}>
                    {item}
                  </TextButtonBrand>
                </FlatBrand>
              );
            }}
          />
        </View>
        <InfoAndFilter>
          <FoundItems>{productList.length} Produtos</FoundItems>
          <DropdownScreen orderBy={orderBy} onSetOrderBy={setOrderBy} />
        </InfoAndFilter>
        {loadingProducts ? (
          <ActivityIndicator
            size="small"
            color="#00d172"
            style={{ marginTop: '50%' }}
          />
        ) : (
          <FlatList
            data={productList}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardProduct
                onSelect={() =>
                  props.navigation.navigate('Product', {
                    product: item,
                  })
                }
                product={item}
              />
            )}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
