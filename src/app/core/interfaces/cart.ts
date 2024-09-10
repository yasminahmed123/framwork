
export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }
  
  // Interface for Category
  export  interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
  
  // Interface for Brand
  export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
  
  // Interface for Product
  export interface Products {
    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
    subcategory: Subcategory[];
    category: Category;
    brand: Brand;
    ratingsAverage: number;
  }
  
  export interface Product {
    count: number;
    _id: string;
    product: Products;
    price: number;
  }
  
  export interface CartData {
    _id: string;
    cartOwner: string;
    products: Product[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
  }
  
 
  export interface Cart {
    status: string;
    numOfCartItems: number;
    cartId: string;
    data: CartData;
  }
  