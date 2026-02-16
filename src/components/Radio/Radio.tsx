import React, { forwardRef, createContext, useContext, useState } from 'react';
import { cn } from '../../utils/classNames';
import type { RadioProps, RadioGroupProps } from './Radio.types';
import './Radio.css';

interface RadioGroupContextValue {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

/** Radio component for single selection from a group. */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'md',
      label,
      description,
      error = false,
      disabled: propDisabled = false,
      className,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const group = useContext(RadioGroupContext);
    const name = group?.name || props.name;
    const isChecked = group ? group.value === value : undefined;
    const disabled = propDisabled || group?.disabled;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      if (group?.onChange && value !== undefined) {
        group.onChange(String(value));
      }
    };

    return (
      <label
        className={cn(
          'tc-radio',
          `tc-radio--${size}`,
          disabled && 'tc-radio--disabled',
          error && 'tc-radio--error',
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="tc-radio__input"
          aria-invalid={error}
          {...props}
        />
        <span className="tc-radio__control">
          <span className="tc-radio__dot" />
        </span>
        {(label || description) && (
          <span className="tc-radio__label-container">
            {label && <span className="tc-radio__label">{label}</span>}
            {description && (
              <span className="tc-radio__description">{description}</span>
            )}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

/** RadioGroup component for grouping radio buttons. */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      name,
      value,
      defaultValue,
      onChange,
      direction = 'vertical',
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = value ?? internalValue;

    const handleChange = (newValue: string) => {
      setInternalValue(newValue);
      onChange?.(newValue);
    };

    return (
      <RadioGroupContext.Provider
        value={{
          name,
          value: currentValue,
          onChange: handleChange,
          disabled,
        }}
      >
        <div
          ref={ref}
          role="radiogroup"
          className={cn(
            'tc-radio-group',
            `tc-radio-group--${direction}`,
            className
          )}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
