import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { ThemeMode, AccentPreset } from '../types/common';

export interface ThemeContextValue {
  /** Current theme mode */
  theme: ThemeMode;
  /** Resolved theme (light or dark, never 'system') */
  resolvedTheme: 'light' | 'dark';
  /** Current accent preset */
  accent: AccentPreset;
  /** Set the theme mode */
  setTheme: (theme: ThemeMode) => void;
  /** Set the accent preset */
  setAccent: (accent: AccentPreset) => void;
  /** Toggle between light and dark */
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  /** Child components */
  children: ReactNode;
  /** Default theme mode */
  defaultTheme?: ThemeMode;
  /** Default accent preset */
  defaultAccent?: AccentPreset;
  /** Storage key for persisting theme */
  storageKey?: string;
  /** Attribute to set on the root element */
  attribute?: 'class' | 'data-theme';
}

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  defaultAccent = 'ocean',
  storageKey = 'themecraft-theme',
  attribute = 'data-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
    return defaultTheme;
  });

  const [accent, setAccentState] = useState<AccentPreset>(() => {
    if (typeof window === 'undefined') return defaultAccent;
    const stored = localStorage.getItem(`${storageKey}-accent`);
    if (
      stored === 'ocean' ||
      stored === 'forest' ||
      stored === 'sunset' ||
      stored === 'berry' ||
      stored === 'slate'
    ) {
      return stored;
    }
    return defaultAccent;
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    if (theme === 'system') return getSystemTheme();
    return theme;
  });

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') {
      setResolvedTheme(theme);
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');

    const handler = (e: MediaQueryListEvent) => {
      setResolvedTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    if (attribute === 'class') {
      root.classList.remove('light', 'dark');
      root.classList.add(resolvedTheme);
    } else {
      root.setAttribute('data-theme', resolvedTheme);
    }
  }, [resolvedTheme, attribute]);

  // Apply accent to document
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  const setTheme = useCallback(
    (newTheme: ThemeMode) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
    },
    [storageKey]
  );

  const setAccent = useCallback(
    (newAccent: AccentPreset) => {
      setAccentState(newAccent);
      localStorage.setItem(`${storageKey}-accent`, newAccent);
    },
    [storageKey]
  );

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }, [resolvedTheme, setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      accent,
      setTheme,
      setAccent,
      toggleTheme,
    }),
    [theme, resolvedTheme, accent, setTheme, setAccent, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
