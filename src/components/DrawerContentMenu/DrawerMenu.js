import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import IconHome from 'react-native-vector-icons/MaterialIcons';
import IconCart from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import ProfileImage from '../../assets/images/profile.png';

import {
  Container,
  ButtonNavigation,
  TextButtonNavigation,
  ProfileContainer,
  EmailUser,
  NameUser,
} from './styles';

const DrawerMenu = props => {
  const user = useSelector(state => state.user);
  return (
    <Container {...props}>
      <ProfileContainer>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
          <Image source={ProfileImage} />
        </TouchableOpacity>
        <NameUser>{user.nome}</NameUser>
        <EmailUser>{user.email}</EmailUser>
      </ProfileContainer>
      <ButtonNavigation onPress={() => props.navigation.navigate('Home')}>
        <IconHome
          name="home"
          size={24}
          color={props.state.index === 1 ? '#00d172' : '#f2f2f2'}
        />
        <TextButtonNavigation active={props.state.index === 1}>
          Home
        </TextButtonNavigation>
      </ButtonNavigation>
      <ButtonNavigation onPress={() => props.navigation.navigate('Cart')}>
        <IconCart
          name="cart"
          size={24}
          color={props.state.index === 3 ? '#00d172' : '#f2f2f2'}
        />
        <TextButtonNavigation active={props.state.index === 3}>
          Carrinho
        </TextButtonNavigation>
      </ButtonNavigation>
    </Container>
  );
};

export default DrawerMenu;
