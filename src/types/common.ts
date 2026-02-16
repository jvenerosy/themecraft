import type { ReactNode, HTMLAttributes, RefObject } from 'react';

/**
 * Component size variants
 * @description Standard sizes for all ThemeCraft components
 */
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Color variants for semantic meaning
 * @description Standard color variants for status and emphasis
 */
export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

/**
 * Theme modes
 */
export type ThemeMode = 'light' | 'dark' | 'system';

/**
 * Accent color presets
 */
export type AccentPreset = 'ocean' | 'forest' | 'sunset' | 'berry' | 'slate';

/**
 * Base props shared by all components
 * @description Every ThemeCraft component extends these props
 */
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data attributes for testing */
  'data-testid'?: string;
}

/**
 * Props for components that can be disabled
 */
export interface DisableableProps {
  /** Whether the component is disabled */
  disabled?: boolean;
}

/**
 * Props for components with loading state
 */
export interface LoadingProps {
  /** Whether the component is in a loading state */
  loading?: boolean;
}

/**
 * Props for components with children
 */
export interface WithChildren {
  /** Component children */
  children?: ReactNode;
}

/**
 * Props for form field components
 */
export interface FormFieldProps extends DisableableProps {
  /** Field name */
  name?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the field is read-only */
  readOnly?: boolean;
  /** Error message or error state */
  error?: string | boolean;
}

/**
 * Polymorphic component types
 */
export type AsProps<E extends React.ElementType> = {
  as?: E;
};

export type PolymorphicProps<E extends React.ElementType, P = object> = P &
  AsProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P | 'as'>;

export type PolymorphicRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E>['ref'];

/**
 * Extract ref type from element type
 */
export type ElementRef<E extends React.ElementType> =
  E extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[E]
    : E extends React.ComponentType<{ ref?: RefObject<infer R> }>
      ? R
      : never;

/**
 * Generic callback type
 */
export type Callback<T = void> = () => T;

/**
 * Value change handler
 */
export type ValueChangeHandler<T> = (value: T) => void;

/**
 * Utility type to make specific props required
 */
export type RequireProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Utility type to make all props optional except specific ones
 */
export type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> &
  Pick<T, K>;

/**
 * HTML element attributes without conflicting props
 */
export type HTMLProps<E extends HTMLElement> = Omit<
  HTMLAttributes<E>,
  'color' | 'size'
>;
