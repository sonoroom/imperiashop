import React from 'react';
import { Tabs, Tab } from '@heroui/react';
import { ProductSpecification } from '../../types/product';

interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
  description: string;
  features: string[];
  reviews: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  specifications,
  description,
  features,
  reviews,
}) => {
  return (
    <Tabs variant="underlined" aria-label="Product information">
      <Tab key="description" title="Description">
        <div className="py-4 space-y-4">
          <div className="text-default-700">{description}</div>
          
          <div className="space-y-2">
            <h3 className="font-medium text-lg">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="text-default-700">{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </Tab>
      
      <Tab key="specifications" title="Specifications">
        <div className="py-4">
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-default-200">
              <tbody className="divide-y divide-default-200">
                {specifications.map((spec, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-default-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-sm font-medium text-default-900 w-1/3">
                      {spec.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-default-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Tab>
      
      <Tab key="reviews" title={`Reviews (${reviews.length})`}>
        <div className="py-4 space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-default-200 pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                    {review.user.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{review.user}</div>
                    <div className="text-xs text-default-500">{review.date}</div>
                  </div>
                </div>
                <div className="flex">
                  {Array(5).fill(null).map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? 'text-warning' : 'text-default-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mt-2 text-default-700">
                {review.comment}
              </div>
            </div>
          ))}
        </div>
      </Tab>
      
      <Tab key="compatibility" title="Compatibility">
        <div className="py-4">
          <div className="text-default-700">
            <p className="mb-4">
              This product is compatible with the following systems and components:
            </p>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Compatible Motherboards</h4>
                <ul className="list-disc list-inside space-y-1 text-default-600">
                  <li>ASUS ROG Strix Z690-E Gaming WiFi</li>
                  <li>MSI MPG Z690 Carbon WiFi</li>
                  <li>Gigabyte Z690 Aorus Master</li>
                  <li>ASUS Prime Z690-A</li>
                  <li>ASRock Z690 Steel Legend</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Compatible Cases</h4>
                <ul className="list-disc list-inside space-y-1 text-default-600">
                  <li>Corsair 4000D Airflow</li>
                  <li>NZXT H510</li>
                  <li>Lian Li O11 Dynamic</li>
                  <li>Fractal Design Meshify 2</li>
                  <li>Phanteks Eclipse P500A</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">System Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-default-600">
                  <li>Intel Core i5-11600K or AMD Ryzen 5 5600X or better</li>
                  <li>16GB DDR4 RAM (2x8GB) or better</li>
                  <li>650W 80+ Bronze Power Supply or better</li>
                  <li>Windows 10 64-bit or Windows 11 64-bit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      
      <Tab key="warranty" title="Warranty">
        <div className="py-4 space-y-4">
          <div className="text-default-700">
            <p>
              This product comes with a manufacturer's 3-year limited warranty, covering defects in materials and workmanship.
            </p>
            
            <h3 className="font-medium mt-4 mb-2">Warranty Details:</h3>
            <ul className="list-disc list-inside space-y-2 text-default-600">
              <li>3-year limited warranty from date of purchase</li>
              <li>Covers manufacturing defects and component failures under normal use</li>
              <li>Free repair, replacement, or refund at manufacturer's discretion</li>
              <li>Does not cover damage from misuse, accidents, or unauthorized modifications</li>
              <li>Registration required within 30 days of purchase for full warranty benefits</li>
            </ul>
            
            <h3 className="font-medium mt-4 mb-2">Extended Warranty Options:</h3>
            <p>
              You can purchase an extended warranty to increase coverage to 5 years for an additional fee.
              Contact customer service for more information.
            </p>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
};