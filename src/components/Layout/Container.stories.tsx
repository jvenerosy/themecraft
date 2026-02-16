import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, Stack } from './Layout';
import { Card, CardBody } from '../Card';
import { Text } from '../Typography';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Container component for centering and constraining content width.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    centered: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    size: 'lg',
    children: (
      <Card variant="filled">
        <CardBody>
          <Text>Container content (lg - 1024px)</Text>
        </CardBody>
      </Card>
    ),
  },
};

export const Sizes = () => (
  <Stack gap="md">
    <Container size="sm">
      <Card variant="outlined"><CardBody><Text size="sm">SM - 640px</Text></CardBody></Card>
    </Container>
    <Container size="md">
      <Card variant="outlined"><CardBody><Text size="sm">MD - 768px</Text></CardBody></Card>
    </Container>
    <Container size="lg">
      <Card variant="outlined"><CardBody><Text size="sm">LG - 1024px</Text></CardBody></Card>
    </Container>
    <Container size="xl">
      <Card variant="outlined"><CardBody><Text size="sm">XL - 1280px</Text></CardBody></Card>
    </Container>
    <Container size="full">
      <Card variant="outlined"><CardBody><Text size="sm">Full - 100%</Text></CardBody></Card>
    </Container>
  </Stack>
);

export const NotCentered = () => (
  <Container size="md" centered={false}>
    <Card variant="filled">
      <CardBody>
        <Text>Container aligned to the left</Text>
      </CardBody>
    </Card>
  </Container>
);
