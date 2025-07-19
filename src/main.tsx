import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline } from '@mui/material';
import { Global, css } from '@emotion/react';
import '@styles/global.css';

const globalStyles = css({
  body: {
    margin: 0,
    padding: 0,
    minWidth: '330px',
    paddingBottom: 'env(safe-area-inset-bottom, 0)',
  },
  html: {
    margin: 0,
    padding: 0,
    minWidth: '330px',
  },
  '#root': {
    margin: 0,
    padding: 0,
    minWidth: '330px',
  },
  '*': {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: `Sora, 'Open Sans', Roboto, monospace, sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
