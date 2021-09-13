/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Logo from '../../assets/images/logo.png';
import SignInForm from '../../components/forms/SignInForm';
import SignUpForm from '../../components/forms/SignUpForm';
import {Container, Image, ToggleForm, LabelTouchable} from './styles';

const SignInOrSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <Container>
      <Image source={Logo} />
      {isSignUp ? <SignInForm /> : <SignUpForm />}
      <ToggleForm>
        <Text style={{color: '#d1d1d1'}}>
          {isSignUp ? 'Não tem uma conta? ' : 'Já possui uma conta?  Faça'}
        </Text>
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <LabelTouchable>{isSignUp ? 'Cadastre-se' : 'Login'}</LabelTouchable>
        </TouchableOpacity>
      </ToggleForm>
    </Container>
  );
};

export default SignInOrSignUp;
