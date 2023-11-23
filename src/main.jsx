import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import theme from "./styles/theme";
import GlobalStyles from './styles/global';

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Zer01ModasRoutes } from './routes';

import { MenuProvider } from './hooks/menu';
import { AuthProvider } from "./hooks/auth";
import { ProductsProvider } from "./hooks/products";
import { ProductAttributesProvider } from './hooks/productAttributes';
import { ProductDetailProvider } from './hooks/productDetails';

register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <MenuProvider>
        <AuthProvider>
          <ProductsProvider>
            <ProductAttributesProvider>
              <ProductDetailProvider>
                <Zer01ModasRoutes />
              </ProductDetailProvider>
            </ProductAttributesProvider>
          </ProductsProvider>
        </AuthProvider>
      </MenuProvider>
    </ThemeProvider>
  </React.StrictMode>,
)