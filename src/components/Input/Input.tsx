import { forwardRef, useId } from 'react';
import { cn } from '../../utils/classNames';
import type { InputProps } from './Input.types';
import './Input.css';

/** Input component for text entry. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled = false,
      required = false,
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const hasError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : undefined;

    return (
      <div
        className={cn(
          'tc-input-wrapper',
          fullWidth && 'tc-input-wrapper--full-width'
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'tc-input-label',
              required && 'tc-input-label--required'
            )}
          >
            {label}
          </label>
        )}
        <div className="tc-input-container">
          {leftIcon && (
            <span className="tc-input__icon tc-input__icon--left">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={helperText || errorMessage ? helperId : undefined}
            className={cn(
              'tc-input',
              `tc-input--${size}`,
              hasError && 'tc-input--error',
              !!leftIcon && 'tc-input--with-left-icon',
              !!rightIcon && 'tc-input--with-right-icon',
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="tc-input__icon tc-input__icon--right">
              {rightIcon}
            </span>
          )}
        </div>
        {(helperText || errorMessage) && (
          <span
            id={helperId}
            className={cn(
              'tc-input-helper',
              hasError && 'tc-input-helper--error'
            )}
          >
            {errorMessage || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
