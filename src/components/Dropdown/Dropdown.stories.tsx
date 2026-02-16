import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';
import { Button } from '../Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Dropdown component for contextual menus and actions. Supports icons, dividers, and danger states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const basicItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'settings', label: 'Settings' },
  { id: 'divider', label: '', divider: true },
  { id: 'logout', label: 'Log out', danger: true },
];

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Options</Button>,
    items: basicItems,
    onSelect: (id) => console.log('Selected:', id),
  },
};

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const itemsWithIcons = [
  { id: 'edit', label: 'Edit', icon: <EditIcon /> },
  { id: 'delete', label: 'Delete', icon: <TrashIcon />, danger: true },
];

export const WithIcons: Story = {
  args: {
    trigger: <Button variant="outline">Actions</Button>,
    items: itemsWithIcons,
    onSelect: (id) => console.log('Selected:', id),
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8rem', padding: '4rem' }}>
      <Dropdown
        trigger={<Button variant="outline" size="sm">Bottom Start</Button>}
        items={basicItems}
        placement="bottom-start"
      />
      <Dropdown
        trigger={<Button variant="outline" size="sm">Bottom End</Button>}
        items={basicItems}
        placement="bottom-end"
      />
    </div>
  ),
};

export const DisabledItems: Story = {
  args: {
    trigger: <Button variant="outline">Menu</Button>,
    items: [
      { id: 'available', label: 'Available Option' },
      { id: 'disabled', label: 'Disabled Option', disabled: true },
      { id: 'another', label: 'Another Option' },
    ],
  },
};
