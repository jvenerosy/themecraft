import { forwardRef } from 'react';
import { cn } from '../../utils/classNames';
import type { HeadingProps, TextProps, LabelProps, HeadingLevel } from './Typography.types';
import './Typography.css';

const headingSizeMap: Record<HeadingLevel, string> = {
  h1: '4xl',
  h2: '3xl',
  h3: '2xl',
  h4: 'xl',
  h5: 'lg',
  h6: 'base',
};

/** Heading component for titles and section headers. */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      as: Tag = 'h2',
      size,
      weight = 'bold',
      color = 'primary',
      truncate = false,
      className,
      ...props
    },
    ref
  ) => {
    const actualSize = size || headingSizeMap[Tag];

    return (
      <Tag
        ref={ref}
        className={cn(
          'tc-heading',
          `tc-heading--${actualSize}`,
          `tc-heading--${weight}`,
          `tc-heading--color-${color}`,
          truncate && 'tc-heading--truncate',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';

/** Text component for paragraphs and inline text. */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      children,
      as: Tag = 'p',
      size = 'base',
      weight = 'normal',
      color = 'primary',
      truncate = false,
      lineClamp,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const clampStyle = lineClamp
      ? { ...style, WebkitLineClamp: lineClamp }
      : style;

    return (
      <Tag
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={cn(
          'tc-text',
          `tc-text--${size}`,
          `tc-text--${weight}`,
          `tc-text--color-${color}`,
          truncate && 'tc-text--truncate',
          !!lineClamp && 'tc-text--clamp',
          className
        )}
        style={clampStyle}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = 'Text';

/** Label component for form fields. */
export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required = false, className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'tc-label',
          required && 'tc-label--required',
          className
        )}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';
