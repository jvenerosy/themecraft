import { useContext } from 'react';
import { ThemeContext, type ThemeContextValue } from '../context/ThemeProvider';

/**
 * Hook to access the theme context
 * @returns Theme context value
 * @throws Error if used outside ThemeProvider
 * @example
 * const { theme, setTheme, toggleTheme } = useTheme();
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
