import { createAsyncThunk } from '@reduxjs/toolkit';

import { orderApi } from 'dal/order-api';
import { RootState } from 'store/types';

type DataForPlacingOrderType = {
  name: string;
  email: string;
  phone: number;
};
export const placeOrder = createAsyncThunk<
  void,
  DataForPlacingOrderType,
  {
    state: RootState;
  }
>('cart/placeOrder', async (data, { getState }) => {
  const dataForPlacingOrder = getState().cart.data.cart;
  try {
    await orderApi.setOrder({ ...data, dataItem: dataForPlacingOrder });
    localStorage.clear();
  } catch (e) {
    console.log(e);
  }
});
