import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Navbar as HeroUINavbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Input, 
  Button, 
  Badge, 
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { useCart } from '../../hooks/use-cart';
import { navCategories } from '../../data/categories';
import { SearchAutocomplete } from '../search/search-autocomplete';

export const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  // Mock login function for demo
  const handleLogin = () => {
    setIsUserLoggedIn(true);
  };

  // Show search overlay on mobile
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <HeroUINavbar 
        maxWidth="2xl" 
        className="shadow-sm bg-white border-b border-slate-100"
        isBordered
        isBlurred={false}
      >
        <NavbarContent justify="start">
          <NavbarBrand as={Link} to="/" className="mr-4">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:cpu" width={24} height={24} className="text-primary" />
              <p className="font-bold text-lg text-inherit">TechGear</p>
            </div>
          </NavbarBrand>
          
          <div className="hidden lg:flex gap-4">
            {navCategories.map((category) => (
              <div key={category.id} className="navbar-dropdown-trigger relative group">
                <NavbarItem>
                  <Link 
                    to={`/category/${category.id}`}
                    className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-default-700 hover:text-primary"
                  >
                    {category.name}
                    <Icon icon="lucide:chevron-down" className="w-4 h-4" />
                  </Link>
                </NavbarItem>
                
                {/* Mega dropdown menu */}
                <div className="navbar-dropdown">
                  <div className="bg-white border shadow-lg rounded-lg p-4 grid grid-cols-3 gap-4 w-[700px]">
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.id} className="space-y-2">
                        <Link 
                          to={`/category/${category.id}/${subcategory.id}`}
                          className="font-medium text-default-700 hover:text-primary block"
                        >
                          {subcategory.name}
                        </Link>
                        <ul className="space-y-1">
                          {subcategory.items.map((item) => (
                            <li key={item.id}>
                              <Link 
                                to={`/category/${category.id}/${subcategory.id}/${item.id}`}
                                className="text-xs text-default-600 hover:text-primary block"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </NavbarContent>
        
        <NavbarContent className="hidden sm:flex" justify="center">
          <SearchAutocomplete />
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            {isUserLoggedIn ? (
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar 
                    as="button"
                    className="transition-transform"
                    size="sm"
                    src="https://img.heroui.chat/image/avatar?w=40&h=40&u=user123" 
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="User menu">
                  <DropdownItem key="profile">My Profile</DropdownItem>
                  <DropdownItem key="orders" onPress={() => navigate('/orders')}>My Orders</DropdownItem>
                  <DropdownItem key="settings">Settings</DropdownItem>
                  <DropdownItem key="logout" color="danger">Logout</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button 
                as={Link} 
                to="/auth" 
                variant="flat" 
                color="primary" 
                size="sm"
              >
                Login
              </Button>
            )}
          </NavbarItem>
          
          <NavbarItem>
            <Badge 
              content={cartItems.length} 
              color="primary" 
              shape="circle" 
              size="sm"
              isInvisible={cartItems.length === 0}
            >
              <Button
                as={Link}
                to="/cart"
                isIconOnly
                variant="light"
                aria-label="Cart"
              >
                <Icon icon="lucide:shopping-cart" width={20} height={20} />
              </Button>
            </Badge>
          </NavbarItem>
          
          <NavbarItem className="sm:hidden">
            <Button
              isIconOnly
              variant="light"
              aria-label="Search"
              onPress={toggleSearch}
            >
              <Icon icon="lucide:search" width={20} height={20} />
            </Button>
          </NavbarItem>
          
          <NavbarItem className="lg:hidden">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button isIconOnly variant="light">
                  <Icon icon="lucide:menu" width={20} height={20} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Mobile navigation">
                <DropdownItem key="home" as={Link} to="/">Home</DropdownItem>
                {navCategories.map((category) => (
                  <DropdownItem
                    key={category.id}
                    as={Link}
                    to={`/category/${category.id}`}
                  >
                    {category.name}
                  </DropdownItem>
                ))}
                {!isUserLoggedIn && (
                  <DropdownItem key="login" as={Link} to="/auth">Login</DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </HeroUINavbar>
      
      {/* Mobile search overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start pt-20 px-4">
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Search</h3>
                <Button isIconOnly variant="light" size="sm" onPress={toggleSearch}>
                  <Icon icon="lucide:x" width={20} height={20} />
                </Button>
              </div>
              <SearchAutocomplete fullWidth autoFocus onSearchComplete={toggleSearch} />
            </div>
          </div>
        </div>
      )}
      
      {/* Hidden button to simulate login - for demo purposes only */}
      <Button 
        className="fixed bottom-4 right-4 z-40"
        size="sm" 
        onPress={handleLogin} 
        isIconOnly
      >
        <Icon icon="lucide:user" />
      </Button>
    </>
  );
};