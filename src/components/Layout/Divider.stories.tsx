import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider, Stack, Row } from './Layout';
import { Card, CardBody } from '../Card';
import { Text } from '../Typography';
import { Badge } from '../Badge';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'Divider component for visual separation between content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    spacing: 'md',
  },
};

export const HorizontalDivider = () => (
  <Stack gap="none">
    <Text>Section 1</Text>
    <Divider spacing="md" />
    <Text>Section 2</Text>
  </Stack>
);

export const SpacingVariants = () => (
  <Card variant="outlined">
    <CardBody>
      <Stack gap="none">
        <Badge variant="outline" size="sm">spacing="none"</Badge>
        <Divider spacing="none" />
        <Badge variant="outline" size="sm">spacing="sm"</Badge>
        <Divider spacing="sm" />
        <Badge variant="outline" size="sm">spacing="md"</Badge>
        <Divider spacing="md" />
        <Badge variant="outline" size="sm">spacing="lg"</Badge>
        <Divider spacing="lg" />
        <Badge variant="outline" size="sm">end</Badge>
      </Stack>
    </CardBody>
  </Card>
);

export const Vertical = () => (
  <Card variant="outlined">
    <CardBody>
      <Row gap="md" align="center">
        <Text>Item 1</Text>
        <Divider orientation="vertical" spacing="none" />
        <Text>Item 2</Text>
        <Divider orientation="vertical" spacing="none" />
        <Text>Item 3</Text>
      </Row>
    </CardBody>
  </Card>
);

export const InList = () => (
  <Card variant="outlined">
    <CardBody>
      <Stack gap="none">
        <Text>Apple</Text>
        <Divider spacing="sm" />
        <Text>Banana</Text>
        <Divider spacing="sm" />
        <Text>Cherry</Text>
        <Divider spacing="sm" />
        <Text>Date</Text>
      </Stack>
    </CardBody>
  </Card>
);
