import React from 'react';
import { Money, Image } from '@shopify/hydrogen-react';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ShopifyProduct } from '../types/shopify';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
  onSelect: (productId: string) => void;
}

export const ShopifyProductCard: React.FC<ShopifyProductCardProps> = ({ product, onSelect }) => {
  if (!product) return null;

  return (
    <Card className="cursor-pointer" onClick={() => onSelect(product.id)}>
      <CardHeader className="p-0">
        {product.featuredImage && (
          <Image
            data={product.featuredImage}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        )}
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg">{product.title}</CardTitle>
          <Money
            data={product.priceRange.minVariantPrice}
            className="text-lg font-bold text-primary"
          />
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            // You'll need to implement your own add to cart logic here
            console.log('Add to cart:', product.id);
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
