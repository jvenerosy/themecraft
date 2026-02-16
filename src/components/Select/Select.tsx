import { forwardRef, useId } from 'react';
import { cn } from '../../utils/classNames';
import type { SelectProps } from './Select.types';
import './Select.css';

const ChevronIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/** Select component for choosing from a list of options. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      label,
      helperText,
      error,
      placeholder,
      options,
      children,
      fullWidth = false,
      disabled = false,
      required = false,
      className,
      id: providedId,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const hasError = Boolean(error);
    const errorMessage = typeof error === 'string' ? error : undefined;
    const isPlaceholder = !value && !defaultValue;

    return (
      <div
        className={cn(
          'tc-select-wrapper',
          fullWidth && 'tc-select-wrapper--full-width'
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'tc-select-label',
              required && 'tc-select-label--required'
            )}
          >
            {label}
          </label>
        )}
        <div className="tc-select-container">
          <select
            ref={ref}
            id={id}
            disabled={disabled}
            required={required}
            aria-invalid={hasError}
            aria-describedby={helperText || errorMessage ? helperId : undefined}
            value={value}
            defaultValue={defaultValue ?? (placeholder ? '' : undefined)}
            className={cn(
              'tc-select',
              `tc-select--${size}`,
              hasError && 'tc-select--error',
              isPlaceholder && 'tc-select--placeholder',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options
              ? options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))
              : children}
          </select>
          <span className="tc-select__icon">
            <ChevronIcon />
          </span>
        </div>
        {(helperText || errorMessage) && (
          <span
            id={helperId}
            className={cn(
              'tc-select-helper',
              hasError && 'tc-select-helper--error'
            )}
          >
            {errorMessage || helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
