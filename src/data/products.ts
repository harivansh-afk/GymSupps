import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Elite Whey Protein Isolate',
    description: 'Premium micro-filtered whey protein isolate with 27g protein per serving and minimal fat content. Enhanced with digestive enzymes for optimal absorption.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&q=80&w=800',
    category: 'Protein',
    subCategory: 'Whey Isolate',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    nutritionalFacts: {
      servingSize: '30g',
      servingsPerContainer: 30,
      calories: 120,
      protein: 27,
      carbs: 1,
      fat: 0.5,
      additionalInfo: {
        'Leucine': '2.7g',
        'BCAA': '5.5g',
        'Glutamine': '4.5g'
      }
    },
    dosage: '1-2 scoops post-workout or between meals',
    timing: 'Immediately post-workout or anytime to meet daily protein requirements',
    benefits: [
      'Rapid protein synthesis activation',
      'Enhanced muscle recovery',
      'Improved strength gains',
      'Supports lean muscle growth'
    ],
    sizes: ['2lbs', '5lbs', '10lbs'],
    flavors: ['Chocolate', 'Vanilla', 'Strawberry', 'Cookie & Cream'],
    certifications: [
      {
        name: 'Informed Choice Certified',
        issuer: 'LGC Group',
        verificationUrl: 'https://informed-choice.org'
      }
    ],
    studies: [
      {
        title: 'Whey protein supplementation and muscle mass gains',
        authors: 'Smith et al.',
        year: 2023,
        journal: 'Journal of Sports Nutrition',
        doi: '10.1000/jsn.2023.001',
        summary: 'Study demonstrated 40% greater muscle protein synthesis with whey isolate vs concentrate'
      }
    ]
  },
  {
    id: '2',
    name: 'Advanced Creatine Monohydrate',
    description: 'Pharmaceutical grade creatine monohydrate for maximum strength and power output. Micronized for superior mixability and absorption.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
    category: 'Essential Supplements',
    subCategory: 'Creatine',
    rating: 4.9,
    reviews: 789,
    inStock: true,
    nutritionalFacts: {
      servingSize: '5g',
      servingsPerContainer: 60,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      additionalInfo: {
        'Creatine Monohydrate': '5g',
        'Purity': '99.9%'
      }
    },
    dosage: '5g daily',
    timing: 'Any time of day, consistent daily intake',
    benefits: [
      'Increased strength and power output',
      'Enhanced muscle volumization',
      'Improved high-intensity performance',
      'Accelerated recovery between sets'
    ],
    sizes: ['300g', '600g', '1kg'],
    flavors: ['Unflavored'],
    certifications: [
      {
        name: 'Creapure® Certified',
        issuer: 'AlzChem Trostberg GmbH',
        verificationUrl: 'https://creapure.com'
      }
    ],
    studies: [
      {
        title: 'Effects of creatine supplementation on exercise performance',
        authors: 'Johnson et al.',
        year: 2022,
        journal: 'International Journal of Sport Nutrition',
        doi: '10.1000/ijsn.2022.005',
        summary: 'Meta-analysis showing 8-14% increase in strength and power output with creatine supplementation'
      }
    ]
  },
  {
    id: '3',
    name: 'Pre-Workout Maximum Performance',
    description: 'Advanced pre-workout formula with clinically dosed ingredients for explosive energy, focus, and muscle pumps.',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&q=80&w=800',
    category: 'Performance Enhancers',
    subCategory: 'Pre-Workout',
    rating: 4.7,
    reviews: 456,
    inStock: true,
    nutritionalFacts: {
      servingSize: '16g',
      servingsPerContainer: 30,
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
      additionalInfo: {
        'Citrulline Malate': '8g',
        'Beta-Alanine': '3.2g',
        'Caffeine': '300mg',
        'L-Theanine': '200mg'
      }
    },
    dosage: '1 scoop 20-30 minutes before workout',
    timing: 'Pre-workout only, avoid late evening use',
    benefits: [
      'Explosive energy and focus',
      'Enhanced muscle pumps',
      'Increased strength and endurance',
      'Improved mental alertness'
    ],
    sizes: ['30 servings', '60 servings'],
    flavors: ['Fruit Punch', 'Blue Raspberry', 'Watermelon'],
    certifications: [
      {
        name: 'Informed Sport Certified',
        issuer: 'LGC Group',
        verificationUrl: 'https://informed-sport.com'
      }
    ],
    studies: [
      {
        title: 'Citrulline malate supplementation and exercise performance',
        authors: 'Williams et al.',
        year: 2023,
        journal: 'Journal of Exercise Science',
        doi: '10.1000/jes.2023.002',
        summary: 'Study showed 15% increase in training volume with citrulline malate supplementation'
      }
    ]
  },
  {
    id: '4',
    name: 'Omega-3 Fish Oil Ultra',
    description: 'High-potency fish oil supplement with concentrated EPA and DHA for optimal muscle recovery and joint health.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    category: 'Essential Supplements',
    subCategory: 'Fish Oil',
    rating: 4.8,
    reviews: 342,
    inStock: true,
    nutritionalFacts: {
      servingSize: '2 softgels',
      servingsPerContainer: 60,
      calories: 20,
      protein: 0,
      carbs: 0,
      fat: 2,
      additionalInfo: {
        'EPA': '1200mg',
        'DHA': '900mg',
        'Total Omega-3s': '2200mg'
      }
    },
    dosage: '2 softgels daily with meals',
    timing: 'With meals for optimal absorption',
    benefits: [
      'Reduced inflammation',
      'Enhanced joint mobility',
      'Improved muscle recovery',
      'Supports cardiovascular health'
    ],
    sizes: ['60 softgels', '120 softgels', '180 softgels'],
    flavors: ['Lemon'],
    certifications: [
      {
        name: 'IFOS 5-Star Certified',
        issuer: 'Nutrasource',
        verificationUrl: 'https://certifications.nutrasource.ca/ifos'
      }
    ],
    studies: [
      {
        title: 'Omega-3 supplementation and muscle protein synthesis',
        authors: 'Anderson et al.',
        year: 2023,
        journal: 'Sports Medicine Research',
        doi: '10.1000/smr.2023.003',
        summary: 'Research showed 20% improvement in muscle recovery markers with high-dose omega-3 supplementation'
      }
    ]
  },
  {
    id: '5',
    name: 'Mass Gainer Supreme',
    description: 'High-calorie mass gainer with premium proteins, complex carbohydrates, and essential nutrients for maximum muscle growth.',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1612532774276-cfa70ca7ed2b?auto=format&fit=crop&q=80&w=800',
    category: 'Protein',
    subCategory: 'Mass Gainer',
    rating: 4.6,
    reviews: 289,
    inStock: true,
    nutritionalFacts: {
      servingSize: '165g',
      servingsPerContainer: 20,
      calories: 650,
      protein: 50,
      carbs: 85,
      fat: 8,
      additionalInfo: {
        'BCAAs': '11g',
        'Creatine': '5g',
        'Glutamine': '5g',
        'MCTs': '3g'
      }
    },
    dosage: '1-2 servings daily',
    timing: 'Post-workout or between meals',
    benefits: [
      'Rapid weight gain',
      'Enhanced muscle growth',
      'Improved recovery',
      'Complete nutrient profile'
    ],
    sizes: ['6lbs', '12lbs'],
    flavors: ['Chocolate Blast', 'Vanilla Ice Cream', 'Strawberry Milkshake'],
    certifications: [
      {
        name: 'Informed Choice Certified',
        issuer: 'LGC Group',
        verificationUrl: 'https://informed-choice.org'
      }
    ],
    studies: [
      {
        title: 'Effects of high-calorie supplementation on muscle mass',
        authors: 'Thompson et al.',
        year: 2023,
        journal: 'Journal of Sports Nutrition',
        doi: '10.1000/jsn.2023.004',
        summary: 'Study demonstrated significant muscle mass gains with structured mass gainer supplementation'
      }
    ]
  },
  {
    id: '6',
    name: 'BCAA Recovery Complex',
    description: 'Premium 2:1:1 ratio BCAA formula enhanced with electrolytes and B-vitamins for optimal muscle recovery and hydration.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
    category: 'Essential Supplements',
    subCategory: 'BCAAs',
    rating: 4.7,
    reviews: 567,
    inStock: true,
    nutritionalFacts: {
      servingSize: '14g',
      servingsPerContainer: 30,
      calories: 5,
      protein: 0,
      carbs: 1,
      fat: 0,
      additionalInfo: {
        'L-Leucine': '5g',
        'L-Isoleucine': '2.5g',
        'L-Valine': '2.5g',
        'Electrolyte Blend': '1g'
      }
    },
    dosage: '1 scoop during training',
    timing: 'During workout or throughout the day',
    benefits: [
      'Reduced muscle breakdown',
      'Enhanced recovery',
      'Improved hydration',
      'Decreased soreness'
    ],
    sizes: ['30 servings', '60 servings'],
    flavors: ['Tropical Punch', 'Green Apple', 'Grape'],
    certifications: [
      {
        name: 'Informed Sport Certified',
        issuer: 'LGC Group',
        verificationUrl: 'https://informed-sport.com'
      }
    ],
    studies: [
      {
        title: 'BCAA supplementation and muscle protein breakdown',
        authors: 'Martinez et al.',
        year: 2023,
        journal: 'Amino Acids Research',
        doi: '10.1000/aar.2023.005',
        summary: 'Research showed 30% reduction in muscle protein breakdown during training with BCAA supplementation'
      }
    ]
  },
  {
    id: '7',
    name: 'Beta-Alanine Performance',
    description: 'Pure beta-alanine supplement for enhanced muscular endurance and reduced fatigue during high-intensity training.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
    category: 'Performance Enhancers',
    subCategory: 'Beta-Alanine',
    rating: 4.6,
    reviews: 234,
    inStock: true,
    nutritionalFacts: {
      servingSize: '3.2g',
      servingsPerContainer: 60,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      additionalInfo: {
        'Beta-Alanine': '3.2g',
        'CarnoSyn®': '3.2g'
      }
    },
    dosage: '3.2g daily',
    timing: 'Any time of day, consistent daily intake',
    benefits: [
      'Increased muscular endurance',
      'Delayed muscle fatigue',
      'Enhanced workout capacity',
      'Improved performance in high-rep sets'
    ],
    sizes: ['200g', '400g'],
    flavors: ['Unflavored'],
    certifications: [
      {
        name: 'CarnoSyn® Certified',
        issuer: 'Natural Alternatives International',
        verificationUrl: 'https://carnosyn.com'
      }
    ],
    studies: [
      {
        title: 'Beta-alanine supplementation and exercise performance',
        authors: 'Rodriguez et al.',
        year: 2023,
        journal: 'Exercise Science Quarterly',
        doi: '10.1000/esq.2023.006',
        summary: 'Meta-analysis showed significant improvements in high-intensity exercise performance with beta-alanine supplementation'
      }
    ]
  },
  {
    id: '8',
    name: 'ZMA Night Recovery',
    description: 'Synergistic blend of Zinc, Magnesium, and Vitamin B6 for enhanced recovery and testosterone support during sleep.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
    category: 'Essential Supplements',
    subCategory: 'Recovery',
    rating: 4.8,
    reviews: 456,
    inStock: true,
    nutritionalFacts: {
      servingSize: '3 capsules',
      servingsPerContainer: 30,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      additionalInfo: {
        'Zinc': '30mg',
        'Magnesium': '450mg',
        'Vitamin B6': '10.5mg'
      }
    },
    dosage: '3 capsules before bed',
    timing: '30-60 minutes before sleep on an empty stomach',
    benefits: [
      'Enhanced sleep quality',
      'Improved recovery',
      'Supports testosterone levels',
      'Optimized mineral status'
    ],
    sizes: ['90 capsules', '180 capsules'],
    flavors: ['Unflavored'],
    certifications: [
      {
        name: 'NSF Certified for Sport',
        issuer: 'NSF International',
        verificationUrl: 'https://www.nsfsport.com'
      }
    ],
    studies: [
      {
        title: 'ZMA supplementation and recovery in athletes',
        authors: 'Wilson et al.',
        year: 2023,
        journal: 'Sleep and Recovery Research',
        doi: '10.1000/srr.2023.007',
        summary: 'Study showed improved sleep quality and recovery markers in trained athletes using ZMA supplementation'
      }
    ]
  },
  {
    id: '9',
    name: 'L-Carnitine Pure',
    description: 'High-purity L-Carnitine supplement for enhanced fat metabolism and improved exercise performance.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
    category: 'Performance Enhancers',
    subCategory: 'Fat Metabolism',
    rating: 4.7,
    reviews: 312,
    inStock: true,
    nutritionalFacts: {
      servingSize: '2g',
      servingsPerContainer: 50,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      additionalInfo: {
        'L-Carnitine L-Tartrate': '2g'
      }
    },
    dosage: '2g daily',
    timing: 'Pre-workout or with meals',
    benefits: [
      'Enhanced fat utilization',
      'Improved exercise performance',
      'Reduced muscle fatigue',
      'Better recovery'
    ],
    sizes: ['100g', '200g'],
    flavors: ['Unflavored'],
    certifications: [
      {
        name: 'Carnipure® Certified',
        issuer: 'Lonza',
        verificationUrl: 'https://www.carnipure.com'
      }
    ],
    studies: [
      {
        title: 'L-Carnitine and exercise metabolism',
        authors: 'Garcia et al.',
        year: 2023,
        journal: 'Metabolism Research',
        doi: '10.1000/mr.2023.008',
        summary: 'Research demonstrated improved fat oxidation and exercise performance with L-Carnitine supplementation'
      }
    ]
  },
  {
    id: '10',
    name: 'HMB Muscle Defender',
    description: 'Beta-Hydroxy Beta-Methylbutyrate supplement for reduced muscle protein breakdown and enhanced recovery.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
    category: 'Essential Supplements',
    subCategory: 'Anti-Catabolic',
    rating: 4.6,
    reviews: 178,
    inStock: true,
    nutritionalFacts: {
      servingSize: '3g',
      servingsPerContainer: 40,
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      additionalInfo: {
        'HMB (β-Hydroxy β-Methylbutyrate)': '3g'
      }
    },
    dosage: '3g daily',
    timing: 'Split into 3 doses throughout the day',
    benefits: [
      'Reduced muscle breakdown',
      'Enhanced recovery',
      'Preserved lean mass',
      'Improved strength'
    ],
    sizes: ['120g', '240g'],
    flavors: ['Unflavored'],
    certifications: [
      {
        name: 'myHMB® Certified',
        issuer: 'TSI Group',
        verificationUrl: 'https://www.myhmb.com'
      }
    ],
    studies: [
      {
        title: 'HMB supplementation and muscle preservation',
        authors: 'Lee et al.',
        year: 2023,
        journal: 'Sports Science Review',
        doi: '10.1000/ssr.2023.009',
        summary: 'Clinical trial showed significant reduction in muscle protein breakdown during intense training periods'
      }
    ]
  }
];