import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import type { Product } from "../../domain/entities/product";
import { useAppDependencies } from "../context/AppDependenciesContext";
import {
  BrandIcon,
  BrandMark,
  Card,
  DangerButton,
  EmptyState,
  ErrorBanner,
  Field,
  FormStack,
  GhostButton,
  HeaderRow,
  PageShell,
  PriceTag,
  PrimaryButton,
  ProductInfo,
  ProductList,
  ProductMeta,
  ProductName,
  ProductRow,
  SectionLabel,
  Subtitle,
  TextInput,
  Title
} from "../styles/shared";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.space.lg};
  animation: ${fadeUp} 0.4s ease-out;
`;

const ListSection = styled.section`
  animation: ${fadeUp} 0.5s ease-out 0.05s both;
`;

export function ProductsPage() {
  const { productRepository, tokenStorage } = useAppDependencies();
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadProducts() {
    try {
      const list = await productRepository.list();
      setProducts(list);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar produtos.");
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function onCreate(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await productRepository.create({
        name,
        category,
        price: Number(price)
      });

      setName("");
      setPrice("");
      setCategory("");
      await loadProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao cadastrar produto.");
    } finally {
      setLoading(false);
    }
  }

  async function onDelete(id: string) {
    try {
      await productRepository.delete(id);
      await loadProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao excluir produto.");
    }
  }

  function logout() {
    tokenStorage.clearToken();
    navigate("/login");
  }

  return (
    <PageShell>
      <BrandMark>
        <BrandIcon>P</BrandIcon>
      </BrandMark>

      <HeaderRow>
        <div>
          <Title>Produtos</Title>
          <Subtitle style={{ marginBottom: 0 }}>
            Cadastre, liste e remova itens do catalogo.
          </Subtitle>
        </div>
        <GhostButton type="button" onClick={logout}>
          Sair
        </GhostButton>
      </HeaderRow>

      <FormCard>
        <SectionLabel>Novo produto</SectionLabel>
        <FormStack onSubmit={onCreate}>
          <Field>
            Nome
            <TextInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex.: Teclado mecanico"
              required
            />
          </Field>

          <Field>
            Preco
            <TextInput
              type="number"
              min="0.01"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0,00"
              required
            />
          </Field>

          <Field>
            Categoria
            <TextInput
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Ex.: Perifericos"
              required
            />
          </Field>

          <PrimaryButton type="submit" disabled={loading}>
            {loading ? "Salvando..." : "Cadastrar produto"}
          </PrimaryButton>
        </FormStack>
      </FormCard>

      {error ? <ErrorBanner role="alert">{error}</ErrorBanner> : null}

      <ListSection>
        <SectionLabel>Catalogo ({products.length})</SectionLabel>
        {products.length === 0 ? (
          <EmptyState>Nenhum produto ainda. Adicione o primeiro acima.</EmptyState>
        ) : (
          <ProductList>
            {products.map((product) => (
              <ProductRow key={product.id}>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductMeta>{product.category}</ProductMeta>
                  <PriceTag>R$ {product.price.toFixed(2)}</PriceTag>
                </ProductInfo>
                <DangerButton type="button" onClick={() => onDelete(product.id)}>
                  Excluir
                </DangerButton>
              </ProductRow>
            ))}
          </ProductList>
        )}
      </ListSection>
    </PageShell>
  );
}
