import type { NewProduct } from "../../application/ports/product.repository";
import type { CreateProductRequestDto } from "../http/dtos/product.dto";

export function mapNewProductToRequestDto(product: NewProduct): CreateProductRequestDto {
  return {
    name: product.name,
    price: product.price,
    category: product.category
  };
}
