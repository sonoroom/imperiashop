import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './hooks/use-cart';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <ToastProvider />
        <CartProvider>
          <App />
        </CartProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
);