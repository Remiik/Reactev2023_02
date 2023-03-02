import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//Import du product provider
import ProductProvider from './contexts/ProductContext';
//Import du provider de la barre de navigation & du panier
import SidebarProvider from './contexts/SideBarContext';
import CartProvider from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
