import { useState, useCallback } from 'react';
import { cn } from '../../utils/classNames';
import type { AccordionProps } from './Accordion.types';
import './Accordion.css';

const ChevronIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/** Accordion component for expandable content sections. */
export function Accordion({
  items,
  defaultValue,
  value,
  onChange,
  multiple = false,
  variant = 'default',
  className,
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const expandedItems = value
    ? Array.isArray(value)
      ? value
      : [value]
    : internalValue;

  const handleToggle = useCallback(
    (id: string) => {
      let newValue: string[];

      if (expandedItems.includes(id)) {
        newValue = expandedItems.filter((item) => item !== id);
      } else if (multiple) {
        newValue = [...expandedItems, id];
      } else {
        newValue = [id];
      }

      setInternalValue(newValue);
      onChange?.(multiple ? newValue : newValue[0] || '');
    },
    [expandedItems, multiple, onChange]
  );

  return (
    <div className={cn('tc-accordion', `tc-accordion--${variant}`, className)}>
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id);

        return (
          <div
            key={item.id}
            className={cn(
              'tc-accordion__item',
              isExpanded && 'tc-accordion__item--expanded'
            )}
          >
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-trigger-${item.id}`}
              disabled={item.disabled}
              className="tc-accordion__trigger"
              onClick={() => handleToggle(item.id)}
            >
              <span>{item.title}</span>
              <span className="tc-accordion__icon">
                <ChevronIcon />
              </span>
            </button>
            <div
              className="tc-accordion__content"
              role="region"
              id={`accordion-panel-${item.id}`}
              aria-labelledby={`accordion-trigger-${item.id}`}
            >
              <div className="tc-accordion__content-inner">
                <div className="tc-accordion__panel">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Accordion.displayName = 'Accordion';
