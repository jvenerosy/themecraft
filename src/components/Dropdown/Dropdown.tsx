import { useState, useRef, useEffect, useCallback, cloneElement, isValidElement } from 'react';
import { cn } from '../../utils/classNames';
import type { DropdownProps } from './Dropdown.types';
import './Dropdown.css';

/** Dropdown component for contextual menus. */
export function Dropdown({
  trigger,
  items,
  onSelect,
  placement = 'bottom-start',
  disabled = false,
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  }, [disabled]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleSelect = useCallback(
    (id: string) => {
      onSelect?.(id);
      handleClose();
    },
    [onSelect, handleClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  const triggerProps = {
    onClick: handleToggle,
    'aria-haspopup': 'menu' as const,
    'aria-expanded': isOpen,
  };

  return (
    <div ref={dropdownRef} className={cn('tc-dropdown', className)}>
      <div className="tc-dropdown__trigger">
        {isValidElement(trigger)
          ? cloneElement(trigger as React.ReactElement<Record<string, unknown>>, triggerProps)
          : <button type="button" {...triggerProps}>{trigger}</button>
        }
      </div>
      <div
        ref={menuRef}
        role="menu"
        className={cn(
          'tc-dropdown__menu',
          `tc-dropdown__menu--${placement}`,
          isOpen && 'tc-dropdown__menu--open'
        )}
        onKeyDown={handleKeyDown}
      >
        {items.map((item) =>
          item.divider ? (
            <div key={item.id} className="tc-dropdown__divider" role="separator" />
          ) : (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              className={cn(
                'tc-dropdown__item',
                item.danger && 'tc-dropdown__item--danger'
              )}
              onClick={() => handleSelect(item.id)}
            >
              {item.icon && (
                <span className="tc-dropdown__item-icon">{item.icon}</span>
              )}
              {item.label}
            </button>
          )
        )}
      </div>
    </div>
  );
}

Dropdown.displayName = 'Dropdown';
