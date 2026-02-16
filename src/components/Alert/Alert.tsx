import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import type { AlertProps } from './Alert.types';
import './Alert.css';

const defaultIcons: Record<string, React.ReactNode> = {
  success: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  ),
  info: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  ),
};

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

/** Alert component for displaying messages. */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      variant = 'subtle',
      color = 'info',
      title,
      icon,
      dismissible = false,
      onDismiss,
      className,
      ...props
    },
    ref
  ) => {
    const displayIcon = icon ?? defaultIcons[color];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'tc-alert',
          `tc-alert--${variant}`,
          `tc-alert--${color}`,
          className
        )}
        {...props}
      >
        {displayIcon && (
          <span className="tc-alert__icon">{displayIcon}</span>
        )}
        <div className="tc-alert__content">
          {title && <span className="tc-alert__title">{title}</span>}
          <span className="tc-alert__description">{children}</span>
        </div>
        {dismissible && (
          <button
            type="button"
            className="tc-alert__dismiss"
            onClick={onDismiss}
            aria-label="Dismiss"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
