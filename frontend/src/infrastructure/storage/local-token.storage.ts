import type { TokenStorage } from "../../application/ports/token-storage.port";

const KEY = "token";

export class LocalTokenStorage implements TokenStorage {
  getToken(): string | null {
    return localStorage.getItem(KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  clearToken(): void {
    localStorage.removeItem(KEY);
  }
}
