import axios, { type AxiosInstance } from "axios";
import type { TokenStorage } from "../../application/ports/token-storage.port";

export function createHttpClient(tokenStorage: TokenStorage): AxiosInstance {
  const baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

  const client = axios.create({ baseURL });

  client.interceptors.request.use((config) => {
    const token = tokenStorage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return client;
}
