import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section, Container, Stack } from './Layout';
import { Card, CardBody } from '../Card';
import { Text, Heading } from '../Typography';

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Section component for vertical page sections with configurable padding.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    padding: 'lg',
    children: (
      <Container size="md">
        <Stack gap="sm">
          <Heading as="h2">Section Title</Heading>
          <Text color="secondary">Section content with default padding.</Text>
        </Stack>
      </Container>
    ),
  },
};

export const PaddingSizes = () => (
  <Stack gap="none">
    <Section padding="none">
      <Container size="md">
        <Card variant="outlined"><CardBody><Text>padding="none"</Text></CardBody></Card>
      </Container>
    </Section>
    <Section padding="sm">
      <Container size="md">
        <Card variant="filled"><CardBody><Text>padding="sm"</Text></CardBody></Card>
      </Container>
    </Section>
    <Section padding="md">
      <Container size="md">
        <Card variant="outlined"><CardBody><Text>padding="md"</Text></CardBody></Card>
      </Container>
    </Section>
    <Section padding="lg">
      <Container size="md">
        <Card variant="filled"><CardBody><Text>padding="lg"</Text></CardBody></Card>
      </Container>
    </Section>
    <Section padding="xl">
      <Container size="md">
        <Card variant="outlined"><CardBody><Text>padding="xl"</Text></CardBody></Card>
      </Container>
    </Section>
  </Stack>
);
