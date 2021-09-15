/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import Logo from '../../assets/images/logo.png';
import SignInForm from '../../components/forms/SignInForm';
import SignUpForm from '../../components/forms/SignUpForm';
import {Container, Image, ToggleForm, LabelTouchable} from './styles';
import {signInUser} from '../../store/modules/user/actions';

const SignInOrSignUp = ({navigation}) => {
  const user = useSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const loading = async () => {
      const userDataJson = await AsyncStorage.getItem('@caseMaker:user');

      setIsLoading(true);
      try {
        const userData = JSON.parse(userDataJson);
        if (userData && userData.email) {
          navigation.navigate('Home');
          dispatch(signInUser(userData));
        } else {
          setIsLoading(false);
          navigation.navigate('Auth');
        }
      } catch (e) {
        console.log(e);
      }
    };
    loading();
  }, [dispatch, navigation]);

  const handleSignUp = () => {
    setIsSignUp(false);
  };

  useEffect(() => {
    !!user.email && setIsLoading(false);
  }, [user.email]);

  return (
    <Container>
      <Image source={Logo} />
      {!isLoading && (
        <>
          {isSignUp ? (
            <SignUpForm onSetSignUp={handleSignUp} />
          ) : (
            <SignInForm />
          )}
          <ToggleForm>
            <Text style={{color: '#d1d1d1'}}>
              {isSignUp ? 'Não tem uma conta? ' : 'Já possui uma conta?  Faça'}
            </Text>
            <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
              <LabelTouchable>
                {isSignUp ? 'Login' : 'Cadastre-se'}
              </LabelTouchable>
            </TouchableOpacity>
          </ToggleForm>
        </>
      )}
    </Container>
  );
};

export default SignInOrSignUp;
