import type { SelectHTMLAttributes, ReactNode } from 'react';
import type { Size, BaseComponentProps, FormFieldProps } from '../../types/common';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends BaseComponentProps,
    FormFieldProps,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select size */
  size?: Size;
  /** Label text */
  label?: string;
  /** Helper text displayed below the select */
  helperText?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Options to display */
  options?: SelectOption[];
  /** Children (option elements) */
  children?: ReactNode;
  /** Makes the select full width */
  fullWidth?: boolean;
}
