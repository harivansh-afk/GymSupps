import React from 'react';
import { createRoot } from 'react-dom/client';
import { ShopifyProvider } from '@shopify/hydrogen-react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShopifyProvider
      storeDomain={import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}
      storefrontToken={import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN}
      storefrontApiVersion="2024-01"
      countryIsoCode="US"
      languageIsoCode="EN"
    >
      <App />
    </ShopifyProvider>
  </React.StrictMode>
);
