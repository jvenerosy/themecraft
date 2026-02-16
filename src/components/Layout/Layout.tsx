import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import type {
  ContainerProps,
  SectionProps,
  StackProps,
  RowProps,
  GridProps,
  GridItemProps,
  SpacerProps,
  DividerProps,
} from './Layout.types';
import './Layout.css';

/** Container component for centering and constraining content width. */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'lg', centered = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'tc-container',
          `tc-container--${size}`,
          centered && 'tc-container--centered',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

/** Section component for vertical page sections. */
export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, padding = 'lg', className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('tc-section', `tc-section--padding-${padding}`, className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

/** Stack component for vertical flex layouts. */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    { children, gap = 'md', align = 'stretch', justify = 'start', className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'tc-stack',
          `tc-stack--gap-${gap}`,
          `tc-stack--align-${align}`,
          `tc-stack--justify-${justify}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';

/** Row component for horizontal flex layouts. */
export const Row = forwardRef<HTMLDivElement, RowProps>(
  (
    { children, gap = 'md', align = 'center', justify = 'start', wrap = true, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'tc-row',
          `tc-row--gap-${gap}`,
          `tc-row--align-${align}`,
          `tc-row--justify-${justify}`,
          wrap && 'tc-row--wrap',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Row.displayName = 'Row';

/** Grid component for CSS grid layouts. */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, cols = 'auto', gap = 'md', minColWidth = '250px', className, style, ...props }, ref) => {
    const gridStyle = cols === 'auto'
      ? { ...style, '--tc-grid-min-col-width': minColWidth } as React.CSSProperties
      : style;

    return (
      <div
        ref={ref}
        className={cn(
          'tc-grid',
          cols !== 'auto' && `tc-grid--cols-${cols}`,
          cols === 'auto' && 'tc-grid--auto',
          `tc-grid--gap-${gap}`,
          className
        )}
        style={gridStyle}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';

/** Spacer component for adding space between elements. */
export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ size = 'md', axis = 'vertical', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'tc-spacer',
          `tc-spacer--${size}`,
          `tc-spacer--${axis}`,
          className
        )}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';

/** Divider component for visual separation. */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', spacing = 'md', className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cn(
          'tc-divider',
          `tc-divider--${orientation}`,
          `tc-divider--spacing-${spacing}`,
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

/** GridItem component for spanning multiple columns or rows in a Grid. */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  ({ children, colSpan = 1, rowSpan = 1, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'tc-grid-item',
          colSpan > 1 && `tc-grid-item--col-${colSpan}`,
          rowSpan > 1 && `tc-grid-item--row-${rowSpan}`,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridItem.displayName = 'GridItem';
