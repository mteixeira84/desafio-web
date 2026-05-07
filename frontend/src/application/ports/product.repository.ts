import type { Product } from "../../domain/entities/product";

export type NewProduct = {
  name: string;
  price: number;
  category: string;
};

export interface ProductRepository {
  list(): Promise<Product[]>;
  create(product: NewProduct): Promise<void>;
  delete(id: string): Promise<void>;
}
