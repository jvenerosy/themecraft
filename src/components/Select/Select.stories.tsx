import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Select component for choosing from a list of options. Native select with custom styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select a country',
    options: countryOptions,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: countryOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Country',
    helperText: 'Select your country of residence',
    options: countryOptions,
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    error: 'Please select a country',
    placeholder: 'Select a country',
    options: countryOptions,
  },
};

export const Required: Story = {
  args: {
    label: 'Country',
    required: true,
    placeholder: 'Select a country',
    options: countryOptions,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    disabled: true,
    defaultValue: 'us',
    options: countryOptions,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Select size="xs" placeholder="Extra small" options={countryOptions} />
      <Select size="sm" placeholder="Small" options={countryOptions} />
      <Select size="md" placeholder="Medium" options={countryOptions} />
      <Select size="lg" placeholder="Large" options={countryOptions} />
      <Select size="xl" placeholder="Extra large" options={countryOptions} />
    </div>
  ),
};

export const WithChildren: Story = {
  render: () => (
    <Select label="Size" placeholder="Choose a size">
      <option value="xs">Extra Small</option>
      <option value="sm">Small</option>
      <option value="md">Medium</option>
      <option value="lg">Large</option>
      <option value="xl">Extra Large</option>
    </Select>
  ),
};

export const FullWidth: Story = {
  args: {
    label: 'Country',
    fullWidth: true,
    placeholder: 'Select a country',
    options: countryOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
