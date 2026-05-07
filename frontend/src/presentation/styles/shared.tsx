import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageShell = styled.main`
  max-width: 720px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.md};
  padding-bottom: ${({ theme }) => theme.space.xxl};
`;

export const BrandMark = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const BrandIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    #7c3aed 100%
  );
  color: #fff;
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const Title = styled.h1`
  margin: 0 0 ${({ theme }) => theme.space.xs};
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.p`
  margin: 0 0 ${({ theme }) => theme.space.lg};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.space.lg};
`;

export const FormStack = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const TextInput = styled.input`
  font-family: inherit;
  font-size: 1rem;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.text};
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.borderFocus};
    background: ${({ theme }) => theme.colors.surface};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

export const PrimaryButton = styled.button`
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.lg};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  color: #fff;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryHover} 100%
  );
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease,
    opacity 0.12s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const GhostButton = styled.button`
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surface};
  transition:
    border-color 0.15s ease,
    color 0.15s ease,
    background 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textSubtle};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceMuted};
  }
`;

export const DangerButton = styled.button`
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.danger};
  background: ${({ theme }) => theme.colors.dangerSoft};
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.danger};
    color: #fff;
  }
`;

export const ErrorBanner = styled.p`
  margin: 0;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.danger};
  background: ${({ theme }) => theme.colors.dangerSoft};
  border: 1px solid rgba(220, 38, 38, 0.2);
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const ProductList = styled.ul`
  list-style: none;
  margin: ${({ theme }) => theme.space.lg} 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

export const ProductRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: box-shadow 0.15s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const ProductInfo = styled.div`
  min-width: 0;
`;

export const ProductName = styled.strong`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space.xs};
`;

export const ProductMeta = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const PriceTag = styled.span`
  display: inline-block;
  margin-top: ${({ theme }) => theme.space.sm};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primarySoft};
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const SectionLabel = styled.h2`
  margin: 0 0 ${({ theme }) => theme.space.md};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const EmptyState = styled.p`
  margin: ${({ theme }) => theme.space.lg} 0 0;
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px dashed ${({ theme }) => theme.colors.border};
`;

export const AuthFooter = styled.p`
  margin: ${({ theme }) => theme.space.lg} 0 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  line-height: 1.5;
`;

export const AuthRouterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
