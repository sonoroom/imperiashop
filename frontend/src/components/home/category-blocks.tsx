import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { featuredCategories } from '../../data/categories';

export const CategoryBlocks: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {featuredCategories.map((category) => (
        <Card 
          key={category.id}
          isPressable
          as={Link}
          to={`/category/${category.id}`}
          className="border border-default-200"
          shadow="sm"
        >
          <CardBody className="overflow-visible p-0">
            <img
              alt={category.name}
              className="w-full h-36 object-cover"
              src={category.image}
            />
          </CardBody>
          <CardFooter className="flex-col items-start text-small">
            <b className="text-default-700">{category.name}</b>
            <p className="text-default-500 text-xs line-clamp-2 h-8">{category.description}</p>
            <div className="flex justify-between items-center w-full mt-2">
              <span className="text-xs text-primary">{category.productCount} products</span>
              <Icon icon="lucide:chevron-right" className="text-default-500" width={16} height={16} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};