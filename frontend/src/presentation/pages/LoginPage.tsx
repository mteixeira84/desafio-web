import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useAppDependencies } from "../context/AppDependenciesContext";
import {
  AuthFooter,
  AuthRouterLink,
  BrandIcon,
  BrandMark,
  Card,
  ErrorBanner,
  Field,
  FormStack,
  PageShell,
  PrimaryButton,
  Subtitle,
  TextInput,
  Title
} from "../styles/shared";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)`
  animation: ${fadeUp} 0.45s ease-out;
`;

const InfoNote = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primarySoft};
  border-radius: ${({ theme }) => theme.radii.md};
`;

type LocationState = { message?: string };

export function LoginPage() {
  const { authRepository } = useAppDependencies();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [canRegister, setCanRegister] = useState(false);

  useEffect(() => {
    if (state?.message) {
      setInfo(state.message);
    }
  }, [state?.message]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { canRegister: open } = await authRepository.getRegistrationStatus();
        if (!cancelled) {
          setCanRegister(open);
        }
      } catch {
        /* link de cadastro nao aparece */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [authRepository]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setInfo("");

    try {
      await authRepository.login(username, password);
      navigate("/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nao foi possivel autenticar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell>
      <BrandMark>
        <BrandIcon>P</BrandIcon>
      </BrandMark>
      <Title>Entrar</Title>
      <Subtitle>Gerencie produtos com uma interface simples e rapida.</Subtitle>

      <AnimatedCard>
        <FormStack onSubmit={onSubmit}>
          <Field>
            Usuario
            <TextInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </Field>

          <Field>
            Senha
            <TextInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </Field>

          {info ? <InfoNote role="status">{info}</InfoNote> : null}
          {error ? <ErrorBanner role="alert">{error}</ErrorBanner> : null}

          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </PrimaryButton>
        </FormStack>
      </AnimatedCard>

      {canRegister ? (
        <AuthFooter>
          Primeiro acesso? <AuthRouterLink to="/register">Criar usuario administrador</AuthRouterLink>
        </AuthFooter>
      ) : null}
    </PageShell>
  );
}
