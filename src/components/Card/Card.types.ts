import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseComponentProps } from '../../types/common';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  /** Card content */
  children: ReactNode;
  /** Visual style variant */
  variant?: CardVariant;
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Whether the card is interactive (hoverable) */
  interactive?: boolean;
  /** Makes the card clickable as a button */
  asButton?: boolean;
}

export interface CardHeaderProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardBodyProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface CardFooterProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
