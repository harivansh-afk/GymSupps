import React from 'react';
import { ShopifyProductGrid } from '../components/ShopifyProductGrid';
import { mockProducts } from '../data/mockShopifyProducts';

export const ProductsPage: React.FC = () => {
  return <ShopifyProductGrid products={mockProducts} />;
};
