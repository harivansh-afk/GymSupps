import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="w-5 h-5" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {items.length === 0 ? (
            <div className="text-center py-6">
              <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground" />
              <p className="mt-4 text-lg font-medium">Your cart is empty</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Start adding some supplements to your cart
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${item.product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.product.id, Math.max(0, item.quantity - 1))
                          }
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Separator className="my-6" />
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <Button className="w-full">Proceed to Checkout</Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};