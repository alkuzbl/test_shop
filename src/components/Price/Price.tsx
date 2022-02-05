import React, { FC } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { PricePropsType } from 'components/Price/types';
import { addItemCart } from 'store/reducers/cart-slice';

export const Price: FC<PricePropsType> = ({
  price,
  titleButton,
  isAvailable,
  title,
  id,
  image,
}) => {
  const dispatch = useDispatch();

  const handleAddItemCart = () => {
    const cartData = { id, title, image, price, quantity: 1 };
    dispatch(addItemCart(cartData));
  };
  return (
    <Box component="div" textAlign="center">
      <Typography
        fontSize={18}
        fontWeight={600}
        color={isAvailable ? 'black' : 'red'}
        mb={1}
      >
        {price} <span> руб.</span>
      </Typography>
      <Button
        disabled={!isAvailable}
        variant="outlined"
        color="success"
        fullWidth
        onClick={handleAddItemCart}
      >
        {isAvailable ? titleButton : 'Отсутствует на складе'}
      </Button>
    </Box>
  );
};
