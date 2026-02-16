import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Accordion component for expandable/collapsible content sections. Supports single or multiple open panels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'separated'],
    },
    multiple: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const faqItems = [
  {
    id: 'faq1',
    title: 'What is ThemeCraft?',
    content: 'ThemeCraft is a React design system optimized for AI agents with pure CSS variables theming.',
  },
  {
    id: 'faq2',
    title: 'How do I install it?',
    content: 'You can install ThemeCraft via npm: npm install themecraft',
  },
  {
    id: 'faq3',
    title: 'Is it accessible?',
    content: 'Yes! ThemeCraft is built with WCAG AA accessibility standards in mind.',
  },
];

export const Default: Story = {
  args: {
    items: faqItems,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--tc-fg-secondary)' }}>
          Default
        </p>
        <Accordion variant="default" items={faqItems} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--tc-fg-secondary)' }}>
          Bordered
        </p>
        <Accordion variant="bordered" items={faqItems} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--tc-fg-secondary)' }}>
          Separated
        </p>
        <Accordion variant="separated" items={faqItems} />
      </div>
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    items: faqItems,
    multiple: true,
    variant: 'bordered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DefaultExpanded: Story = {
  args: {
    items: faqItems,
    defaultValue: 'faq1',
    variant: 'bordered',
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
      { id: 'item1', title: 'Enabled Item', content: 'This item can be expanded.' },
      { id: 'item2', title: 'Disabled Item', content: 'This item is disabled.', disabled: true },
      { id: 'item3', title: 'Another Enabled Item', content: 'This item can also be expanded.' },
    ],
    variant: 'bordered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};
