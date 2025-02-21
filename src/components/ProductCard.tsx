import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types/product';
import { useCartStore } from '../store/cartStore';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface ProductCardProps {
  product: Product;
  onSelect: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Card className="cursor-pointer" onClick={() => onSelect(product.id)}>
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
            {product.category}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addItem(product);
          }}
          className="w-full"
          size="lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};