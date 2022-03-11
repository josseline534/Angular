export interface Product {
  name: string;
  price: number;
  category?: string;
  image: {
    name: string;
    width: number;
  };
}
