import { review } from './review.interface';

export interface producto {
  image: string;
  product: string;
  price: number;
  fav: boolean;
  currency: string;
  rating: number;
  address: string;
  schedule: string;
  description: string;
  lat: number;
  lng: number;
 
  similarProducts?: producto[];
  reviews?: review[];
}
