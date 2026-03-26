import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/card/Card.tsx';
import { Container } from '../components/container/Container.tsx';
import { Typography } from '../components/typography/Typography.tsx';

const meta = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    children: 'Container content',
  },
  render: () => (
    <Container>
      <Card style={{ margin: '32px auto', maxWidth: 640, padding: 24 }}>
        <Typography as="h2" variant="h2">
          Container content
        </Typography>
        <Typography color="secondary">Use this wrapper to keep page sections aligned and readable.</Typography>
      </Card>
    </Container>
  ),
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
