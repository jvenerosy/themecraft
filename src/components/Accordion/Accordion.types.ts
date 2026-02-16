import type { ReactNode } from 'react';
import type { BaseComponentProps } from '../../types/common';

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends BaseComponentProps {
  /** Accordion items */
  items: AccordionItem[];
  /** Default expanded item(s) */
  defaultValue?: string | string[];
  /** Controlled expanded item(s) */
  value?: string | string[];
  /** Callback when expansion changes */
  onChange?: (value: string | string[]) => void;
  /** Allow multiple items to be expanded */
  multiple?: boolean;
  /** Visual variant */
  variant?: 'default' | 'bordered' | 'separated';
}
