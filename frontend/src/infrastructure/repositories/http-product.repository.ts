import type { NewProduct, ProductRepository } from "../../application/ports/product.repository";
import type { Product } from "../../domain/entities/product";
import type { AxiosInstance } from "axios";
import type { ProductResponseDto } from "../http/dtos/product.dto";
import { getApiErrorMessage } from "../http/map-axios-error";
import { mapNewProductToRequestDto } from "../mappers/new-product.mapper";
import { mapProductDtoToDomain } from "../mappers/product.mapper";

export class HttpProductRepository implements ProductRepository {
  constructor(private readonly http: AxiosInstance) {}

  async list(): Promise<Product[]> {
    try {
      const { data } = await this.http.get<ProductResponseDto[]>("/products");
      return data.map(mapProductDtoToDomain);
    } catch (err) {
      throw new Error(getApiErrorMessage(err, "Erro ao carregar produtos."));
    }
  }

  async create(product: NewProduct): Promise<void> {
    try {
      const body = mapNewProductToRequestDto(product);
      await this.http.post("/products", body);
    } catch (err) {
      throw new Error(getApiErrorMessage(err, "Erro ao cadastrar produto."));
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.http.delete(`/products/${id}`);
    } catch (err) {
      throw new Error(getApiErrorMessage(err, "Erro ao excluir produto."));
    }
  }
}
