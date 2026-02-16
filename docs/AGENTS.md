# ThemeCraft - AI Agent Guide

Instructions for AI agents (Claude, Copilot, Gemini, etc.) working with ThemeCraft.

## Overview

ThemeCraft is a React design system with:
- Pure CSS variables for theming (no CSS-in-JS)
- Consistent, predictable component APIs
- WCAG AA accessibility built-in
- TypeScript types for all components

## Import Pattern

```tsx
// Import components and provider
import { ThemeProvider, Button, Card, Input } from 'themecraft';

// Styles are auto-imported with components
// Or import separately:
import 'themecraft/styles';
```

## Component Generation Rules

### 1. Always wrap with ThemeProvider

```tsx
import { ThemeProvider } from 'themecraft';

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### 2. Use Standard Props

All interactive components support:
- `variant` - Visual style
- `size` - `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `color` - `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'`
- `disabled` - Boolean
- `loading` - Boolean (buttons, inputs)
- `className` - Additional CSS classes

### 3. Prefer Semantic Colors

```tsx
// Good - uses semantic color
<Button color="success">Save</Button>
<Alert color="error">Error message</Alert>

// Avoid - don't use raw color values
<Button style={{ backgroundColor: 'green' }}>Save</Button>
```

### 4. Form Components Pattern

```tsx
import { Input, Select, Checkbox, Radio, RadioGroup, Switch } from 'themecraft';

// With labels and error handling
<Input
  label="Email"
  type="email"
  required
  error={errors.email}
  helperText="We'll never share your email"
/>

<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
  ]}
/>

<RadioGroup name="plan" value={plan} onChange={setPlan}>
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
</RadioGroup>

<Checkbox
  label="Accept terms"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>

<Switch
  label="Notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

### 5. Layout with Card

```tsx
import { Card, CardHeader, CardBody, CardFooter } from 'themecraft';
import { Heading, Text } from 'themecraft';
import { Button } from 'themecraft';

<Card variant="elevated">
  <CardHeader>
    <Heading as="h3" size="lg">Card Title</Heading>
    <Text size="sm" color="secondary">Subtitle</Text>
  </CardHeader>
  <CardBody>
    <Text>Main content goes here.</Text>
  </CardBody>
  <CardFooter>
    <Button variant="ghost">Cancel</Button>
    <Button>Save</Button>
  </CardFooter>
</Card>
```

### 6. Feedback Components

```tsx
import { Alert, Badge, Tooltip } from 'themecraft';

// Alert for messages
<Alert color="success" title="Saved!">
  Your changes have been saved.
</Alert>

// Badge for status
<Badge color="success">Active</Badge>
<Badge variant="outline" color="warning">Pending</Badge>

// Tooltip for hints
<Tooltip content="Click to edit">
  <Button variant="ghost">Edit</Button>
</Tooltip>
```

### 7. Modal Pattern

```tsx
import { useState } from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'themecraft';

function DeleteConfirm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button color="error" onClick={() => setIsOpen(true)}>
        Delete
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Delete"
        description="This action cannot be undone."
        size="sm"
      >
        <ModalFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={handleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
```

### 8. Navigation Components

```tsx
import { Tabs, Accordion, Dropdown } from 'themecraft';

// Tabs
<Tabs
  items={[
    { id: 'profile', label: 'Profile', content: <ProfileTab /> },
    { id: 'settings', label: 'Settings', content: <SettingsTab /> },
  ]}
  variant="enclosed"
/>

// Accordion
<Accordion
  items={[
    { id: '1', title: 'FAQ 1', content: 'Answer 1' },
    { id: '2', title: 'FAQ 2', content: 'Answer 2' },
  ]}
  variant="bordered"
/>

// Dropdown menu
<Dropdown
  trigger={<Button variant="ghost">Options</Button>}
  items={[
    { id: 'edit', label: 'Edit' },
    { id: 'delete', label: 'Delete', danger: true },
  ]}
  onSelect={handleAction}
/>
```

## Theming Quick Reference

```tsx
// ThemeProvider with options
<ThemeProvider
  defaultTheme="system"  // 'light' | 'dark' | 'system'
  defaultAccent="ocean"  // 'ocean' | 'forest' | 'sunset' | 'berry' | 'slate'
>

// Using theme hook
const { theme, setTheme, toggleTheme, accent, setAccent } = useTheme();
```

## CSS Variables for Custom Styling

```css
/* Override in your CSS */
.my-component {
  /* Use semantic tokens */
  color: var(--tc-fg-primary);
  background: var(--tc-bg-secondary);
  border: 1px solid var(--tc-border-primary);

  /* Interactive colors */
  --button-bg: var(--tc-interactive-primary);

  /* Spacing */
  padding: var(--tc-spacing-4);
  gap: var(--tc-spacing-2);

  /* Typography */
  font-size: var(--tc-text-sm);
  font-weight: var(--tc-font-medium);
}
```

## Common Mistakes to Avoid

1. **Don't use inline color styles** - Use `color` prop or CSS variables
2. **Don't forget ThemeProvider** - Required for theme context
3. **Don't mix size units** - Use consistent `size` prop values
4. **Don't override component internals** - Use `className` for additional styles
5. **Don't ignore accessibility** - Use proper labels, aria attributes
