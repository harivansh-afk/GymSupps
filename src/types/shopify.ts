export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD';
    };
  };
  featuredImage: {
    url: string;
    altText: string;
    width: number;
    height: number;
  };
}
