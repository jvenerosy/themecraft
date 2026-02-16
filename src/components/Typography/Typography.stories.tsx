import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Text, Label } from './Typography';

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Typography components including Heading, Text, and Label for consistent text styling.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Headings: StoryObj<typeof Heading> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <Heading as="h5">Heading 5</Heading>
      <Heading as="h6">Heading 6</Heading>
    </div>
  ),
};

export const HeadingColors: StoryObj<typeof Heading> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Heading as="h3" color="primary">Primary Color</Heading>
      <Heading as="h3" color="secondary">Secondary Color</Heading>
      <Heading as="h3" color="success">Success Color</Heading>
      <Heading as="h3" color="error">Error Color</Heading>
    </div>
  ),
};

export const TextSizes: StoryObj<typeof Text> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text size="xs">Extra small text (xs)</Text>
      <Text size="sm">Small text (sm)</Text>
      <Text size="base">Base text (base)</Text>
      <Text size="lg">Large text (lg)</Text>
      <Text size="xl">Extra large text (xl)</Text>
    </div>
  ),
};

export const TextWeights: StoryObj<typeof Text> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
  ),
};

export const TextColors: StoryObj<typeof Text> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Text color="primary">Primary color text</Text>
      <Text color="secondary">Secondary color text</Text>
      <Text color="tertiary">Tertiary color text</Text>
      <Text color="success">Success color text</Text>
      <Text color="warning">Warning color text</Text>
      <Text color="error">Error color text</Text>
      <Text color="info">Info color text</Text>
    </div>
  ),
};

export const TruncatedText: StoryObj<typeof Text> = {
  render: () => (
    <div style={{ width: '200px' }}>
      <Text truncate>
        This is a very long text that will be truncated with an ellipsis when it overflows.
      </Text>
    </div>
  ),
};

export const LineClamp: StoryObj<typeof Text> = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Text lineClamp={2}>
        This is a long paragraph that will be clamped to 2 lines.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </div>
  ),
};

export const Labels: StoryObj<typeof Label> = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Label>Regular Label</Label>
      <Label required>Required Label</Label>
    </div>
  ),
};
