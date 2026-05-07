import type { AuthToken, RegistrationStatus } from "../../domain/entities/auth";
import type {
  AuthTokenResponseDto,
  RegistrationOpenResponseDto
} from "../http/dtos/auth.dto";

export function mapAuthTokenDtoToDomain(dto: AuthTokenResponseDto): AuthToken {
  return { value: dto.token };
}

export function mapRegistrationOpenDtoToDomain(
  dto: RegistrationOpenResponseDto
): RegistrationStatus {
  return { canRegister: dto.canRegister };
}
