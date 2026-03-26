import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from '@/components';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Typography as="h1" variant="h1">
        Heading 1
      </Typography>
      <Typography as="h2" variant="h2">
        Heading 2
      </Typography>
      <Typography as="h3" variant="h3">
        Heading 3
      </Typography>
      <Typography variant="regular_text_16">Regular 16 text for body copy.</Typography>
      <Typography variant="bold_text_14">Bold 14 text for labels and short emphasis.</Typography>
      <Typography color="secondary" variant="small_text">
        Small secondary helper text.
      </Typography>
      <Typography isLink as="a" href="#">
        Link style text
      </Typography>
    </div>
  ),
};
