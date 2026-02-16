import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './Tabs';
import { Text } from '../Typography';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tabs component for switching between different views or sections. Supports icons and multiple variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'enclosed', 'pills'],
    },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const basicItems = [
  { id: 'account', label: 'Account', content: <Text>Account settings content</Text> },
  { id: 'security', label: 'Security', content: <Text>Security settings content</Text> },
  { id: 'notifications', label: 'Notifications', content: <Text>Notification preferences</Text> },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '500px' }}>
      <div>
        <Text size="sm" color="secondary" style={{ marginBottom: '0.5rem' }}>Line</Text>
        <Tabs variant="line" items={basicItems} />
      </div>
      <div>
        <Text size="sm" color="secondary" style={{ marginBottom: '0.5rem' }}>Enclosed</Text>
        <Tabs variant="enclosed" items={basicItems} />
      </div>
      <div>
        <Text size="sm" color="secondary" style={{ marginBottom: '0.5rem' }}>Pills</Text>
        <Tabs variant="pills" items={basicItems} />
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    items: basicItems,
    fullWidth: true,
    variant: 'enclosed',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const itemsWithIcons = [
  { id: 'account', label: 'Account', icon: <UserIcon />, content: <Text>Account settings</Text> },
  { id: 'security', label: 'Security', icon: <LockIcon />, content: <Text>Security settings</Text> },
  { id: 'notifications', label: 'Notifications', icon: <BellIcon />, content: <Text>Notifications</Text> },
];

export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    variant: 'line',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithDisabled: Story = {
  args: {
    items: [
      { id: 'tab1', label: 'Enabled', content: <Text>This tab is enabled</Text> },
      { id: 'tab2', label: 'Disabled', disabled: true, content: <Text>This tab is disabled</Text> },
      { id: 'tab3', label: 'Also Enabled', content: <Text>This tab is also enabled</Text> },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
