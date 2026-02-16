import type { HTMLAttributes, ReactNode } from 'react';
import type { ColorVariant, BaseComponentProps } from '../../types/common';

export type AlertVariant = 'subtle' | 'solid' | 'outline';

export interface AlertProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  /** Alert content */
  children: ReactNode;
  /** Visual style variant */
  variant?: AlertVariant;
  /** Alert color/status */
  color?: Extract<ColorVariant, 'success' | 'warning' | 'error' | 'info'>;
  /** Alert title */
  title?: string;
  /** Icon to display */
  icon?: ReactNode;
  /** Whether the alert can be dismissed */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
}
