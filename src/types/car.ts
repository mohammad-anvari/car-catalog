export interface Car {
    id: string;
    name: string;
    brand: string;
    year: number;
    price: number;
    image: string;
    fuelType: string;
    transmission: string;
    horsepower: number;
    mileage: string | number;
    description: string;
  }
  
  export interface CarFilter {
    searchQuery: string;
    maxPrice: number;
    onlyFavorites: boolean;
  }