export interface NutritionalFacts {
  servingSize: string;
  servingsPerContainer: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  additionalInfo?: Record<string, string>;
}

export interface ProductCertification {
  name: string;
  issuer: string;
  verificationUrl: string;
}

export interface ProductStudy {
  title: string;
  authors: string;
  year: number;
  journal: string;
  doi: string;
  summary: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subCategory: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  nutritionalFacts: NutritionalFacts;
  dosage: string;
  timing: string;
  benefits: string[];
  sizes: string[];
  flavors: string[];
  certifications: ProductCertification[];
  studies: ProductStudy[];
}
