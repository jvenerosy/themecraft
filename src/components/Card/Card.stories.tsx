import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
import { Heading, Text } from '../Typography';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Card component for grouping related content. Includes CardHeader, CardBody, and CardFooter sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    interactive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: '320px' }}>
      <CardHeader>
        <Heading as="h3" size="lg">Card Title</Heading>
        <Text size="sm" color="secondary">Card subtitle</Text>
      </CardHeader>
      <CardBody>
        <Text>
          This is the card body content. You can put any content here.
        </Text>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Card variant="elevated" style={{ width: '200px' }}>
        <CardBody>
          <Heading as="h4" size="base">Elevated</Heading>
          <Text size="sm" color="secondary">With shadow</Text>
        </CardBody>
      </Card>
      <Card variant="outlined" style={{ width: '200px' }}>
        <CardBody>
          <Heading as="h4" size="base">Outlined</Heading>
          <Text size="sm" color="secondary">With border</Text>
        </CardBody>
      </Card>
      <Card variant="filled" style={{ width: '200px' }}>
        <CardBody>
          <Heading as="h4" size="base">Filled</Heading>
          <Text size="sm" color="secondary">Background color</Text>
        </CardBody>
      </Card>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <Card padding="sm" variant="outlined">
        <Text>Small padding</Text>
      </Card>
      <Card padding="md" variant="outlined">
        <Text>Medium padding</Text>
      </Card>
      <Card padding="lg" variant="outlined">
        <Text>Large padding</Text>
      </Card>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card interactive style={{ width: '300px' }}>
      <CardBody>
        <Heading as="h4" size="base">Interactive Card</Heading>
        <Text size="sm" color="secondary">
          Hover over this card to see the interaction effect.
        </Text>
      </CardBody>
    </Card>
  ),
};

export const AsButton: Story = {
  render: () => (
    <Card asButton onClick={() => alert('Card clicked!')} style={{ width: '300px' }}>
      <CardBody>
        <Heading as="h4" size="base">Clickable Card</Heading>
        <Text size="sm" color="secondary">
          Click this card to trigger an action.
        </Text>
      </CardBody>
    </Card>
  ),
};
