import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import type { SwitchProps } from './Switch.types';
import './Switch.css';

/** Switch component for toggling between two states. */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = 'md',
      label,
      description,
      labelPosition = 'right',
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          'tc-switch',
          `tc-switch--${size}`,
          `tc-switch--label-${labelPosition}`,
          disabled && 'tc-switch--disabled',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={id}
          disabled={disabled}
          className="tc-switch__input"
          {...props}
        />
        <span className="tc-switch__track">
          <span className="tc-switch__thumb" />
        </span>
        {(label || description) && (
          <span className="tc-switch__label-container">
            {label && <span className="tc-switch__label">{label}</span>}
            {description && (
              <span className="tc-switch__description">{description}</span>
            )}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
