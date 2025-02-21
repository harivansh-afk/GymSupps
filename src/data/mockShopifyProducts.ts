import { ShopifyProduct } from '../types/shopify';

export const mockProducts: ShopifyProduct[] = [
  {
    id: '1',
    title: 'Whey Protein Isolate',
    description: 'Premium whey protein isolate for optimal muscle recovery and growth.',
    handle: 'whey-protein-isolate',
    priceRange: {
      minVariantPrice: {
        amount: '49.99',
        currencyCode: 'USD'
      }
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2670&auto=format&fit=crop',
      altText: 'Whey Protein Container',
      width: 800,
      height: 800
    }
  },
  {
    id: '2',
    title: 'Pre-Workout Energy',
    description: 'Advanced pre-workout formula for enhanced performance and focus.',
    handle: 'pre-workout-energy',
    priceRange: {
      minVariantPrice: {
        amount: '39.99',
        currencyCode: 'USD'
      }
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2785&auto=format&fit=crop',
      altText: 'Pre-workout Container',
      width: 800,
      height: 800
    }
  },
  {
    id: '3',
    title: 'BCAA Complex',
    description: 'Essential branched-chain amino acids for muscle support and recovery.',
    handle: 'bcaa-complex',
    priceRange: {
      minVariantPrice: {
        amount: '29.99',
        currencyCode: 'USD'
      }
    },
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=2670&auto=format&fit=crop',
      altText: 'BCAA Container',
      width: 800,
      height: 800
    }
  }
];
