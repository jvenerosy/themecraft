import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Alert component for displaying feedback messages. Supports success, warning, error, and info states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['subtle', 'solid', 'outline'],
    },
    color: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    dismissible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'This is an informational alert message.',
    color: 'info',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Information',
    children: 'This is an alert with a title and description.',
    color: 'info',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Alert color="success" title="Success">Your changes have been saved successfully.</Alert>
      <Alert color="warning" title="Warning">This action cannot be undone.</Alert>
      <Alert color="error" title="Error">Something went wrong. Please try again.</Alert>
      <Alert color="info" title="Info">A new version is available.</Alert>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Alert variant="subtle" color="success">Subtle variant</Alert>
      <Alert variant="solid" color="success">Solid variant</Alert>
      <Alert variant="outline" color="success">Outline variant</Alert>
    </div>
  ),
};

export const Dismissible: Story = {
  args: {
    title: 'Dismissible Alert',
    children: 'Click the X button to dismiss this alert.',
    color: 'info',
    dismissible: true,
    onDismiss: () => alert('Dismissed!'),
  },
};

export const AllVariantsAndColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Subtle</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Alert variant="subtle" color="success">Success message</Alert>
          <Alert variant="subtle" color="warning">Warning message</Alert>
          <Alert variant="subtle" color="error">Error message</Alert>
          <Alert variant="subtle" color="info">Info message</Alert>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Solid</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Alert variant="solid" color="success">Success message</Alert>
          <Alert variant="solid" color="warning">Warning message</Alert>
          <Alert variant="solid" color="error">Error message</Alert>
          <Alert variant="solid" color="info">Info message</Alert>
        </div>
      </div>
    </div>
  ),
};
