import React, { useState, useEffect } from 'react';
import { Text, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconCart from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings';

import api from '../../services/api';

import SessionDataSheet from '../../components/SessionsDataSheet';

import {
  Container,
  ButtonReturnPresets,
  Header,
  ReturnText,
  ProductImage,
  CaseContainer,
  ProductTitle,
  Description,
  BoxFooterInfo,
  ProductPrice,
  ButtonAddToCart,
  TextButton,
  SpecificationsTitle,
  TextFooter,
  RatingContainer,
} from './styles';
import { useDispatch } from 'react-redux';
import { addProductToCartRequest } from '../../store/modules/cart/actions';

const Product = ({ navigation, route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const [dataSheet, setDataSheet] = useState({});

  useEffect(() => {
    async function loadDataSheet() {
      const { data } = await api.get(`ficha/${product._id}`);

      setDataSheet(data.ficha_tecnica[0]);
    }
    loadDataSheet();
  }, []);

  const handleAddToCart = () => {
    dispatch(addProductToCartRequest(product));

    setTimeout(() => {
      navigation.navigate('Cart');
    }, 500);
  };

  return (
    <Container>
      <Header>
        <ButtonReturnPresets onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={20} color="#f2f2f2" />
          <ReturnText>Presets</ReturnText>
        </ButtonReturnPresets>
      </Header>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <CaseContainer>
          <ProductImage source={{ uri: product.Imagem_URL }} />
        </CaseContainer>

        <ProductTitle>{product.titulo}</ProductTitle>
        <Description>{product.descricao}</Description>

        <RatingContainer>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={24}
            fractions={2}
            readonly
            startingValue={product.avaliacao}
            ratingColor="#eedc3f"
            ratingBackgroundColor="#808080"
            tintColor="#202a36"
            style={{
              width: 'auto',
              alignItems: 'flex-start',
              marginRight: 8,
            }}
          />
          <Text style={{ color: '#4C5B6D', fontFamily: 'Roboto-Medium' }}>
            ({product.avaliacoes.length})
          </Text>
        </RatingContainer>

        <BoxFooterInfo>
          <ProductPrice>
            R${' '}
            <Text style={{ fontSize: 28 }}>{product.preco_formatado[0]}</Text>,
            {product.preco_formatado[1]}
          </ProductPrice>

          <ButtonAddToCart onPress={handleAddToCart}>
            <IconCart name="cart" size={27} color="#f2f2f2" />
            <TextButton>Carrinho</TextButton>
          </ButtonAddToCart>
        </BoxFooterInfo>

        {!dataSheet?._id ? (
          <ActivityIndicator
            size="small"
            color="#00d172"
            style={{ marginTop: '10%' }}
          />
        ) : (
          <>
            <SpecificationsTitle>Ficha Técnica</SpecificationsTitle>
            <SessionDataSheet
              title={'Especificações'}
              content={dataSheet.especificacoes}
            />
            <SessionDataSheet
              title={'Placa-Mãe'}
              content={dataSheet.placa_mae}
            />
            <SessionDataSheet title={'Bais'} content={dataSheet.baias} />
            <SessionDataSheet
              title={'Dimensões'}
              content={[dataSheet.dimensoes]}
            />
            <TextFooter>
              * Produto não acompanha fans, imagem ilustrativa.
            </TextFooter>
          </>
        )}
      </ScrollView>
    </Container>
  );
};

export default Product;
