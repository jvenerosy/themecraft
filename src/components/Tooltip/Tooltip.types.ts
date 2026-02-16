import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types/common';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends BaseComponentProps {
  /** Tooltip content */
  content: ReactNode;
  /** Trigger element */
  children: ReactNode;
  /** Placement of the tooltip */
  placement?: TooltipPlacement;
  /** Delay before showing (ms) */
  delay?: number;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
}
