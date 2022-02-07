import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { IconCart } from 'components';

export const Header = () => {
  const navigate = useNavigate();

  const handleClickGoMainPage = () => navigate('wipers', { replace: true });

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={handleClickGoMainPage}
        >
          Продажа щеток стеклоочистителя
        </Typography>
        <IconCart />
      </Toolbar>
    </AppBar>
  );
};
