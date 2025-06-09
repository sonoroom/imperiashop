import React from 'react';
import { 
  Accordion, 
  AccordionItem, 
  CheckboxGroup, 
  Checkbox,
  Slider,
  Input,
  Button
} from '@heroui/react';
import { Icon } from '@iconify/react';

interface ProductFiltersProps {
  onFilterChange: (filters: any) => void;
  categoryInfo?: {
    id: string;
    name: string;
  };
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange, categoryInfo }) => {
  // State for various filters
  const [priceRange, setPriceRange] = React.useState<number[]>([0, 3000]);
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = React.useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = React.useState<string[]>([]);
  
  // Apply filters when any filter changes
  React.useEffect(() => {
    onFilterChange({
      priceRange,
      brands: selectedBrands,
      ratings: selectedRatings,
      availability: selectedAvailability
    });
  }, [priceRange, selectedBrands, selectedRatings, selectedAvailability, onFilterChange]);

  // Reset all filters
  const handleResetFilters = () => {
    setPriceRange([0, 3000]);
    setSelectedBrands([]);
    setSelectedRatings([]);
    setSelectedAvailability([]);
  };

  return (
    <div className="space-y-6">
      {categoryInfo && (
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{categoryInfo.name}</h2>
          <Button variant="light" size="sm" startContent={<Icon icon="lucide:filter" width={16} />}>
            Filters
          </Button>
        </div>
      )}
      
      <div className="py-2">
        <Button 
          variant="flat" 
          color="danger" 
          size="sm" 
          onPress={handleResetFilters}
          startContent={<Icon icon="lucide:x" width={16} />}
        >
          Reset Filters
        </Button>
      </div>
      
      <Accordion variant="bordered" selectionMode="multiple" defaultExpandedKeys={["price", "brand"]}>
        {/* Price Range Filter */}
        <AccordionItem key="price" aria-label="Price Range" title="Price Range">
          <div className="px-2 space-y-6">
            <Slider
              label="Price Range"
              step={50}
              minValue={0}
              maxValue={3000}
              value={priceRange}
              onChange={setPriceRange as (value: number | number[]) => void}
              formatOptions={{ style: 'currency', currency: 'USD' }}
              className="max-w-md"
            />
            
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                placeholder="Min"
                labelPlacement="outside"
                size="sm"
                value={priceRange[0].toString()}
                startContent={<div className="pointer-events-none">$</div>}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 0;
                  setPriceRange([value, priceRange[1]]);
                }}
              />
              <span className="text-default-500">to</span>
              <Input
                type="number"
                placeholder="Max"
                labelPlacement="outside"
                size="sm"
                value={priceRange[1].toString()}
                startContent={<div className="pointer-events-none">$</div>}
                onChange={(e) => {
                  const value = parseInt(e.target.value) || 0;
                  setPriceRange([priceRange[0], value]);
                }}
              />
            </div>
          </div>
        </AccordionItem>
        
        {/* Brand Filter */}
        <AccordionItem key="brand" aria-label="Brand" title="Brand">
          <CheckboxGroup
            value={selectedBrands}
            onValueChange={setSelectedBrands}
          >
            <Checkbox value="asus">ASUS</Checkbox>
            <Checkbox value="msi">MSI</Checkbox>
            <Checkbox value="gigabyte">Gigabyte</Checkbox>
            <Checkbox value="asrock">ASRock</Checkbox>
            <Checkbox value="evga">EVGA</Checkbox>
            <Checkbox value="intel">Intel</Checkbox>
            <Checkbox value="amd">AMD</Checkbox>
            <Checkbox value="corsair">Corsair</Checkbox>
            <Checkbox value="kingston">Kingston</Checkbox>
          </CheckboxGroup>
        </AccordionItem>
        
        {/* Rating Filter */}
        <AccordionItem key="rating" aria-label="Rating" title="Rating">
          <CheckboxGroup
            value={selectedRatings}
            onValueChange={setSelectedRatings}
          >
            <Checkbox value="5">
              <div className="flex items-center gap-1">
                <div className="flex text-warning">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} icon="lucide:star" width={16} />
                  ))}
                </div>
                <span>5 stars</span>
              </div>
            </Checkbox>
            <Checkbox value="4">
              <div className="flex items-center gap-1">
                <div className="flex text-warning">
                  {[1, 2, 3, 4].map((star) => (
                    <Icon key={star} icon="lucide:star" width={16} />
                  ))}
                  <Icon icon="lucide:star" className="text-default-300" width={16} />
                </div>
                <span>4 stars & up</span>
              </div>
            </Checkbox>
            <Checkbox value="3">
              <div className="flex items-center gap-1">
                <div className="flex text-warning">
                  {[1, 2, 3].map((star) => (
                    <Icon key={star} icon="lucide:star" width={16} />
                  ))}
                  {[1, 2].map((star) => (
                    <Icon key={star} icon="lucide:star" className="text-default-300" width={16} />
                  ))}
                </div>
                <span>3 stars & up</span>
              </div>
            </Checkbox>
            <Checkbox value="2">
              <div className="flex items-center gap-1">
                <div className="flex text-warning">
                  {[1, 2].map((star) => (
                    <Icon key={star} icon="lucide:star" width={16} />
                  ))}
                  {[1, 2, 3].map((star) => (
                    <Icon key={star} icon="lucide:star" className="text-default-300" width={16} />
                  ))}
                </div>
                <span>2 stars & up</span>
              </div>
            </Checkbox>
            <Checkbox value="1">
              <div className="flex items-center gap-1">
                <div className="flex text-warning">
                  <Icon icon="lucide:star" width={16} />
                  {[1, 2, 3, 4].map((star) => (
                    <Icon key={star} icon="lucide:star" className="text-default-300" width={16} />
                  ))}
                </div>
                <span>1 star & up</span>
              </div>
            </Checkbox>
          </CheckboxGroup>
        </AccordionItem>
        
        {/* Availability Filter */}
        <AccordionItem key="availability" aria-label="Availability" title="Availability">
          <CheckboxGroup
            value={selectedAvailability}
            onValueChange={setSelectedAvailability}
          >
            <Checkbox value="inStock">In Stock</Checkbox>
            <Checkbox value="outOfStock">Out of Stock</Checkbox>
          </CheckboxGroup>
        </AccordionItem>
        
        {/* Specifications - will change based on category */}
        <AccordionItem key="specs" aria-label="Specifications" title="Specifications">
          <div className="text-sm text-default-500">
            Specifications are dynamic based on product category.
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};