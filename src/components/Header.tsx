import React from 'react';
import { ShoppingCart, Dumbbell, Search, User } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import { Cart } from './Cart';

export const Header: React.FC = () => {
  return (
    <header className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">GymSupps</span>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};