import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, GridItem, Stack } from './Layout';
import { Card, CardBody } from '../Card';
import { Text, Heading } from '../Typography';
import { Badge } from '../Badge';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component: 'Grid component for CSS grid layouts. Use GridItem for spanning multiple columns or rows.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6, 'auto'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    minColWidth: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    cols: 3,
    gap: 'md',
    children: [
      <Card key="1" variant="outlined"><CardBody><Text>Card 1</Text></CardBody></Card>,
      <Card key="2" variant="outlined"><CardBody><Text>Card 2</Text></CardBody></Card>,
      <Card key="3" variant="outlined"><CardBody><Text>Card 3</Text></CardBody></Card>,
      <Card key="4" variant="outlined"><CardBody><Text>Card 4</Text></CardBody></Card>,
      <Card key="5" variant="outlined"><CardBody><Text>Card 5</Text></CardBody></Card>,
      <Card key="6" variant="outlined"><CardBody><Text>Card 6</Text></CardBody></Card>,
    ],
  },
};

export const TwoColumns = () => (
  <Stack gap="sm">
    <Badge variant="outline">cols=2</Badge>
    <Grid cols={2} gap="md">
      <Card variant="filled"><CardBody><Text>1</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>2</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>3</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>4</Text></CardBody></Card>
    </Grid>
  </Stack>
);

export const ThreeColumns = () => (
  <Stack gap="sm">
    <Badge variant="outline">cols=3</Badge>
    <Grid cols={3} gap="md">
      <Card variant="filled"><CardBody><Text>1</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>2</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>3</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>4</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>5</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>6</Text></CardBody></Card>
    </Grid>
  </Stack>
);

export const FourColumns = () => (
  <Stack gap="sm">
    <Badge variant="outline">cols=4</Badge>
    <Grid cols={4} gap="md">
      <Card variant="filled"><CardBody><Text>1</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>2</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>3</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>4</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>5</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>6</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>7</Text></CardBody></Card>
      <Card variant="filled"><CardBody><Text>8</Text></CardBody></Card>
    </Grid>
  </Stack>
);

export const AutoColumns = () => (
  <Grid cols="auto" gap="md" minColWidth="200px">
    <Card variant="elevated"><CardBody><Text>Auto 1</Text></CardBody></Card>
    <Card variant="elevated"><CardBody><Text>Auto 2</Text></CardBody></Card>
    <Card variant="elevated"><CardBody><Text>Auto 3</Text></CardBody></Card>
    <Card variant="elevated"><CardBody><Text>Auto 4</Text></CardBody></Card>
    <Card variant="elevated"><CardBody><Text>Auto 5</Text></CardBody></Card>
    <Card variant="elevated"><CardBody><Text>Auto 6</Text></CardBody></Card>
  </Grid>
);

export const BentoLayout = () => (
  <Grid cols={3} gap="md">
    <GridItem rowSpan={2}>
      <Card variant="outlined" className="tc-full-height">
        <CardBody>
          <Heading as="h4" size="base">Tall</Heading>
          <Text size="sm" color="secondary">rowSpan=2</Text>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem colSpan={2}>
      <Card variant="outlined">
        <CardBody>
          <Heading as="h4" size="base">Wide</Heading>
          <Text size="sm" color="secondary">colSpan=2</Text>
        </CardBody>
      </Card>
    </GridItem>
    <Card variant="outlined"><CardBody><Text>Normal</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>Normal</Text></CardBody></Card>
    <GridItem colSpan={2} rowSpan={2}>
      <Card variant="elevated" className="tc-full-height">
        <CardBody>
          <Heading as="h4" size="base">Large</Heading>
          <Text size="sm" color="secondary">colSpan=2, rowSpan=2</Text>
        </CardBody>
      </Card>
    </GridItem>
    <Card variant="outlined"><CardBody><Text>Normal</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>Normal</Text></CardBody></Card>
  </Grid>
);
