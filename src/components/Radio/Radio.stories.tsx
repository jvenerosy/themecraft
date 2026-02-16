import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Radio component for single selection from multiple options. Use RadioGroup to group related options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option',
    name: 'single',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Standard shipping',
    description: '4-10 business days',
    name: 'shipping',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio size="xs" label="Extra small" name="sizes" value="xs" />
      <Radio size="sm" label="Small" name="sizes" value="sm" />
      <Radio size="md" label="Medium" name="sizes" value="md" />
      <Radio size="lg" label="Large" name="sizes" value="lg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <RadioGroup name="plan" defaultValue="pro">
      <Radio value="free" label="Free" description="For personal use" />
      <Radio value="pro" label="Pro" description="For small teams" />
      <Radio value="enterprise" label="Enterprise" description="For large organizations" />
    </RadioGroup>
  ),
};

export const HorizontalGroup: Story = {
  render: () => (
    <RadioGroup name="size" defaultValue="md" direction="horizontal">
      <Radio value="sm" label="Small" />
      <Radio value="md" label="Medium" />
      <Radio value="lg" label="Large" />
    </RadioGroup>
  ),
};

export const DisabledGroup: Story = {
  render: () => (
    <RadioGroup name="disabled-group" defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};
