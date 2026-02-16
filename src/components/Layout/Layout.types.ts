import type { HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Container content */
  children: ReactNode;
  /** Maximum width */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Center the container */
  centered?: boolean;
}

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Section content */
  children: ReactNode;
  /** Vertical padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Stack content */
  children: ReactNode;
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Horizontal alignment */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /** Vertical alignment */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  /** Row content */
  children: ReactNode;
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Horizontal alignment */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  /** Allow wrapping */
  wrap?: boolean;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Grid content */
  children: ReactNode;
  /** Number of columns */
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 'auto';
  /** Gap between items */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Minimum column width for auto columns */
  minColWidth?: string;
}

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /** Spacer size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Direction */
  axis?: 'horizontal' | 'vertical';
}

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Spacing around divider */
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Grid item content */
  children: ReactNode;
  /** Number of columns to span */
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Number of rows to span */
  rowSpan?: 1 | 2 | 3 | 4;
}
