import React from 'react';
import { Product } from '../types/product';
import { Beaker, Clock, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Scientific Research</h2>
          {product.studies.map((study, index) => (
            <Card key={index} className="mb-4">
              <CardHeader>
                <CardTitle className="text-lg">{study.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {study.authors} ({study.year}) - {study.journal}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{study.summary}</p>
                <a
                  href={`https://doi.org/${study.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm mt-2 inline-block"
                >
                  View Study
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-semibold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <Separator orientation="vertical" className="h-6" />
          <span className="text-sm text-muted-foreground">
            {product.category} / {product.subCategory}
          </span>
        </div>

        <p className="text-lg mb-8">{product.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Beaker className="w-5 h-5" />
                Dosage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{product.dosage}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Timing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{product.timing}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Benefits</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <Award className="w-5 h-5 text-primary mt-1" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Nutritional Information</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Serving Size</span>
                  <span>{product.nutritionalFacts.servingSize}</span>
                </div>
                <div className="flex justify-between">
                  <span>Servings Per Container</span>
                  <span>{product.nutritionalFacts.servingsPerContainer}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span>Calories</span>
                  <span>{product.nutritionalFacts.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein</span>
                  <span>{product.nutritionalFacts.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbohydrates</span>
                  <span>{product.nutritionalFacts.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat</span>
                  <span>{product.nutritionalFacts.fat}g</span>
                </div>
                {product.nutritionalFacts.additionalInfo && (
                  <>
                    <Separator />
                    {Object.entries(product.nutritionalFacts.additionalInfo).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span>{key}</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Flavors</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavors.map((flavor) => (
                  <span
                    key={flavor}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <div className="space-y-4">
            {product.certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">Issued by: {cert.issuer}</p>
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    Verify Certification
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};