import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';
import { FavoriteProvider } from './hooks/favorite';
import { CartProvider } from './hooks/cart';


import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
      <CartProvider>
      <FavoriteProvider>
        <Routes/>
      </FavoriteProvider>
      </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
