export const theme = {
  colors: {
    bg: "#f0f4f8",
    bgGradientEnd: "#e8eef6",
    surface: "#ffffff",
    surfaceMuted: "#f8fafc",
    border: "#e2e8f0",
    borderFocus: "#6366f1",
    text: "#0f172a",
    textMuted: "#64748b",
    textSubtle: "#94a3b8",
    primary: "#4f46e5",
    primaryHover: "#4338ca",
    primarySoft: "rgba(79, 70, 229, 0.1)",
    danger: "#dc2626",
    dangerSoft: "rgba(220, 38, 38, 0.08)",
    dangerHover: "#b91c1c",
    success: "#059669"
  },
  radii: {
    sm: "6px",
    md: "12px",
    lg: "20px",
    full: "9999px"
  },
  shadows: {
    sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
    md: "0 4px 16px rgba(15, 23, 42, 0.08)",
    lg: "0 12px 40px rgba(15, 23, 42, 0.12)",
    focus: "0 0 0 3px rgba(99, 102, 241, 0.25)"
  },
  font: {
    sans: '"DM Sans", "Segoe UI", system-ui, -apple-system, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace'
  },
  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem"
  }
} as const;

export type AppTheme = typeof theme;
