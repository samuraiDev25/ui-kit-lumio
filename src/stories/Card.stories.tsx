import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/card/Card';
import { Typography } from '../components/typography/Typography';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => (
    <Card {...args} style={{ maxWidth: 320, padding: 24, ...args.style }}>
      <Typography as="h3" variant="h3">
        Card title
      </Typography>
      <Typography color="secondary" variant="regular_text_14">
        Compact surface for grouped content and actions.
      </Typography>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomWidth: Story = {
  args: {
    style: { maxWidth: 440, padding: 32 },
  },
};
