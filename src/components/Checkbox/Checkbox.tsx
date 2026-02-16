import { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../utils/classNames';
import { mergeRefs } from '../../utils/mergeRefs';
import type { CheckboxProps } from './Checkbox.types';
import './Checkbox.css';

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="10 3 4.5 8.5 2 6" />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="2" y1="6" x2="10" y2="6" />
  </svg>
);

/** Checkbox component for boolean selection. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'md',
      label,
      description,
      error = false,
      indeterminate = false,
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <label
        className={cn(
          'tc-checkbox',
          `tc-checkbox--${size}`,
          disabled && 'tc-checkbox--disabled',
          error && 'tc-checkbox--error',
          className
        )}
      >
        <input
          ref={mergeRefs(ref, internalRef)}
          type="checkbox"
          id={id}
          disabled={disabled}
          className="tc-checkbox__input"
          aria-invalid={error}
          {...props}
        />
        <span className="tc-checkbox__control">
          <span className="tc-checkbox__icon">
            {indeterminate ? <MinusIcon /> : <CheckIcon />}
          </span>
        </span>
        {(label || description) && (
          <span className="tc-checkbox__label-container">
            {label && <span className="tc-checkbox__label">{label}</span>}
            {description && (
              <span className="tc-checkbox__description">{description}</span>
            )}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
