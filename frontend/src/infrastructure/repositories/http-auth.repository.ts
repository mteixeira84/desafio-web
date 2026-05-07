import type { AuthRepository } from "../../application/ports/auth.repository";
import type { AuthToken, RegistrationStatus } from "../../domain/entities/auth";
import type { TokenStorage } from "../../application/ports/token-storage.port";
import type { AxiosInstance } from "axios";
import type {
  AuthTokenResponseDto,
  LoginRequestDto,
  RegisterRequestDto,
  RegistrationOpenResponseDto
} from "../http/dtos/auth.dto";
import { getApiErrorMessage } from "../http/map-axios-error";
import {
  mapAuthTokenDtoToDomain,
  mapRegistrationOpenDtoToDomain
} from "../mappers/auth.mapper";

export class HttpAuthRepository implements AuthRepository {
  constructor(
    private readonly http: AxiosInstance,
    private readonly tokenStorage: TokenStorage
  ) {}

  async getRegistrationStatus(): Promise<RegistrationStatus> {
    const { data } = await this.http.get<RegistrationOpenResponseDto>("/auth/registration-open");
    return mapRegistrationOpenDtoToDomain(data);
  }

  async login(username: string, password: string): Promise<AuthToken> {
    try {
      const body: LoginRequestDto = { username, password };
      const { data } = await this.http.post<AuthTokenResponseDto>("/auth/login", body);
      const token = mapAuthTokenDtoToDomain(data);
      this.tokenStorage.setToken(token.value);
      return token;
    } catch (err) {
      throw new Error(getApiErrorMessage(err, "Nao foi possivel autenticar. Verifique as credenciais."));
    }
  }

  async register(username: string, password: string): Promise<AuthToken> {
    try {
      const body: RegisterRequestDto = { username, password };
      const { data } = await this.http.post<AuthTokenResponseDto>("/auth/register", body);
      const token = mapAuthTokenDtoToDomain(data);
      this.tokenStorage.setToken(token.value);
      return token;
    } catch (err) {
      throw new Error(getApiErrorMessage(err, "Nao foi possivel concluir o cadastro."));
    }
  }
}
