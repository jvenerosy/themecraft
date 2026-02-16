import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Tooltip component for displaying additional information on hover. Supports multiple placements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    delay: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '3rem' }}>
      <Tooltip content="Top tooltip" placement="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  args: {
    content: 'Tooltip with 500ms delay',
    delay: 500,
    children: <Button>Hover (500ms delay)</Button>,
  },
};

export const Disabled: Story = {
  args: {
    content: 'This will not show',
    disabled: true,
    children: <Button>Tooltip disabled</Button>,
  },
};

export const WithText: Story = {
  render: () => (
    <p>
      This is a paragraph with a{' '}
      <Tooltip content="More information about this term">
        <span style={{ textDecoration: 'underline', cursor: 'help' }}>
          tooltip on text
        </span>
      </Tooltip>{' '}
      inline.
    </p>
  ),
};
