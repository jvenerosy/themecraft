import type { HTMLAttributes, ReactNode } from 'react';
import type { Size, ColorVariant, BaseComponentProps } from '../../types/common';

export type BadgeVariant = 'solid' | 'outline' | 'subtle';

export interface BadgeProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLSpanElement> {
  /** Badge content */
  children: ReactNode;
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Badge size */
  size?: Exclude<Size, 'xl'>;
  /** Color scheme */
  color?: ColorVariant;
  /** Icon to display before the text */
  leftIcon?: ReactNode;
  /** Icon to display after the text */
  rightIcon?: ReactNode;
}
