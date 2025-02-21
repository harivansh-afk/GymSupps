import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetails } from './components/ProductDetails';
import { products } from './data/products';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const currentProduct = products.find((p) => p.id === selectedProduct);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedProduct ? (
          <>
            <section className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Premium Supplements for Your Fitness Journey
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our range of high-quality supplements designed to help you achieve your fitness goals.
              </p>
            </section>

            <div className="mb-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full ${
                    !selectedCategory
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <ProductGrid
              products={products}
              category={selectedCategory ?? undefined}
              onProductSelect={setSelectedProduct}
            />
          </>
        ) : (
          <div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-8 text-primary hover:underline flex items-center gap-2"
            >
              ← Back to Products
            </button>
            {currentProduct && <ProductDetails product={currentProduct} />}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;