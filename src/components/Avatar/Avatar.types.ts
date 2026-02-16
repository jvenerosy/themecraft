import type { ImgHTMLAttributes } from 'react';
import type { Size, BaseComponentProps } from '../../types/common';

export interface AvatarProps
  extends BaseComponentProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, 'size'> {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback text (usually initials) */
  fallback?: string;
  /** Avatar size */
  size?: Size;
  /** Shape variant */
  shape?: 'circle' | 'square';
  /** Status indicator */
  status?: 'online' | 'offline' | 'away' | 'busy';
}

export interface AvatarGroupProps extends BaseComponentProps {
  /** Avatar components */
  children: React.ReactNode;
  /** Maximum number of avatars to show */
  max?: number;
  /** Avatar size for all children */
  size?: Size;
}
