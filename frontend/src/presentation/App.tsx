import { Navigate, Route, Routes } from "react-router-dom";
import { useAppDependencies } from "./context/AppDependenciesContext";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProductsPage } from "./pages/ProductsPage";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { tokenStorage } = useAppDependencies();
  const token = tokenStorage.getToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export function App() {
  const { tokenStorage } = useAppDependencies();
  const hasToken = Boolean(tokenStorage.getToken());

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/products"
        element={
          <RequireAuth>
            <ProductsPage />
          </RequireAuth>
        }
      />
      <Route
        path="*"
        element={
          hasToken ? (
            <Navigate to="/products" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
}
