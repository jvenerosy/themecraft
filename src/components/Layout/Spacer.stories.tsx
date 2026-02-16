import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spacer, Stack, Row } from './Layout';
import { Card, CardBody } from '../Card';
import { Text } from '../Typography';
import { Badge } from '../Badge';

const meta: Meta<typeof Spacer> = {
  title: 'Layout/Spacer',
  component: Spacer,
  parameters: {
    docs: {
      description: {
        component: 'Spacer component for adding consistent space between elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    axis: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    size: 'lg',
  },
};

export const VerticalSpacing = () => (
  <Stack gap="none">
    <Card variant="filled"><CardBody><Text>Content above</Text></CardBody></Card>
    <Spacer size="lg" />
    <Card variant="filled"><CardBody><Text>Content below (lg spacer)</Text></CardBody></Card>
  </Stack>
);

export const AllSizes = () => (
  <Card variant="outlined">
    <CardBody>
      <Stack gap="none">
        <Badge variant="outline" size="sm">xs</Badge>
        <Spacer size="xs" />
        <Badge variant="outline" size="sm">sm</Badge>
        <Spacer size="sm" />
        <Badge variant="outline" size="sm">md</Badge>
        <Spacer size="md" />
        <Badge variant="outline" size="sm">lg</Badge>
        <Spacer size="lg" />
        <Badge variant="outline" size="sm">xl</Badge>
        <Spacer size="xl" />
        <Badge variant="outline" size="sm">2xl</Badge>
        <Spacer size="2xl" />
        <Badge variant="outline" size="sm">end</Badge>
      </Stack>
    </CardBody>
  </Card>
);

export const Horizontal = () => (
  <Row gap="none" align="center">
    <Card variant="filled"><CardBody><Text>Left</Text></CardBody></Card>
    <Spacer size="xl" axis="horizontal" />
    <Card variant="filled"><CardBody><Text>Right (xl spacer)</Text></CardBody></Card>
  </Row>
);
