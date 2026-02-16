import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid, GridItem, Stack } from './Layout';
import { Card, CardBody } from '../Card';
import { Text } from '../Typography';

const meta: Meta<typeof GridItem> = {
  title: 'Layout/GridItem',
  component: GridItem,
  parameters: {
    docs: {
      description: {
        component: 'GridItem component for spanning multiple columns or rows within a Grid.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    colSpan: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
    rowSpan: {
      control: 'select',
      options: [1, 2, 3, 4],
    },
  },
};

export default meta;
type Story = StoryObj<typeof GridItem>;

export const ColumnSpan = () => (
  <Grid cols={4} gap="md">
    <GridItem colSpan={2}>
      <Card variant="filled" className="tc-full-height">
        <CardBody><Text>colSpan=2</Text></CardBody>
      </Card>
    </GridItem>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <GridItem colSpan={3}>
      <Card variant="filled">
        <CardBody><Text>colSpan=3</Text></CardBody>
      </Card>
    </GridItem>
  </Grid>
);

export const RowSpan = () => (
  <Grid cols={3} gap="md">
    <GridItem rowSpan={2}>
      <Card variant="filled" className="tc-full-height">
        <CardBody><Text>rowSpan=2</Text></CardBody>
      </Card>
    </GridItem>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
  </Grid>
);

export const Combined = () => (
  <Grid cols={4} gap="md">
    <GridItem colSpan={2} rowSpan={2}>
      <Card variant="elevated" className="tc-full-height">
        <CardBody>
          <Stack gap="xs">
            <Text weight="medium">colSpan=2, rowSpan=2</Text>
            <Text size="sm" color="secondary">Large featured item</Text>
          </Stack>
        </CardBody>
      </Card>
    </GridItem>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <Card variant="outlined"><CardBody><Text>1</Text></CardBody></Card>
    <GridItem colSpan={4}>
      <Card variant="filled">
        <CardBody><Text>colSpan=4 (full width)</Text></CardBody>
      </Card>
    </GridItem>
  </Grid>
);
