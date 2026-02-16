import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types/common';

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface DropdownItem {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  danger?: boolean;
  divider?: boolean;
}

export interface DropdownProps extends BaseComponentProps {
  /** Trigger element */
  trigger: ReactNode;
  /** Dropdown items */
  items: DropdownItem[];
  /** Callback when an item is selected */
  onSelect?: (id: string) => void;
  /** Placement of the dropdown */
  placement?: DropdownPlacement;
  /** Whether the dropdown is disabled */
  disabled?: boolean;
}
