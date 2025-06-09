import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Pagination,
  Select,
  SelectItem,
  Chip,
  Button
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { ProductCard } from '../components/products/product-card';
import { ProductFilters } from '../components/products/product-filters';
import { getCategoryProducts } from '../data/products';

export const ProductListingPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = React.useState<string>("featured");
  const [page, setPage] = React.useState(1);
  const [filterPanelOpen, setFilterPanelOpen] = React.useState(false);
  const [activeFilters, setActiveFilters] = React.useState<Record<string, any>>({});
  
  // Get products for this category
  const { products, category, totalPages } = getCategoryProducts(categoryId || '', page, sortBy);
  
  const toggleFilterPanel = () => {
    setFilterPanelOpen(!filterPanelOpen);
  };
  
  const handleFilterChange = (filters: Record<string, any>) => {
    setActiveFilters(filters);
    setPage(1);
  };
  
  const clearFilters = () => {
    setActiveFilters({});
  };
  
  // Count active filters
  const activeFilterCount = Object.values(activeFilters).reduce((count, value) => {
    if (Array.isArray(value) && value.length) return count + 1;
    return count;
  }, 0);
  
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar - desktop */}
        <div className="hidden md:block w-64 shrink-0">
          <ProductFilters 
            onFilterChange={handleFilterChange} 
            categoryInfo={category}
          />
        </div>
        
        {/* Main content */}
        <div className="flex-grow">
          {/* Top control bar */}
          <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">{category?.name || 'Products'}</h1>
              <p className="text-default-500">{products.length} products</p>
            </div>
            
            <div className="flex gap-3 items-center">
              <Button
                variant="flat"
                size="sm"
                startContent={<Icon icon="lucide:filter" width={16} />}
                className="md:hidden"
                onPress={toggleFilterPanel}
              >
                Filters
                {activeFilterCount > 0 && (
                  <Chip size="sm" variant="flat" color="primary" className="ml-1">
                    {activeFilterCount}
                  </Chip>
                )}
              </Button>
              
              <Select
                label="Sort by"
                selectedKeys={[sortBy]}
                className="w-40"
                size="sm"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <SelectItem key="featured" value="featured">Featured</SelectItem>
                <SelectItem key="price_low" value="price_low">Price: Low to High</SelectItem>
                <SelectItem key="price_high" value="price_high">Price: High to Low</SelectItem>
                <SelectItem key="rating" value="rating">Customer Rating</SelectItem>
                <SelectItem key="newest" value="newest">Newest Arrivals</SelectItem>
              </Select>
            </div>
          </div>
          
          {/* Mobile filters panel */}
          {filterPanelOpen && (
            <div className="md:hidden mb-6 p-4 border rounded-lg bg-content1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Filters</h3>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  onPress={toggleFilterPanel}
                >
                  <Icon icon="lucide:x" width={18} />
                </Button>
              </div>
              <ProductFilters onFilterChange={handleFilterChange} />
            </div>
          )}
          
          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Empty state */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <Icon icon="lucide:package-x" className="mx-auto mb-4 text-default-400" width={48} />
              <h3 className="text-xl font-medium mb-2">No Products Found</h3>
              <p className="text-default-500 mb-4">Try adjusting your filters or search terms</p>
              <Button color="primary" variant="flat" onPress={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <Pagination
                total={totalPages}
                initialPage={page}
                onChange={setPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};