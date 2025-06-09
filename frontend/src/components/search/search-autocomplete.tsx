import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, AutocompleteItem, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { searchProducts } from '../../data/products';

interface SearchAutocompleteProps {
  fullWidth?: boolean;
  autoFocus?: boolean;
  onSearchComplete?: () => void;
}

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ 
  fullWidth = false,
  autoFocus = false,
  onSearchComplete
}) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  
  const handleSelectionChange = (key: React.Key) => {
    const selectedProduct = searchProducts.find(product => product.id === key);
    if (selectedProduct) {
      navigate(`/product/${selectedProduct.id}`);
      if (onSearchComplete) {
        onSearchComplete();
      }
    }
  };
  
  const handleInputChange = (value: string) => {
    setValue(value);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };
  
  return (
    <Autocomplete
      label="Search"
      labelPlacement="outside"
      placeholder="Search for products..."
      className={`max-w-xs ${fullWidth ? 'w-full' : ''}`}
      defaultItems={searchProducts}
      inputValue={value}
      onInputChange={handleInputChange}
      selectedKey=""
      onSelectionChange={handleSelectionChange}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      startContent={
        <Icon icon="lucide:search" className="text-default-400" width={16} />
      }
      listboxProps={{
        emptyContent: "No products found",
      }}
      size="sm"
      autoFocus={autoFocus}
    >
      {(item) => (
        <AutocompleteItem
          key={item.id}
          textValue={item.name}
          className="data-[hover=true]:bg-default-100"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <div className="text-sm">{item.name}</div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-default-500">{item.category}</span>
                <span className="text-xs font-bold">${item.price.toFixed(2)}</span>
              </div>
            </div>
            {item.stock <= 0 && (
              <Chip size="sm" color="danger" variant="flat">Out of stock</Chip>
            )}
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};