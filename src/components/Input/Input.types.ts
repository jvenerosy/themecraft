import type { InputHTMLAttributes, ReactNode } from 'react';
import type { Size, BaseComponentProps, FormFieldProps } from '../../types/common';

export interface InputProps
  extends BaseComponentProps,
    FormFieldProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input size */
  size?: Size;
  /** Label text */
  label?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Icon displayed at the start of the input */
  leftIcon?: ReactNode;
  /** Icon displayed at the end of the input */
  rightIcon?: ReactNode;
  /** Makes the input full width */
  fullWidth?: boolean;
}
