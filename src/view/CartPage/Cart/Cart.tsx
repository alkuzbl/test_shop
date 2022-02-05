import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { Container, Grid, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { removeItem, setQuantityItem } from 'store/reducers/cart-slice';

type CartPropsType = {
  id: string;
  title: string;
  count: number;
  price: number;
  image: string;
};
export const Cart: FC<CartPropsType> = props => {
  const dispatch = useDispatch();

  const { count, title, id, price, image } = props;

  const [quantity, setQuantity] = useState<number>(count);
  const [cost, setCost] = useState<number>(price);

  const handleQuantityProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setQuantity(+e.currentTarget.value);
  };

  useEffect(() => {
    setCost(quantity * price);
    dispatch(setQuantityItem({ id, quantity }));
    if (quantity < 1) {
      dispatch(removeItem(id));
    }
  }, [quantity]);

  return (
    <Container maxWidth="md" component="main" sx={{ pb: 6 }}>
      <Grid container spacing={5} alignItems="flex-end">
        <Grid item xs={12}>
          <Typography fontWeight={500} fontSize={18} mb={1}>
            {title}
          </Typography>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={5}>
              <img src={image} alt="product" style={{ height: '100px' }} />
            </Grid>
            <Grid item xs={5}>
              <TextField
                type="number"
                onChange={handleQuantityProduct}
                value={quantity}
                InputProps={{
                  inputProps: {
                    max: 100,
                    min: 0,
                  },
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Typography>
                {cost}
                <span> руб</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
