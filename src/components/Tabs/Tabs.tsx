import { useState, useCallback } from 'react';
import { cn } from '../../utils/classNames';
import type { TabsProps } from './Tabs.types';
import './Tabs.css';

/** Tabs component for switching between views. */
export function Tabs({
  items,
  defaultValue,
  value,
  onChange,
  variant = 'line',
  fullWidth = false,
  className,
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(
    defaultValue || items[0]?.id
  );
  const activeTab = value ?? internalValue;

  const handleChange = useCallback(
    (id: string) => {
      setInternalValue(id);
      onChange?.(id);
    },
    [onChange]
  );

  const activeItem = items.find((item) => item.id === activeTab);

  return (
    <div className={cn('tc-tabs', `tc-tabs--${variant}`, className)}>
      <div
        role="tablist"
        className={cn(
          'tc-tabs__list',
          fullWidth && 'tc-tabs__list--full-width'
        )}
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`panel-${item.id}`}
            id={`tab-${item.id}`}
            tabIndex={activeTab === item.id ? 0 : -1}
            disabled={item.disabled}
            className={cn(
              'tc-tabs__trigger',
              activeTab === item.id && 'tc-tabs__trigger--active'
            )}
            onClick={() => handleChange(item.id)}
          >
            <span className="tc-tabs__trigger-content">
              {item.icon && (
                <span className="tc-tabs__trigger-icon">{item.icon}</span>
              )}
              {item.label}
            </span>
          </button>
        ))}
      </div>
      {activeItem && (
        <div
          role="tabpanel"
          id={`panel-${activeItem.id}`}
          aria-labelledby={`tab-${activeItem.id}`}
          className="tc-tabs__panel"
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}

Tabs.displayName = 'Tabs';
