import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Row } from './Layout';
import { Card, CardBody } from '../Card';
import { Button } from '../Button';
import { Text } from '../Typography';
import { Badge } from '../Badge';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    docs: {
      description: {
        component: 'Stack component for vertical flex layouts with configurable gap and alignment.',
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
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    gap: 'md',
    children: [
      <Card key="1" variant="outlined"><CardBody><Text>Item 1</Text></CardBody></Card>,
      <Card key="2" variant="outlined"><CardBody><Text>Item 2</Text></CardBody></Card>,
      <Card key="3" variant="outlined"><CardBody><Text>Item 3</Text></CardBody></Card>,
    ],
  },
};

export const Gaps = () => (
  <Row gap="xl">
    <Stack gap="xs">
      <Badge>xs</Badge>
      <Badge color="primary">A</Badge>
      <Badge color="primary">B</Badge>
      <Badge color="primary">C</Badge>
    </Stack>
    <Stack gap="sm">
      <Badge>sm</Badge>
      <Badge color="primary">A</Badge>
      <Badge color="primary">B</Badge>
      <Badge color="primary">C</Badge>
    </Stack>
    <Stack gap="md">
      <Badge>md</Badge>
      <Badge color="primary">A</Badge>
      <Badge color="primary">B</Badge>
      <Badge color="primary">C</Badge>
    </Stack>
    <Stack gap="lg">
      <Badge>lg</Badge>
      <Badge color="primary">A</Badge>
      <Badge color="primary">B</Badge>
      <Badge color="primary">C</Badge>
    </Stack>
    <Stack gap="xl">
      <Badge>xl</Badge>
      <Badge color="primary">A</Badge>
      <Badge color="primary">B</Badge>
      <Badge color="primary">C</Badge>
    </Stack>
  </Row>
);

export const Alignment = () => (
  <Row gap="lg">
    <Card variant="filled">
      <CardBody>
        <Stack gap="sm" align="start">
          <Badge variant="outline">start</Badge>
          <Button size="sm">Button</Button>
          <Button size="sm" variant="outline">Button</Button>
        </Stack>
      </CardBody>
    </Card>
    <Card variant="filled">
      <CardBody>
        <Stack gap="sm" align="center">
          <Badge variant="outline">center</Badge>
          <Button size="sm">Button</Button>
          <Button size="sm" variant="outline">Button</Button>
        </Stack>
      </CardBody>
    </Card>
    <Card variant="filled">
      <CardBody>
        <Stack gap="sm" align="end">
          <Badge variant="outline">end</Badge>
          <Button size="sm">Button</Button>
          <Button size="sm" variant="outline">Button</Button>
        </Stack>
      </CardBody>
    </Card>
  </Row>
);

export const Centered = () => (
  <Stack gap="md" align="center">
    <Button>Primary Action</Button>
    <Text size="sm" color="secondary">Centered content</Text>
  </Stack>
);
