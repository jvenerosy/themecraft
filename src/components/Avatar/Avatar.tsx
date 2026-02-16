import { forwardRef, useState, Children, isValidElement, cloneElement } from 'react';
import { cn } from '../../utils/classNames';
import type { AvatarProps, AvatarGroupProps } from './Avatar.types';
import './Avatar.css';

/** Avatar component for displaying user images or initials. */
export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      fallback,
      size = 'md',
      shape = 'circle',
      status,
      className,
      ...props
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    const showImage = src && !imageError;

    return (
      <span
        ref={ref}
        className={cn(
          'tc-avatar',
          `tc-avatar--${size}`,
          `tc-avatar--${shape}`,
          className
        )}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="tc-avatar__image"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="tc-avatar__fallback">
            {fallback || alt?.charAt(0) || '?'}
          </span>
        )}
        {status && (
          <span
            className={cn('tc-avatar__status', `tc-avatar__status--${status}`)}
            aria-label={status}
          />
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';

/** AvatarGroup component for displaying multiple avatars. */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max, size = 'md', className, ...props }, ref) => {
    const childArray = Children.toArray(children);
    const displayCount = max ? Math.min(max, childArray.length) : childArray.length;
    const overflow = childArray.length - displayCount;

    const displayChildren = childArray.slice(0, displayCount);

    return (
      <div ref={ref} className={cn('tc-avatar-group', className)} {...props}>
        {overflow > 0 && (
          <span
            className={cn(
              'tc-avatar',
              `tc-avatar--${size}`,
              'tc-avatar--circle',
              'tc-avatar-group__overflow'
            )}
          >
            +{overflow}
          </span>
        )}
        {displayChildren.reverse().map((child, index) =>
          isValidElement(child)
            ? cloneElement(child as React.ReactElement<AvatarProps>, {
                key: index,
                size,
              })
            : child
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
