/**
 * Formato JSON retornado pela API em GET /products (espelha o contrato do backend).
 * Mantido separado do dominio para mudancas de API sem alterar entidades de negocio.
 */
export type ProductResponseDto = {
  id: string;
  name: string;
  price: number;
  category: string;
};

/** Corpo de POST /products */
export type CreateProductRequestDto = {
  name: string;
  price: number;
  category: string;
};
