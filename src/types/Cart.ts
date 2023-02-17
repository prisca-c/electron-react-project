import { Product } from './Product';

export type Cart = {
  id: number;
  value: number;
  items: Product[];
  itemsCount: number;
}