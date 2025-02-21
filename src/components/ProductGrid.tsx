import React from 'react';
import { Product } from '../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  category?: string;
  onProductSelect: (productId: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, category, onProductSelect }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onSelect={onProductSelect}
        />
      ))}
    </div>
  );
};