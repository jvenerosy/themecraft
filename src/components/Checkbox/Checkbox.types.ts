import type { InputHTMLAttributes } from 'react';
import type { Size, BaseComponentProps } from '../../types/common';

export interface CheckboxProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Checkbox size */
  size?: Exclude<Size, 'xl'>;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Error state */
  error?: boolean;
  /** Indeterminate state */
  indeterminate?: boolean;
}
