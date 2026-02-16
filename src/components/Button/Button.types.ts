import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Size, ColorVariant, BaseComponentProps } from '../../types/common';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';

export interface ButtonProps
  extends BaseComponentProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  /** Button content */
  children: ReactNode;
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: Size;
  /** Color scheme */
  color?: ColorVariant;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Icon to display before the button text */
  leftIcon?: ReactNode;
  /** Icon to display after the button text */
  rightIcon?: ReactNode;
  /** Makes the button full width */
  fullWidth?: boolean;
  /** Accessible label for screen readers */
  'aria-label'?: string;
}
