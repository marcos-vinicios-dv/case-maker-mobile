import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../input/input';
import { Container, Title, SubmitButton, TextButton } from './styles';
import { updateUser } from '../../../store/modules/user/actions';
import api from '../../../services/api';

const editUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

const EditForm = ({ editable = false, onSetEditable }) => {
  const user = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { control, handleSubmit, formState, setValue, setError } = useForm({
    resolver: yupResolver(editUserFormSchema),
  });

  useEffect(() => {
    setValue('name', user.nome);
    setValue('email', user.email);
    setValue('password', '');
    setValue('password_confirmation', '');
  }, [setValue, user]);

  const { errors } = formState;

  const onSubmit = async ({ email, name, password }) => {
    try {
      setIsLoading(true);

      const response = await api.put(
        'usuarios',
        {
          email,
          nome: name,
          password,
        },
        {
          headers: {
            Authorization: `CaseMaker ${user.token}`,
          },
        }
      );

      const { usuario } = await response.data;

      dispatch(updateUser(usuario));

      const serialUser = JSON.stringify({
        email: data.usuario.email,
        nome: data.usuario.nome,
        token: data.usuario.token,
        _id: data.usuario._id,
        imageUrl: data.usuario.imageUrl,
      });

      AsyncStorage.setItem('@caseMaker:user', serialUser);
      onSetEditable(false);
    } catch (e) {
      if (e.response.status === 500) {
        if (e.response.data.errors.email.message === 'Email já cadastrado!') {
          setError('email', {
            type: 'validate',
            message: e.response.data.errors.email.message,
          });
        }
      }
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Editar</Title>

      <View>
        <Input
          name="name"
          control={control}
          placeholder="Nome"
          error={errors.name}
          editable={editable}
        />
        <Input
          name="email"
          control={control}
          placeholder="E-mail"
          error={errors.email}
          editable={editable}
        />
        <Input
          name="password"
          control={control}
          placeholder="Senha"
          secureTextEntry
          error={errors.password}
          editable={editable}
        />
        <Input
          name="password_confirmation"
          control={control}
          placeholder="Confirmar senha"
          secureTextEntry
          error={errors.password_confirmation}
          editable={editable}
        />
      </View>

      <SubmitButton
        onPress={handleSubmit(onSubmit)}
        editable={editable}
        disabled={!editable}
      >
        <TextButton editable={editable}>
          {isLoading ? 'Alterando...' : 'Alterar'}
        </TextButton>
      </SubmitButton>
    </Container>
  );
};

export default EditForm;
