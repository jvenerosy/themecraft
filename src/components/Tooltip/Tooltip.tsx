import { useState, useRef, useCallback, cloneElement, isValidElement } from 'react';
import { cn } from '../../utils/classNames';
import type { TooltipProps } from './Tooltip.types';
import './Tooltip.css';

/** Tooltip component for displaying additional information on hover. */
export function Tooltip({
  content,
  children,
  placement = 'top',
  delay = 200,
  disabled = false,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = useCallback(() => {
    if (disabled) return;
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, [delay, disabled]);

  const hideTooltip = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
  }, []);

  const triggerProps = {
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
  };

  return (
    <span className="tc-tooltip-wrapper">
      {isValidElement(children)
        ? cloneElement(children as React.ReactElement<Record<string, unknown>>, triggerProps)
        : <span {...triggerProps}>{children}</span>
      }
      <span
        role="tooltip"
        className={cn(
          'tc-tooltip',
          `tc-tooltip--${placement}`,
          isVisible && 'tc-tooltip--visible',
          className
        )}
        aria-hidden={!isVisible}
      >
        {content}
      </span>
    </span>
  );
}

Tooltip.displayName = 'Tooltip';
