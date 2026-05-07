import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

export function RegisterPage() {
  const { authRepository } = useAppDependencies();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { canRegister } = await authRepository.getRegistrationStatus();
        if (!cancelled && !canRegister) {
          navigate("/login", {
            replace: true,
            state: { message: "Ja existe usuario cadastrado. Entre com sua conta." }
          });
        }
      } catch {
        if (!cancelled) {
          setError("Nao foi possivel verificar se o cadastro esta aberto.");
        }
      } finally {
        if (!cancelled) {
          setChecking(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [authRepository, navigate]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("As senhas nao conferem.");
      return;
    }

    setLoading(true);
    try {
      await authRepository.register(username, password);
      navigate("/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nao foi possivel concluir o cadastro.");
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <PageShell>
        <Subtitle>Carregando...</Subtitle>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <BrandMark>
        <BrandIcon>P</BrandIcon>
      </BrandMark>
      <Title>Primeiro acesso</Title>
      <Subtitle>Crie o primeiro usuario do sistema. A senha sera armazenada apenas como hash no banco.</Subtitle>

      <AnimatedCard>
        <FormStack onSubmit={onSubmit}>
          <Field>
            Usuario
            <TextInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              minLength={3}
              required
            />
          </Field>

          <Field>
            Senha
            <TextInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </Field>

          <Field>
            Confirmar senha
            <TextInput
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </Field>

          {error ? <ErrorBanner role="alert">{error}</ErrorBanner> : null}

          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Criando conta..." : "Criar conta e entrar"}
          </PrimaryButton>
        </FormStack>
      </AnimatedCard>

      <AuthFooter>
        Ja tem conta? <AuthRouterLink to="/login">Entrar</AuthRouterLink>
      </AuthFooter>
    </PageShell>
  );
}
