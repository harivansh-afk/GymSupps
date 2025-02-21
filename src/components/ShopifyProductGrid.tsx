import React from 'react';
import { ShopifyProductCard } from './ShopifyProductCard';
import { ShopifyProduct } from '../types/shopify';

export const ShopifyProductGrid: React.FC<{ products: ShopifyProduct[] }> = ({ products }) => {
  const handleProductSelect = (productId: string) => {
    // Handle product selection - you can implement navigation to product details page
    console.log('Selected product:', productId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ShopifyProductCard
          key={product.id}
          product={product}
          onSelect={handleProductSelect}
        />
      ))}
    </div>
  );
};
