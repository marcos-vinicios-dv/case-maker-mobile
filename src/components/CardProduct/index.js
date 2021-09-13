/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import IconPlus from 'react-native-vector-icons/AntDesign';

import Pc from '../../assets/images/pc.png';
import {
  CardContainer,
  Info,
  ButtonAddToCart,
  ProductTitle,
  SubTitle,
  ProductPrice,
  ProductImage,
  QuantityDisplay,
  LabelDisplay,
} from './styles';

const CardProduct = ({isProductInCart = false}) => {
  return (
    <CardContainer>
      <ProductImage source={Pc} />
      <Info>
        <ProductTitle>Thermaltake</ProductTitle>
        <SubTitle>Em estoque</SubTitle>
        <ProductPrice>
          R$ <Text style={{fontSize: 20}}>450</Text>,00
        </ProductPrice>
      </Info>

      {isProductInCart ? (
        <QuantityDisplay>
          <TouchableOpacity>
            <IconPlus name="minus" size={16} color="#00d172" />
          </TouchableOpacity>
          <LabelDisplay>1</LabelDisplay>
          <TouchableOpacity>
            <IconPlus name="plus" size={16} color="#00d172" />
          </TouchableOpacity>
        </QuantityDisplay>
      ) : (
        <ButtonAddToCart>
          <IconPlus name="plus" size={16} color="#00d172" />
        </ButtonAddToCart>
      )}
    </CardContainer>
  );
};

export default CardProduct;
