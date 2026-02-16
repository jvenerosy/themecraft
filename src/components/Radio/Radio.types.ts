import type { InputHTMLAttributes, ReactNode } from 'react';
import type { Size, BaseComponentProps } from '../../types/common';

export interface RadioProps
  extends BaseComponentProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Radio size */
  size?: Exclude<Size, 'xl'>;
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Error state */
  error?: boolean;
}

export interface RadioGroupProps extends BaseComponentProps {
  /** Radio group content */
  children: ReactNode;
  /** Group name */
  name: string;
  /** Current value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Layout direction */
  direction?: 'horizontal' | 'vertical';
  /** Disabled state */
  disabled?: boolean;
}
