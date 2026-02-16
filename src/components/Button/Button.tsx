import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import type { ButtonProps } from './Button.types';
import './Button.css';

const Spinner = () => (
  <svg
    className="tc-button__spinner"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="31.416"
      strokeDashoffset="10"
    />
  </svg>
);

/** Button component for user interactions. */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'solid',
      size = 'md',
      color = 'primary',
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          'tc-button',
          `tc-button--${variant}`,
          `tc-button--${size}`,
          `tc-button--${color}`,
          loading && 'tc-button--loading',
          fullWidth && 'tc-button--full-width',
          className
        )}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <span className="tc-button__icon">
            <Spinner />
          </span>
        ) : leftIcon ? (
          <span className="tc-button__icon">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !loading && (
          <span className="tc-button__icon">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
