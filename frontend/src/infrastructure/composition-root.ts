import type { AuthRepository } from "../application/ports/auth.repository";
import type { ProductRepository } from "../application/ports/product.repository";
import type { TokenStorage } from "../application/ports/token-storage.port";
import { createHttpClient } from "./http/create-http-client";
import { HttpAuthRepository } from "./repositories/http-auth.repository";
import { HttpProductRepository } from "./repositories/http-product.repository";
import { LocalTokenStorage } from "./storage/local-token.storage";

export type AppDependencies = {
  authRepository: AuthRepository;
  productRepository: ProductRepository;
  tokenStorage: TokenStorage;
};

export function createAppDependencies(): AppDependencies {
  const tokenStorage: TokenStorage = new LocalTokenStorage();
  const http = createHttpClient(tokenStorage);

  return {
    tokenStorage,
    authRepository: new HttpAuthRepository(http, tokenStorage),
    productRepository: new HttpProductRepository(http)
  };
}
