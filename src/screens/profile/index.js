/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';

import {
  NameUser,
  EmailUser,
  ContainerButtons,
  Button,
  ButtonText,
  Image,
  Container,
} from './styles';
import ProfileImage from '../../assets/images/profile.png';
import EditForm from '../../components/forms/EditForm';

const Profile = props => {
  const active = true;
  return (
    <>
      <Header {...props} />
      <Container>
        <View style={{alignItems: 'center'}}>
          <Image source={ProfileImage} />

          <NameUser>Marcos Vinicios Teixeira</NameUser>
          <EmailUser>marquinpray@gmial.com</EmailUser>

          <ContainerButtons>
            <Button active={!active}>
              <ButtonText active={!active}>
                {active ? 'Editar' : 'Cancelar'}
              </ButtonText>
            </Button>
            <Button active={active}>
              <ButtonText active={active}>Sair</ButtonText>
            </Button>
          </ContainerButtons>

          <EditForm editable={!active} />
        </View>
      </Container>
    </>
  );
};

export default Profile;
