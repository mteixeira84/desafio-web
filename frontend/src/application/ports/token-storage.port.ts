/** Contrato para onde o JWT e persistido (infra escolhe localStorage, sessionStorage, etc.). */
export interface TokenStorage {
  getToken(): string | null;
  setToken(token: string): void;
  clearToken(): void;
}
