import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import theme from "./styles/theme";
import GlobalStyles from './styles/global';

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Home } from './pages/Home';

register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
