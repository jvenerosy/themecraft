import type { InputHTMLAttributes } from 'react';
import type { Size, BaseComponentProps } from '../../types/common';

export interface SwitchProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Switch size */
  size?: Exclude<Size, 'xl'>;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Position of the label */
  labelPosition?: 'left' | 'right';
}
