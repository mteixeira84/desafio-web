/** Resposta de POST /auth/login e POST /auth/register */
export type AuthTokenResponseDto = {
  token: string;
};

/** GET /auth/registration-open */
export type RegistrationOpenResponseDto = {
  canRegister: boolean;
};

export type LoginRequestDto = {
  username: string;
  password: string;
};

export type RegisterRequestDto = {
  username: string;
  password: string;
};
