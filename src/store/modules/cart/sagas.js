import {all, takeLatest, select, call, put} from 'redux-saga/effects';
import {
  addProductToCartFailure,
  addProductToCartSuccess,
  updateProductQuantitySuccess,
} from './actions';

import api from '../../../services/api';
import Toast from 'react-native-toast-message';

function* checkProductStock({payload}) {
  const {product} = payload;

  const currentQuantity = yield select(state => {
    return (
      state.cart.items.find(item => item.product._id === product._id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse = yield call(
    api.get,
    `estoque?produto=${product._id}`,
  );

  if (availableStockResponse.data.estoque[0].quantidade > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product._id));
    Toast.show({
      type: 'my_custom_Error',
      text1: 'Quantidade fora de estoque!',
      visibilityTime: 1000,
    });
  }
}

function* updateProductQuantity({payload}) {
  if (payload.quantity <= 0) {
    return;
  }

  const availableStockResponse = yield call(
    api.get,
    `estoque?produto=${payload.productId}`,
  );

  const quantityInStock = availableStockResponse.data.estoque[0].quantidade;

  if (quantityInStock < payload.quantity) {
    Toast.show({
      type: 'my_custom_Error',
      text1: 'Quantidade fora de estoque!',
      visibilityTime: 1000,
    });
    return;
  }

  yield put(updateProductQuantitySuccess(payload.productId, payload.quantity));
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock),
  takeLatest('UPDATE_QUANTITY_PRODUCT_REQUEST', updateProductQuantity),
]);
