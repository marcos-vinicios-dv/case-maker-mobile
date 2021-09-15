import produce from 'immer';

const INITIAL_STATE = {
  items: [],
  failedStockCheck: [],
};

export const cart = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS': {
        const {product} = action.payload;

        const productInCartIndex = draft.items.findIndex(
          item => item.product._id === product._id,
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }

      case 'ADD_PRODUCT_TO_CART_FAILURE': {
        draft.failedStockCheck.push(action.payload.productId);
        break;
      }

      case 'UPDATE_QUANTITY_PRODUCT_SUCCESS': {
        const productIndex = draft.items.findIndex(
          item => item.product._id === action.payload.productId,
        );

        if (productIndex >= 0) {
          draft.items[productIndex].quantity = Number(action.payload.quantity);
        }

        break;
      }

      case 'REMOVE_PRODUCT_FROM_CART': {
        const productIndex = draft.items.findIndex(
          item => item.product._id === action.payload.productId,
        );

        if (productIndex >= 0) {
          draft.items.splice(productIndex, 1);
        }
        break;
      }

      default:
        return state;
    }
  });
};
