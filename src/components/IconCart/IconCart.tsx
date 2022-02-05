import React from 'react';

import { Box, Icon, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import cart from 'assets/images/cart.svg';
import { CartDataType } from 'store/reducers/cart-slice';
import { RootState } from 'store/types';

export const IconCart = () => {
  const navigate = useNavigate();

  const { totalNumber, totalCost } = useSelector<RootState, CartDataType>(
    state => state.cart.data,
  );

  const handleClickCart = () => navigate('swipes/cart', { replace: true });
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {totalCost > 0 && (
        <Typography
          variant="subtitle1"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, cursor: 'pointer' }}
        >
          {totalCost} руб
        </Typography>
      )}
      <Icon
        sx={{
          my: 2,
          mx: 2,
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          zIndex: '100',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'inherit',
        }}
        onClick={handleClickCart}
      >
        <img src={cart} alt="cart" />
        {totalNumber > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '20px',
              height: '20px',
              backgroundColor: 'red',
              fontSize: '12px',
              borderRadius: '50%',
              color: 'white',
            }}
          >
            {totalNumber}
          </span>
        )}
      </Icon>
    </Box>
  );
};
