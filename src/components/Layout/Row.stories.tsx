import type { Meta, StoryObj } from '@storybook/react-vite';
import { Row, Stack, Divider } from './Layout';
import { Card, CardBody } from '../Card';
import { Button } from '../Button';
import { Badge } from '../Badge';
import { Text } from '../Typography';

const meta: Meta<typeof Row> = {
  title: 'Layout/Row',
  component: Row,
  parameters: {
    docs: {
      description: {
        component: 'Row component for horizontal flex layouts with configurable gap, alignment, and wrapping.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around'],
    },
    wrap: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Default: Story = {
  args: {
    gap: 'md',
    children: [
      <Button key="1">Button 1</Button>,
      <Button key="2" variant="outline">Button 2</Button>,
      <Button key="3" variant="ghost">Button 3</Button>,
    ],
  },
};

export const Gaps = () => (
  <Stack gap="lg">
    <Stack gap="xs">
      <Badge variant="outline">xs</Badge>
      <Row gap="xs">
        <Badge color="primary">A</Badge>
        <Badge color="primary">B</Badge>
        <Badge color="primary">C</Badge>
      </Row>
    </Stack>
    <Stack gap="xs">
      <Badge variant="outline">sm</Badge>
      <Row gap="sm">
        <Badge color="primary">A</Badge>
        <Badge color="primary">B</Badge>
        <Badge color="primary">C</Badge>
      </Row>
    </Stack>
    <Stack gap="xs">
      <Badge variant="outline">md</Badge>
      <Row gap="md">
        <Badge color="primary">A</Badge>
        <Badge color="primary">B</Badge>
        <Badge color="primary">C</Badge>
      </Row>
    </Stack>
    <Stack gap="xs">
      <Badge variant="outline">lg</Badge>
      <Row gap="lg">
        <Badge color="primary">A</Badge>
        <Badge color="primary">B</Badge>
        <Badge color="primary">C</Badge>
      </Row>
    </Stack>
    <Stack gap="xs">
      <Badge variant="outline">xl</Badge>
      <Row gap="xl">
        <Badge color="primary">A</Badge>
        <Badge color="primary">B</Badge>
        <Badge color="primary">C</Badge>
      </Row>
    </Stack>
  </Stack>
);

export const SpaceBetween = () => (
  <Card variant="outlined">
    <CardBody>
      <Row justify="between">
        <Text weight="medium">Label</Text>
        <Badge color="success">Active</Badge>
      </Row>
    </CardBody>
  </Card>
);

export const Centered = () => (
  <Row gap="md" justify="center">
    <Button>Action 1</Button>
    <Button variant="outline">Action 2</Button>
  </Row>
);

export const WithDivider = () => (
  <Row gap="md" align="center">
    <Text>Item 1</Text>
    <Divider orientation="vertical" spacing="none" />
    <Text>Item 2</Text>
    <Divider orientation="vertical" spacing="none" />
    <Text>Item 3</Text>
  </Row>
);

export const Wrapping = () => (
  <Card variant="outlined">
    <CardBody>
      <Row gap="sm" wrap>
        <Button size="sm" variant="outline">Button 1</Button>
        <Button size="sm" variant="outline">Button 2</Button>
        <Button size="sm" variant="outline">Button 3</Button>
        <Button size="sm" variant="outline">Button 4</Button>
        <Button size="sm" variant="outline">Button 5</Button>
        <Button size="sm" variant="outline">Button 6</Button>
        <Button size="sm" variant="outline">Button 7</Button>
        <Button size="sm" variant="outline">Button 8</Button>
      </Row>
    </CardBody>
  </Card>
);
