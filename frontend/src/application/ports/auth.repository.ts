import type { AuthToken, RegistrationStatus } from "../../domain/entities/auth";

export interface AuthRepository {
  getRegistrationStatus(): Promise<RegistrationStatus>;
  login(username: string, password: string): Promise<AuthToken>;
  register(username: string, password: string): Promise<AuthToken>;
}
