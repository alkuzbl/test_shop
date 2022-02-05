import { createSlice } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import image2 from 'assets/images/image_600_450.png';
import image3 from 'assets/images/image_600_500.png';
import image4 from 'assets/images/image_650_400.png';
import image1 from 'assets/images/img1.png';
import { ProductSliceType } from 'store/reducers/types';

const productData: ProductSliceType = {
  status: 'idle',
  error: null,
  data: [
    {
      id: v1(),
      title: 'Щетки стеклоочистителя Bosch Aerotwin AR601S',
      image: image1,
      description: [
        { id: v1(), name: 'Производитель', title: 'Bosch' },
        { id: v1(), name: 'Рейтинг', title: 5 },
        { id: v1(), name: 'Серия', title: 'Bosch Aerotwin' },
        { id: v1(), name: 'Конструкция', title: 'Бескаркасная' },
        { id: v1(), name: 'Крепление', title: 'Крючок 9x3, Крючок 9x4' },
        { id: v1(), name: 'Длина 1', title: 600 },
        { id: v1(), name: 'Длина 2', title: 400 },
      ],
      buttonText: 'buy',
      isAvailable: true,
      price: 66,
    },
    {
      id: v1(),
      title: 'Щетки стеклоочистителя Bosch Aerotwin A312S',
      image: image2,
      description: [
        { id: v1(), name: 'Производитель', title: 'Bosch' },
        { id: v1(), name: 'Рейтинг', title: 5 },
        { id: v1(), name: 'Серия', title: 'Bosch Aerotwin' },
        { id: v1(), name: 'Конструкция', title: 'Бескаркасная' },
        { id: v1(), name: 'Крепление', title: 'VATL5.1' },
        { id: v1(), name: 'Длина 1', title: 600 },
        { id: v1(), name: 'Длина 2', title: 450 },
      ],
      buttonText: 'buy',
      isAvailable: true,
      price: 28,
    },
    {
      id: v1(),
      title: 'Щетки стеклоочистителя Bosch Aerotwin A297S',
      image: image3,
      description: [
        { id: v1(), name: 'Производитель', title: 'Bosch' },
        { id: v1(), name: 'Рейтинг', title: 5 },
        { id: v1(), name: 'Серия', title: 'Bosch Aerotwin' },
        { id: v1(), name: 'Конструкция', title: 'Бескаркасная' },
        { id: v1(), name: 'Крепление', title: 'Push Button 19mm' },
        { id: v1(), name: 'Длина 1', title: 600 },
        { id: v1(), name: 'Длина 2', title: 500 },
      ],
      buttonText: 'buy',
      isAvailable: true,
      price: 65,
    },
    {
      id: v1(),
      title: 'Щетки стеклоочистителя Bosch Aerotwin AR653S',
      image: image4,
      description: [
        { id: v1(), name: 'Производитель', title: 'Bosch' },
        { id: v1(), name: 'Рейтинг', title: 5 },
        { id: v1(), name: 'Серия', title: 'Bosch Aerotwin' },
        { id: v1(), name: 'Конструкция', title: 'Бескаркасная' },
        { id: v1(), name: 'Крепление', title: 'Крючок 9x3, Крючок 9x4' },
        { id: v1(), name: 'Длина 1', title: 650 },
        { id: v1(), name: 'Длина 2', title: 400 },
      ],
      buttonText: 'buy',
      isAvailable: true,
      price: 54,
    },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState: productData,
  reducers: {},
  extraReducers: {},
});

// const {} = productSlice.actions;

export const productReducer = productSlice.reducer;
