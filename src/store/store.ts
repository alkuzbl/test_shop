import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { saveDataStorage } from 'dal';
import { cartReducer } from 'store/reducers/cart-slice';
import { productReducer } from 'store/reducers/product-slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  saveDataStorage('data', store.getState().cart.data);
});
