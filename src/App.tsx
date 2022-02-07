import React from 'react';

import './App.css';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from 'components';
import { MainPage, CartPage } from 'view';

export const App = () => (
  <div className="App">
    <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
    <CssBaseline />
    <Header />
    <Routes>
      <Route path="wipers" element={<MainPage />} />
      <Route path="wipers/cart" element={<CartPage />} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/" element={<Navigate to="wipers" />} />
    </Routes>
  </div>
);
