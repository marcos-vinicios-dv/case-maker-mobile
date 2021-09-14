import produce from 'immer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {email: '', nome: '', token: ''};

const setData = (draft, user) => {
  draft.email = user.email;
  draft.nome = user.nome;
  draft.token = user.token;
};

export const user = (state = INITIAL_STATE, {type, payload}) => {
  return produce(state, draft => {
    switch (type) {
      case '@user/SIGN_IN_USER':
        setData(draft, payload.user);
        break;

      case '@user/LOGOUT':
        AsyncStorage.removeItem('@caseMaker:user');
        draft.email = '';
        draft.nome = '';
        draft.token = '';
        break;

      case '@user/UPDATE_USER':
        setData(draft, payload.user);

        break;

      default:
        return draft;
    }
  });
};
