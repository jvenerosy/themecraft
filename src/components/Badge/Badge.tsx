import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import type { BadgeProps } from './Badge.types';
import './Badge.css';

/** Badge component for displaying status or labels. */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'subtle',
      size = 'md',
      color = 'primary',
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'tc-badge',
          `tc-badge--${variant}`,
          `tc-badge--${size}`,
          `tc-badge--${color}`,
          className
        )}
        {...props}
      >
        {leftIcon && <span className="tc-badge__icon">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="tc-badge__icon">{rightIcon}</span>}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
