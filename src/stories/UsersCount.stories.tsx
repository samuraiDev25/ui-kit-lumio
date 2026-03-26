import type { Meta, StoryObj } from '@storybook/react-vite';
import { UsersCount } from '@/components';

const meta = {
  title: 'Components/UsersCount',
  component: UsersCount,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    count: 4281,
  },
} satisfies Meta<typeof UsersCount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LargeNumber: Story = {
  args: {
    count: 58742,
  },
};
