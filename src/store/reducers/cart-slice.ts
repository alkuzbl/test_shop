import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loadDataStorage } from 'dal';
import { placeOrder } from 'store/middlewares/placeOrder';
import { Nullable, StatusType } from 'types';

export type CartType = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};
export type CartDataType = {
  cart: CartType[];
  totalCost: number;
  totalNumber: number;
};
export type CartInitialStateType = {
  data: CartDataType;
  error: Nullable<string>;
  status: StatusType;
};

const createInitialState = (): CartInitialStateType => {
  let cartData = loadDataStorage('data');
  if (!cartData) {
    cartData = { cart: [], totalCost: 0, totalNumber: 0 };
  }
  return { data: cartData, error: null, status: 'idle' };
};

const cartSlice = createSlice({
  name: 'data',
  initialState: createInitialState(),
  reducers: {
    addItemCart: (state, action: PayloadAction<CartType>) => {
      const arrayProductsId = state.data.cart.map(item => item.id);
      if (!arrayProductsId.includes(action.payload.id)) {
        state.data.cart.push(action.payload);
      } else {
        const item = state.data.cart.find(({ id }) => id === action.payload.id);
        if (item) {
          item.quantity += 1;
        }
      }
      state.data.totalNumber += 1;
      state.data.totalCost = state.data.cart.reduce(
        (totalCostItem, { price, quantity }) => (totalCostItem += price * quantity),
        0,
      );
    },
    setQuantityItem: (state, action) => {
      const item = state.data.cart.find(({ id }) => id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.data.totalCost = state.data.cart.reduce(
          (totalCostItem, { price, quantity }) => (totalCostItem += price * quantity),
          0,
        );
        state.data.totalNumber = state.data.cart.reduce(
          (totalQuantityItem, { quantity }) => (totalQuantityItem += quantity),
          0,
        );
      }
    },
    removeItem: (state, action) => {
      state.data.cart = state.data.cart.filter(item => item.id !== action.payload);
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(placeOrder.fulfilled, state => {
      state.data.cart = [];
      state.data.totalCost = 0;
      state.data.totalNumber = 0;
    });
  },
});

export const { addItemCart, setError, removeItem, setQuantityItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
