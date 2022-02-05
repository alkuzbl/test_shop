import { createAsyncThunk } from '@reduxjs/toolkit';

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
>('cart/placeOrder', (data, { getState }) => {
  const dataForPlacingOrder = getState().cart.data.cart;

  console.log({ ...data, dataItem: dataForPlacingOrder });
  // console.log(JSON.stringify({ ...data, dataItem: dataForPlacingOrder }));
  localStorage.clear();
});
