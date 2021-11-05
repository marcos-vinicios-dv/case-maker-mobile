import { DrawerContentScrollView } from '@react-navigation/drawer';
import styled from 'styled-components/native';

export const Container = styled(DrawerContentScrollView)`
  background-color: #202a36;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  margin: 24px 0;
`;

export const NameUser = styled.Text`
  color: #f2f2f2;
  font-family: 'Roboto-Bold';
  font-size: 20px;

  margin-top: 16px;
`;

export const EmailUser = styled.Text`
  color: #2e3a48;
  font-family: 'Roboto-Medium';
  font-size: 16px;
`;

export const ButtonNavigation = styled.TouchableOpacity`
  padding: 0 20px;
  margin-top: 16px;

  flex-direction: row;
  align-items: baseline;
`;

export const TextButtonNavigation = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Medium';
  margin-left: 8px;
  color: ${(props) => (props.active ? '#00d172' : '#f2f2f2')};
`;

export const ImageUser = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 40px;
`;
