import React, { useState } from 'react';

import { Button, Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ModalOrder } from 'components/ModalOrder/ModalOrder';
import { CartDataType, CartType } from 'store/reducers/cart-slice';
import { RootState } from 'store/types';
import { Cart } from 'view/CartPage/Cart';

export const CartPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  const cartData = useSelector<RootState, CartType[]>(state => state.cart.data.cart);
  const { totalCost, totalNumber } = useSelector<RootState, CartDataType>(
    state => state.cart.data,
  );

  const handleClickOrderRegistration = () => setOpen(true);
  if (totalNumber < 1) {
    return <Navigate to="/swipes" />;
  }
  return (
    <>
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 12, pb: 3 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Корзина
        </Typography>
      </Container>
      <Container maxWidth="md" component="main" sx={{ pb: 6 }}>
        <Grid container spacing={5} alignItems="flex-end">
          {cartData.map(({ title, price, image, quantity, id }) => (
            <Cart
              key={id}
              id={id}
              title={title}
              count={quantity}
              price={price}
              image={image}
            />
          ))}
        </Grid>
        <Typography
          component="h6"
          variant="h6"
          align="right"
          color="text.primary"
          gutterBottom
        >
          Итого: {totalCost} руб.
        </Typography>
        <Button variant="outlined" onClick={handleClickOrderRegistration}>
          Оформить заказ
        </Button>
      </Container>
      <ModalOrder onClose={setOpen} open={open} />
    </>
  );
};
