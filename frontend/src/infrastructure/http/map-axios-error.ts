import axios from "axios";

export function getApiErrorMessage(err: unknown, fallback: string): string {
  if (axios.isAxiosError(err) && err.response?.data && typeof err.response.data === "object") {
    const data = err.response.data as { message?: string };
    if (typeof data.message === "string") {
      return data.message;
    }
  }
  return fallback;
}
