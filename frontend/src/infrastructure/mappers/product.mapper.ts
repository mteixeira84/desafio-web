import type { Product } from "../../domain/entities/product";
import type { ProductResponseDto } from "../http/dtos/product.dto";

export function mapProductDtoToDomain(dto: ProductResponseDto): Product {
  return {
    id: dto.id,
    name: dto.name,
    price: dto.price,
    category: dto.category
  };
}
