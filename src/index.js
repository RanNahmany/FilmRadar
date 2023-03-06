import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './components/App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#283593',
    },
    secondary: {
      main: '#1c6bc0',
    },
  },
});

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);
