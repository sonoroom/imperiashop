export interface ProductSpecification {
  name: string;
  value: string;
}

export interface ProductReview {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice?: number;
  stock: number;
  rating: number;
  images: string[];
  description: string;
  features: string[];
  specifications: ProductSpecification[];
  reviews: ProductReview[];
  isNew?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
  items: CategoryItem[];
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
  image?: string;
  description?: string;
  productCount?: number;
}
