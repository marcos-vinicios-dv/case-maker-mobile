import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #202a36;
  padding: 0 16px;
`;

export const Image = styled.Image`
  width: 160px;
  height: 160px;

  border-radius: 80px;
  position: absolute;

  z-index: -1;
`;

export const NameUser = styled.Text`
  color: #f2f2f2;
  font-family: 'Roboto-Bold';
  font-size: 24px;

  margin-top: 16px;
`;

export const EmailUser = styled.Text`
  color: #2e3a48;
  font-family: 'Roboto-Medium';
  font-size: 20px;
`;

export const ContainerButtons = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => (props.active ? '#f2f2f2' : '#2e3a48')};
  font-family: 'Roboto-Medium';
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => (props.active ? '#00d172' : 'transparent')};
  border-radius: 4px;
  padding: 8px 16px;
`;

export const ButtonSelectImage = styled.TouchableOpacity`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: ${(props) =>
    props.disabled ? 'rgba(26, 26, 26, 0)' : 'rgba(26, 26, 26, 0.8)'};

  justify-content: center;
  align-items: center;

  z-index: 2;
`;

export const ButtonSelectImageText = styled.Text`
  color: #d1d1d1;
  font-family: 'Roboto-Medium';
  font-size: 16px;

  margin-top: 8px;
`;
