import type { HTMLAttributes, ReactNode } from 'react';
import type { Size, BaseComponentProps } from '../../types/common';

export interface ModalProps extends BaseComponentProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when the modal should close */
  onClose: () => void;
  /** Modal content */
  children: ReactNode;
  /** Modal size */
  size?: Exclude<Size, 'xs'>;
  /** Modal title */
  title?: string;
  /** Description text */
  description?: string;
  /** Whether to close on backdrop click */
  closeOnBackdropClick?: boolean;
  /** Whether to close on Escape key */
  closeOnEscape?: boolean;
  /** Whether to show the close button */
  showCloseButton?: boolean;
}

export interface ModalHeaderProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ModalBodyProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface ModalFooterProps
  extends BaseComponentProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
