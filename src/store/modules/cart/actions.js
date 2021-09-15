export const addProductToCartRequest = product => {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: {
      product,
    },
  };
};

export const addProductToCartSuccess = product => {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: {
      product,
    },
  };
};

export const addProductToCartFailure = productId => {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAILURE',
    payload: {
      productId,
    },
  };
};

export const updateProductQuantityRequest = (productId, quantity) => {
  return {
    type: 'UPDATE_QUANTITY_PRODUCT_REQUEST',
    payload: {
      productId,
      quantity,
    },
  };
};

export const updateProductQuantitySuccess = (productId, quantity) => {
  return {
    type: 'UPDATE_QUANTITY_PRODUCT_SUCCESS',
    payload: {
      productId,
      quantity,
    },
  };
};

export const removeProductFromCart = productId => {
  return {
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: {
      productId,
    },
  };
};
