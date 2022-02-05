import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { DescriptionElementPropsType } from 'components/DescriptionElement/types';

export const DescriptionElement: FC<DescriptionElementPropsType> = ({ title, name }) => (
  <Box sx={{ display: 'flex' }}>
    <Typography
      sx={{ width: '50%' }}
      component="p"
      variantMapping={{ body1: 'p' }}
      align="left"
      color="text.primary"
      gutterBottom
    >
      {name}
    </Typography>
    <Typography
      sx={{ width: '50%' }}
      component="p"
      variantMapping={{ body1: 'p' }}
      align="left"
      color="text.primary"
      gutterBottom
    >
      {title}
    </Typography>
  </Box>
);
