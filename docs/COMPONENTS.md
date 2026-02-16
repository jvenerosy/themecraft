# ThemeCraft Components Reference

AI-optimized component documentation with predictable patterns and examples.

## Common Patterns

### Props Convention

```typescript
// All components accept these base props
interface BaseProps {
  className?: string;      // Additional CSS classes
  style?: CSSProperties;   // Inline styles
  'data-testid'?: string;  // Testing identifier
}

// Size scale (most components)
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// Color variants (most components)
type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
```

---

## Button

Interactive button with multiple variants.

```tsx
import { Button } from 'themecraft';

// Basic usage
<Button>Click me</Button>

// With variant and color
<Button variant="solid" color="primary">Primary</Button>
<Button variant="outline" color="error">Delete</Button>
<Button variant="ghost" color="secondary">Cancel</Button>

// With size
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With loading state
<Button loading>Saving...</Button>

// With icons
<Button leftIcon={<Icon />}>With Icon</Button>
<Button rightIcon={<ArrowIcon />}>Next</Button>

// Full width
<Button fullWidth>Full Width</Button>
```

**Props:**
- `variant`: `'solid' | 'outline' | 'ghost' | 'link'` (default: `'solid'`)
- `size`: `Size` (default: `'md'`)
- `color`: `ColorVariant` (default: `'primary'`)
- `disabled`: `boolean`
- `loading`: `boolean`
- `leftIcon`, `rightIcon`: `ReactNode`
- `fullWidth`: `boolean`

---

## Input

Text input field with label and validation.

```tsx
import { Input } from 'themecraft';

// Basic
<Input placeholder="Enter text" />

// With label
<Input label="Email" type="email" />

// With helper text
<Input label="Password" helperText="Min 8 characters" />

// With error
<Input label="Email" error="Invalid email address" />

// Required
<Input label="Name" required />

// With icon
<Input leftIcon={<SearchIcon />} placeholder="Search..." />
```

**Props:**
- `size`: `Size` (default: `'md'`)
- `label`: `string`
- `helperText`: `string`
- `error`: `string | boolean`
- `leftIcon`, `rightIcon`: `ReactNode`
- `fullWidth`: `boolean`
- `disabled`, `required`, `readOnly`: `boolean`

---

## Select

Dropdown select with options.

```tsx
import { Select } from 'themecraft';

// With options array
<Select
  label="Country"
  placeholder="Select country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
  ]}
/>

// With children
<Select label="Size">
  <option value="sm">Small</option>
  <option value="md">Medium</option>
</Select>
```

**Props:** Same as Input, plus:
- `options`: `Array<{ value: string; label: string; disabled?: boolean }>`
- `placeholder`: `string`

---

## Checkbox

Boolean input with label.

```tsx
import { Checkbox } from 'themecraft';

<Checkbox label="Accept terms" />
<Checkbox label="Option" description="More details" />
<Checkbox indeterminate />
```

**Props:**
- `size`: `'xs' | 'sm' | 'md' | 'lg'`
- `label`: `string`
- `description`: `string`
- `indeterminate`: `boolean`
- `error`: `boolean`

---

## Radio

Single selection from group.

```tsx
import { Radio, RadioGroup } from 'themecraft';

<RadioGroup name="plan" defaultValue="pro">
  <Radio value="free" label="Free" />
  <Radio value="pro" label="Pro" />
  <Radio value="enterprise" label="Enterprise" />
</RadioGroup>

// Horizontal layout
<RadioGroup name="size" direction="horizontal">
  <Radio value="sm" label="S" />
  <Radio value="md" label="M" />
  <Radio value="lg" label="L" />
</RadioGroup>
```

---

## Switch

Toggle between two states.

```tsx
import { Switch } from 'themecraft';

<Switch label="Dark mode" />
<Switch label="Notifications" labelPosition="left" />
```

**Props:**
- `size`: `'xs' | 'sm' | 'md' | 'lg'`
- `label`: `string`
- `description`: `string`
- `labelPosition`: `'left' | 'right'`

---

## Card

Container for grouped content.

```tsx
import { Card, CardHeader, CardBody, CardFooter } from 'themecraft';

<Card>
  <CardHeader>
    <Heading as="h3">Title</Heading>
  </CardHeader>
  <CardBody>
    <Text>Content</Text>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Variants
<Card variant="elevated" />
<Card variant="outlined" />
<Card variant="filled" />

// Interactive
<Card interactive onClick={handleClick} />
```

**Props:**
- `variant`: `'elevated' | 'outlined' | 'filled'`
- `padding`: `'none' | 'sm' | 'md' | 'lg'`
- `interactive`: `boolean`

---

## Typography

Heading, Text, and Label components.

```tsx
import { Heading, Text, Label } from 'themecraft';

<Heading as="h1">Page Title</Heading>
<Heading as="h2" size="xl">Section</Heading>

<Text>Paragraph text</Text>
<Text size="sm" color="secondary">Muted text</Text>
<Text truncate>Long text that truncates...</Text>

<Label htmlFor="email" required>Email</Label>
```

---

## Badge

Status indicator or label.

```tsx
import { Badge } from 'themecraft';

<Badge color="success">Active</Badge>
<Badge variant="outline" color="warning">Pending</Badge>
<Badge variant="solid" color="error">Error</Badge>
```

**Props:**
- `variant`: `'solid' | 'outline' | 'subtle'`
- `size`: `'xs' | 'sm' | 'md' | 'lg'`
- `color`: `ColorVariant`

---

## Alert

Feedback messages.

```tsx
import { Alert } from 'themecraft';

<Alert color="success" title="Success">Saved successfully.</Alert>
<Alert color="error">An error occurred.</Alert>
<Alert dismissible onDismiss={() => {}}>Dismissible</Alert>
```

**Props:**
- `variant`: `'subtle' | 'solid' | 'outline'`
- `color`: `'success' | 'warning' | 'error' | 'info'`
- `title`: `string`
- `dismissible`: `boolean`
- `onDismiss`: `() => void`

---

## Modal

Dialog overlay.

```tsx
import { Modal, ModalBody, ModalFooter } from 'themecraft';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm"
  description="Are you sure?"
>
  <ModalBody>
    <Text>This action cannot be undone.</Text>
  </ModalBody>
  <ModalFooter>
    <Button variant="ghost" onClick={onClose}>Cancel</Button>
    <Button color="error">Delete</Button>
  </ModalFooter>
</Modal>
```

**Props:**
- `isOpen`: `boolean` (required)
- `onClose`: `() => void` (required)
- `size`: `'sm' | 'md' | 'lg' | 'xl'`
- `title`, `description`: `string`
- `closeOnBackdropClick`, `closeOnEscape`: `boolean`

---

## Tooltip

Hover information.

```tsx
import { Tooltip } from 'themecraft';

<Tooltip content="Helpful tip">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip content="More info" placement="right">
  <span>Info</span>
</Tooltip>
```

**Props:**
- `content`: `ReactNode` (required)
- `placement`: `'top' | 'right' | 'bottom' | 'left'`
- `delay`: `number` (ms)
- `disabled`: `boolean`

---

## Dropdown

Context menu.

```tsx
import { Dropdown } from 'themecraft';

<Dropdown
  trigger={<Button>Actions</Button>}
  items={[
    { id: 'edit', label: 'Edit', icon: <EditIcon /> },
    { id: 'divider', label: '', divider: true },
    { id: 'delete', label: 'Delete', danger: true },
  ]}
  onSelect={(id) => handleAction(id)}
/>
```

---

## Tabs

Tabbed navigation.

```tsx
import { Tabs } from 'themecraft';

<Tabs
  items={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
  ]}
  variant="line"
/>
```

**Props:**
- `variant`: `'line' | 'enclosed' | 'pills'`
- `fullWidth`: `boolean`
- `defaultValue`, `value`: `string`
- `onChange`: `(id: string) => void`

---

## Accordion

Expandable sections.

```tsx
import { Accordion } from 'themecraft';

<Accordion
  items={[
    { id: 'faq1', title: 'Question 1?', content: 'Answer 1' },
    { id: 'faq2', title: 'Question 2?', content: 'Answer 2' },
  ]}
  variant="bordered"
/>
```

**Props:**
- `variant`: `'default' | 'bordered' | 'separated'`
- `multiple`: `boolean`
- `defaultValue`: `string | string[]`

---

## Avatar

User representation.

```tsx
import { Avatar, AvatarGroup } from 'themecraft';

<Avatar src="/user.jpg" alt="User" />
<Avatar fallback="JD" status="online" />

<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
  <Avatar src="/user4.jpg" />
</AvatarGroup>
```

**Props:**
- `size`: `Size`
- `shape`: `'circle' | 'square'`
- `src`, `alt`: `string`
- `fallback`: `string` (initials)
- `status`: `'online' | 'offline' | 'away' | 'busy'`
