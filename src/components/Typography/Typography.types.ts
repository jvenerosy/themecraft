import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseComponentProps } from '../../types/common';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'success' | 'warning' | 'error' | 'info';

export interface HeadingProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLHeadingElement> {
  /** Heading content */
  children: ReactNode;
  /** Heading level (h1-h6) */
  as?: HeadingLevel;
  /** Visual size (defaults to match the heading level) */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Text color */
  color?: TextColor;
  /** Truncate with ellipsis */
  truncate?: boolean;
}

export interface TextProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  /** Text content */
  children: ReactNode;
  /** Render as span instead of p */
  as?: 'p' | 'span';
  /** Text size */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Text color */
  color?: TextColor;
  /** Truncate with ellipsis */
  truncate?: boolean;
  /** Line clamp (truncate after n lines) */
  lineClamp?: number;
}

export interface LabelProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLLabelElement> {
  /** Label content */
  children: ReactNode;
  /** Associated input ID */
  htmlFor?: string;
  /** Whether the field is required */
  required?: boolean;
}
