import React from 'react';

import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { DescriptionElement, Price } from 'components';
import { WiperType } from 'store/reducers/types';
import { RootState } from 'store/types';

export const MainPage = () => {
  const wipers = useSelector<RootState, WiperType[]>(state => state.product.data);

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
          Щетки стеклоочистителя
        </Typography>
      </Container>
      <Container maxWidth="md" component="main" sx={{ pb: 6 }}>
        <Grid container spacing={5} alignItems="flex-end">
          {wipers.map(
            ({ id, title, image, buttonText, description, price, isAvailable }) => (
              <Grid item key={id} xs={12}>
                <Typography fontWeight={500} fontSize={24} mb={1}>
                  {title}
                </Typography>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={5}>
                    <img src={image} alt="product" />
                  </Grid>
                  <Grid item xs={5}>
                    {description.map(element => (
                      <DescriptionElement
                        key={element.id}
                        name={element.name}
                        title={element.title}
                      />
                    ))}
                  </Grid>
                  <Grid item xs={2}>
                    <Price
                      id={id}
                      image={image}
                      title={title}
                      price={price}
                      titleButton={buttonText}
                      isAvailable={isAvailable}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ),
          )}
        </Grid>
      </Container>
    </>
  );
};
