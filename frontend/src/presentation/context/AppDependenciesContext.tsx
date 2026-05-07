import { createContext, useContext, useMemo, type ReactNode } from "react";
import {
  createAppDependencies,
  type AppDependencies
} from "../../infrastructure/composition-root";

const AppDependenciesContext = createContext<AppDependencies | null>(null);

export function AppDependenciesProvider({ children }: { children: ReactNode }) {
  const value = useMemo(() => createAppDependencies(), []);
  return (
    <AppDependenciesContext.Provider value={value}>
      {children}
    </AppDependenciesContext.Provider>
  );
}

export function useAppDependencies(): AppDependencies {
  const ctx = useContext(AppDependenciesContext);
  if (!ctx) {
    throw new Error("useAppDependencies deve ser usado dentro de AppDependenciesProvider.");
  }
  return ctx;
}
