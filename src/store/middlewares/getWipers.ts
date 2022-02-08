import { createAsyncThunk } from '@reduxjs/toolkit';

import { wipersApi } from 'dal/wipers-api';

export const getWipers = createAsyncThunk(
  'product/getWipers',
  async (_, { rejectWithValue }) => {
    try {
      const wipers = await wipersApi.getWipers();
      return wipers.data.wipers;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
