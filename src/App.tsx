import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductsPage } from './pages/Products';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetails } from './components/ProductDetails';
import { products } from './data/products';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto p-4">
          <nav className="mb-4">
            <Link to="/local-products" className="mr-4 text-primary hover:text-primary/80">
              Local Products
            </Link>
            <Link to="/shopify-products" className="text-primary hover:text-primary/80">
              Shopify Products
            </Link>
          </nav>
          <Routes>
            <Route
              path="/local-products"
              element={
                <>
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
                  {selectedProduct ? (
                    <div>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="mb-8 text-primary hover:underline flex items-center gap-2"
                      >
                        ← Back to Products
                      </button>
                      <ProductDetails
                        product={products.find((p) => p.id === selectedProduct)!}
                      />
                    </div>
                  ) : (
                    <ProductGrid
                      products={products}
                      category={selectedCategory || undefined}
                      onProductSelect={setSelectedProduct}
                    />
                  )}
                </>
              }
            />
            <Route path="/shopify-products" element={<ProductsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
