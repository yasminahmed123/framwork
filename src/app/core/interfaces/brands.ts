export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface BrandResponse {
    results: number;
    metadata: {
      currentPage: number;
      numberOfPages: number;
      limit: number;
      nextPage: number;
    };
    data: Brand[];
  }