import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'your-store.myshopify.com',
    storefrontToken: 'your_storefront_api_token',
    storefrontApiVersion: '2024-01', // Use the latest API version
  },
  session: {
    storage: 'memory', // You can change this to 'redis' or other storage methods in production
  },
});
