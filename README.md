# ThemeCraft

A React design system optimized for AI agents with pure CSS variables theming. WCAG AA accessible, zero runtime dependencies for styling.

## Features

- **Pure CSS Variables** - No CSS-in-JS runtime, just native CSS custom properties
- **AI-Optimized** - Consistent, predictable API designed for AI code generation
- **WCAG AA Accessible** - Built with accessibility as a core requirement
- **Theme System** - Light/Dark modes + 5 accent presets (ocean, forest, sunset, berry, slate)
- **TypeScript First** - Full type safety with comprehensive type exports
- **Tree-Shakeable** - Import only what you need

## Installation

```bash
npm install themecraft
```

## Quick Start

```tsx
import { ThemeProvider, Button, Card, CardBody } from 'themecraft';
import 'themecraft/styles';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <CardBody>
          <Button color="primary">Click me</Button>
        </CardBody>
      </Card>
    </ThemeProvider>
  );
}
```

## Theming

ThemeCraft uses CSS custom properties for theming. Apply themes using data attributes:

```html
<!-- Light theme (default) -->
<html data-theme="light" data-accent="ocean">

<!-- Dark theme with forest accent -->
<html data-theme="dark" data-accent="forest">
```

### Available Themes

- **Modes**: `light`, `dark`
- **Accents**: `ocean`, `forest`, `sunset`, `berry`, `slate`

### Using ThemeProvider

```tsx
import { ThemeProvider, useTheme } from 'themecraft';

function App() {
  return (
    <ThemeProvider defaultTheme="system" defaultAccent="ocean">
      <MyApp />
    </ThemeProvider>
  );
}

function ThemeSwitcher() {
  const { theme, setTheme, toggleTheme, accent, setAccent } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
      <select value={accent} onChange={(e) => setAccent(e.target.value)}>
        <option value="ocean">Ocean</option>
        <option value="forest">Forest</option>
        <option value="sunset">Sunset</option>
        <option value="berry">Berry</option>
        <option value="slate">Slate</option>
      </select>
    </div>
  );
}
```

## Components

### Layout & Content
- `Card`, `CardHeader`, `CardBody`, `CardFooter`
- `Heading`, `Text`, `Label` (Typography)

### Forms
- `Button`
- `Input`
- `Select`
- `Checkbox`
- `Radio`, `RadioGroup`
- `Switch`

### Feedback
- `Alert`
- `Badge`
- `Tooltip`
- `Modal`, `ModalHeader`, `ModalBody`, `ModalFooter`

### Navigation
- `Tabs`
- `Accordion`
- `Dropdown`
- `Avatar`, `AvatarGroup`

## Component API Conventions

All components follow consistent patterns:

| Prop | Type | Description |
|------|------|-------------|
| `variant` | string | Visual style (`solid`, `outline`, `ghost`, etc.) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | Component size |
| `color` | `'primary' \| 'secondary' \| 'success' \| 'warning' \| 'error' \| 'info'` | Color scheme |
| `disabled` | boolean | Disabled state |
| `loading` | boolean | Loading state |
| `className` | string | Additional CSS classes |

## Customization

### Override CSS Variables

```css
:root {
  /* Override primary color */
  --tc-primary-500: #your-color;
  --tc-primary-600: #your-hover-color;

  /* Override semantic tokens */
  --tc-interactive-primary: var(--tc-primary-500);
}
```

### Create Custom Theme Preset

```css
[data-accent='custom'] {
  --tc-primary-50: #...;
  --tc-primary-100: #...;
  /* ... */
  --tc-primary-950: #...;

  --tc-interactive-primary: var(--tc-primary-500);
  --tc-interactive-primary-hover: var(--tc-primary-600);
  --tc-interactive-primary-active: var(--tc-primary-700);
  --tc-focus-ring-color: var(--tc-primary-500);
}
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build
```

## Browser Support

ThemeCraft supports all modern browsers that support CSS custom properties:

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

## License

MIT
