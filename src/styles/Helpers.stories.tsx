import type { Meta } from '@storybook/react-vite';
import { Card, CardBody } from '../components/Card';
import { Text, Heading } from '../components/Typography';
import { Stack, Row, Grid } from '../components/Layout';
import { Badge } from '../components/Badge';

const meta: Meta = {
  title: 'Utilities/Helpers',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Utility classes for common styling needs. All classes are prefixed with `tc-` to avoid conflicts.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Sizing = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Sizing Helpers</Heading>
    <Grid cols={2} gap="md">
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Text weight="medium">.tc-full-height</Text>
            <Text size="sm" color="secondary">height: 100%</Text>
          </Stack>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Text weight="medium">.tc-full-width</Text>
            <Text size="sm" color="secondary">width: 100%</Text>
          </Stack>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Text weight="medium">.tc-full</Text>
            <Text size="sm" color="secondary">width: 100%; height: 100%</Text>
          </Stack>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Text weight="medium">.tc-min-h-screen</Text>
            <Text size="sm" color="secondary">min-height: 100vh</Text>
          </Stack>
        </CardBody>
      </Card>
    </Grid>
  </Stack>
);

export const TextAlignment = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Text Alignment</Heading>
    <Grid cols={3} gap="md">
      <Card variant="outlined">
        <CardBody className="tc-text-left">
          <Text weight="medium">.tc-text-left</Text>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody className="tc-text-center">
          <Text weight="medium">.tc-text-center</Text>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody className="tc-text-right">
          <Text weight="medium">.tc-text-right</Text>
        </CardBody>
      </Card>
    </Grid>
  </Stack>
);

export const FlexUtilities = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Flex Utilities</Heading>
    <Card variant="outlined">
      <CardBody>
        <Row gap="sm">
          <Card variant="filled" className="tc-flex-1">
            <CardBody><Text size="sm">.tc-flex-1</Text></CardBody>
          </Card>
          <Card variant="filled" className="tc-flex-1">
            <CardBody><Text size="sm">.tc-flex-1</Text></CardBody>
          </Card>
          <Card variant="elevated" className="tc-flex-none">
            <CardBody><Text size="sm">.tc-flex-none</Text></CardBody>
          </Card>
        </Row>
      </CardBody>
    </Card>
  </Stack>
);

export const Truncate = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Text Truncation</Heading>
    <Grid cols={2} gap="md">
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Badge variant="outline">.tc-truncate</Badge>
            <Text size="sm" className="tc-truncate">
              This is a very long text that will be truncated with an ellipsis at the end when it overflows.
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Badge variant="outline">.tc-line-clamp-2</Badge>
            <Text size="sm" className="tc-line-clamp-2">
              This is a long text that will be clamped to two lines maximum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Grid>
  </Stack>
);

export const Visibility = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Visibility & Display</Heading>
    <Grid cols={2} gap="md">
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Badge variant="outline">.tc-hidden</Badge>
            <Row gap="sm">
              <Badge color="primary">A</Badge>
              <Badge color="primary" className="tc-hidden">B (hidden)</Badge>
              <Badge color="primary">C</Badge>
            </Row>
            <Text size="xs" color="secondary">B is hidden - no space taken</Text>
          </Stack>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Badge variant="outline">.tc-invisible</Badge>
            <Row gap="sm">
              <Badge color="primary">A</Badge>
              <Badge color="primary" className="tc-invisible">B (invisible)</Badge>
              <Badge color="primary">C</Badge>
            </Row>
            <Text size="xs" color="secondary">B is invisible - space preserved</Text>
          </Stack>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Badge variant="outline">.tc-sr-only</Badge>
            <Row gap="sm">
              <Badge color="primary">Visible</Badge>
              <Badge color="primary" className="tc-sr-only">Screen reader only</Badge>
            </Row>
            <Text size="xs" color="secondary">Second badge only for screen readers</Text>
          </Stack>
        </CardBody>
      </Card>
      <Card variant="outlined">
        <CardBody>
          <Stack gap="xs">
            <Badge variant="outline">.tc-hidden-mobile</Badge>
            <Row gap="sm">
              <Badge color="primary">Always</Badge>
              <Badge color="success" className="tc-hidden-mobile">Desktop only</Badge>
            </Row>
            <Text size="xs" color="secondary">Green badge hidden below 640px</Text>
          </Stack>
        </CardBody>
      </Card>
    </Grid>
  </Stack>
);

export const BorderRadius = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Border Radius</Heading>
    <Grid cols={3} gap="md">
      <Card className="tc-bg-primary tc-rounded-none">
        <CardBody>
          <Text weight="medium">.tc-rounded-none</Text>
          <Text size="xs">0px</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-primary tc-rounded-sm">
        <CardBody>
          <Text weight="medium">.tc-rounded-sm</Text>
          <Text size="xs">4px</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-primary tc-rounded">
        <CardBody>
          <Text weight="medium">.tc-rounded</Text>
          <Text size="xs">8px</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-primary tc-rounded-lg">
        <CardBody>
          <Text weight="medium">.tc-rounded-lg</Text>
          <Text size="xs">12px</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-primary tc-rounded-xl">
        <CardBody>
          <Text weight="medium">.tc-rounded-xl</Text>
          <Text size="xs">16px</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-primary tc-rounded-full">
        <CardBody>
          <Text weight="medium">.tc-rounded-full</Text>
          <Text size="xs">9999px</Text>
        </CardBody>
      </Card>
    </Grid>
  </Stack>
);

export const Shadows = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Shadows</Heading>
    <Row gap="lg">
      <Stack gap="xs" align="center">
        <Card variant="outlined" className="tc-shadow-none">
          <CardBody><Text size="sm">none</Text></CardBody>
        </Card>
        <Text size="xs" color="secondary">.tc-shadow-none</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Card variant="outlined" className="tc-shadow-sm">
          <CardBody><Text size="sm">sm</Text></CardBody>
        </Card>
        <Text size="xs" color="secondary">.tc-shadow-sm</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Card variant="outlined" className="tc-shadow">
          <CardBody><Text size="sm">default</Text></CardBody>
        </Card>
        <Text size="xs" color="secondary">.tc-shadow</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Card variant="outlined" className="tc-shadow-lg">
          <CardBody><Text size="sm">lg</Text></CardBody>
        </Card>
        <Text size="xs" color="secondary">.tc-shadow-lg</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Card variant="outlined" className="tc-shadow-xl">
          <CardBody><Text size="sm">xl</Text></CardBody>
        </Card>
        <Text size="xs" color="secondary">.tc-shadow-xl</Text>
      </Stack>
    </Row>
  </Stack>
);

export const Opacity = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Opacity</Heading>
    <Row gap="md">
      <Stack gap="xs" align="center">
        <Badge color="primary" className="tc-opacity-0">0</Badge>
        <Text size="xs" color="secondary">.tc-opacity-0</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Badge color="primary" className="tc-opacity-25">25</Badge>
        <Text size="xs" color="secondary">.tc-opacity-25</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Badge color="primary" className="tc-opacity-50">50</Badge>
        <Text size="xs" color="secondary">.tc-opacity-50</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Badge color="primary" className="tc-opacity-75">75</Badge>
        <Text size="xs" color="secondary">.tc-opacity-75</Text>
      </Stack>
      <Stack gap="xs" align="center">
        <Badge color="primary" className="tc-opacity-100">100</Badge>
        <Text size="xs" color="secondary">.tc-opacity-100</Text>
      </Stack>
    </Row>
  </Stack>
);

export const BackgroundColors = () => (
  <Stack gap="md">
    <Heading as="h3" size="lg">Background Colors</Heading>
    <Grid cols={3} gap="md">
      <Card className="tc-bg-primary">
        <CardBody>
          <Text weight="medium">.tc-bg-primary</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-secondary">
        <CardBody>
          <Text weight="medium">.tc-bg-secondary</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-success">
        <CardBody>
          <Text weight="medium">.tc-bg-success</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-warning">
        <CardBody>
          <Text weight="medium">.tc-bg-warning</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-error">
        <CardBody>
          <Text weight="medium">.tc-bg-error</Text>
        </CardBody>
      </Card>
      <Card className="tc-bg-info">
        <CardBody>
          <Text weight="medium">.tc-bg-info</Text>
        </CardBody>
      </Card>
    </Grid>
  </Stack>
);

export const AllHelpers = () => (
  <Stack gap="lg">
    <Heading as="h2" size="xl">All Helper Classes</Heading>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Sizing</Heading>
          <Row gap="sm" wrap>
            <Badge variant="outline">.tc-full-height</Badge>
            <Badge variant="outline">.tc-full-width</Badge>
            <Badge variant="outline">.tc-full</Badge>
            <Badge variant="outline">.tc-min-h-screen</Badge>
            <Badge variant="outline">.tc-min-h-full</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Text</Heading>
          <Row gap="sm" wrap>
            <Badge variant="outline">.tc-text-left</Badge>
            <Badge variant="outline">.tc-text-center</Badge>
            <Badge variant="outline">.tc-text-right</Badge>
            <Badge variant="outline">.tc-truncate</Badge>
            <Badge variant="outline">.tc-line-clamp-2</Badge>
            <Badge variant="outline">.tc-line-clamp-3</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Display</Heading>
          <Row gap="sm" wrap>
            <Badge variant="outline">.tc-hidden</Badge>
            <Badge variant="outline">.tc-block</Badge>
            <Badge variant="outline">.tc-inline</Badge>
            <Badge variant="outline">.tc-inline-block</Badge>
            <Badge variant="outline">.tc-flex</Badge>
            <Badge variant="outline">.tc-inline-flex</Badge>
            <Badge variant="outline">.tc-grid</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Flex</Heading>
          <Row gap="sm" wrap>
            <Badge variant="outline">.tc-flex-1</Badge>
            <Badge variant="outline">.tc-flex-auto</Badge>
            <Badge variant="outline">.tc-flex-none</Badge>
            <Badge variant="outline">.tc-flex-grow</Badge>
            <Badge variant="outline">.tc-flex-shrink-0</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Position</Heading>
          <Row gap="sm" wrap>
            <Badge variant="outline">.tc-relative</Badge>
            <Badge variant="outline">.tc-absolute</Badge>
            <Badge variant="outline">.tc-fixed</Badge>
            <Badge variant="outline">.tc-sticky</Badge>
            <Badge variant="outline">.tc-inset-0</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Z-Index</Heading>
          <Row gap="sm" wrap>
            <Badge variant="outline">.tc-z-0</Badge>
            <Badge variant="outline">.tc-z-10</Badge>
            <Badge variant="outline">.tc-z-20</Badge>
            <Badge variant="outline">.tc-z-30</Badge>
            <Badge variant="outline">.tc-z-40</Badge>
            <Badge variant="outline">.tc-z-50</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Visibility</Heading>
          <Row gap="sm" wrap>
            <Badge color="primary" className="tc-visible">.tc-visible</Badge>
            <Badge color="primary" className="tc-invisible">.tc-invisible</Badge>
            <Badge variant="outline">.tc-sr-only</Badge>
            <Badge color="success" className="tc-hidden-mobile">.tc-hidden-mobile</Badge>
            <Badge color="warning" className="tc-hidden-tablet">.tc-hidden-tablet</Badge>
            <Badge color="error" className="tc-hidden-desktop">.tc-hidden-desktop</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Border Radius</Heading>
          <Row gap="sm" wrap>
            <Badge className="tc-bg-primary tc-rounded-none">.tc-rounded-none</Badge>
            <Badge className="tc-bg-primary tc-rounded-sm">.tc-rounded-sm</Badge>
            <Badge className="tc-bg-primary tc-rounded">.tc-rounded</Badge>
            <Badge className="tc-bg-primary tc-rounded-lg">.tc-rounded-lg</Badge>
            <Badge className="tc-bg-primary tc-rounded-xl">.tc-rounded-xl</Badge>
            <Badge className="tc-bg-primary tc-rounded-full">.tc-rounded-full</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Shadow</Heading>
          <Row gap="md" wrap>
            <Card variant="filled" className="tc-shadow-none"><CardBody><Text size="sm">.tc-shadow-none</Text></CardBody></Card>
            <Card variant="filled" className="tc-shadow-sm"><CardBody><Text size="sm">.tc-shadow-sm</Text></CardBody></Card>
            <Card variant="filled" className="tc-shadow"><CardBody><Text size="sm">.tc-shadow</Text></CardBody></Card>
            <Card variant="filled" className="tc-shadow-lg"><CardBody><Text size="sm">.tc-shadow-lg</Text></CardBody></Card>
            <Card variant="filled" className="tc-shadow-xl"><CardBody><Text size="sm">.tc-shadow-xl</Text></CardBody></Card>
          </Row>
        </Stack>
      </CardBody>
    </Card>

    <Card variant="outlined">
      <CardBody>
        <Stack gap="md">
          <Heading as="h3" size="base">Background Colors</Heading>
          <Row gap="sm" wrap>
            <Badge className="tc-bg-primary">.tc-bg-primary</Badge>
            <Badge className="tc-bg-secondary">.tc-bg-secondary</Badge>
            <Badge className="tc-bg-success">.tc-bg-success</Badge>
            <Badge className="tc-bg-warning">.tc-bg-warning</Badge>
            <Badge className="tc-bg-error">.tc-bg-error</Badge>
            <Badge className="tc-bg-info">.tc-bg-info</Badge>
          </Row>
        </Stack>
      </CardBody>
    </Card>
  </Stack>
);
