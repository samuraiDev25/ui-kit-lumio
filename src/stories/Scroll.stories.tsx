import type { Meta, StoryObj } from '@storybook/react-vite';
import { Scroll } from '@/components';
import { Card } from '@/components';
import { Typography } from '@/components';

const items = Array.from({ length: 12 }, (_, index) => `Scrollable item ${index + 1}`);

const meta = {
  title: 'Components/Scroll',
  component: Scroll,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Scrollable content',
    maxHeight: 280,
    maxWidth: 420,
  },
  render: (args) => (
    <Scroll {...args}>
      <div style={{ display: 'grid', gap: 12, minWidth: 360 }}>
        {items.map((item) => (
          <Card key={item} style={{ padding: 16 }}>
            <Typography>{item}</Typography>
          </Card>
        ))}
      </div>
    </Scroll>
  ),
} satisfies Meta<typeof Scroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const HorizontalContent: Story = {
  args: {
    maxWidth: 320,
  },
  render: (args) => (
    <Scroll {...args}>
      <div style={{ display: 'flex', gap: 16, width: 720 }}>
        {['Analytics', 'Messages', 'Billing', 'Settings'].map((item) => (
          <Card key={item} style={{ minWidth: 160, padding: 16 }}>
            <Typography>{item}</Typography>
          </Card>
        ))}
      </div>
    </Scroll>
  ),
};
