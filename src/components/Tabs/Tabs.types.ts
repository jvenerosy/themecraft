import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types/common';

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface TabsProps extends BaseComponentProps {
  /** Tab items */
  items: TabItem[];
  /** Default active tab */
  defaultValue?: string;
  /** Controlled active tab */
  value?: string;
  /** Callback when tab changes */
  onChange?: (id: string) => void;
  /** Visual variant */
  variant?: 'line' | 'enclosed' | 'pills';
  /** Whether tabs should fill available space */
  fullWidth?: boolean;
}
