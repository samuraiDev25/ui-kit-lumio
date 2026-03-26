import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Modal } from '@/components';
import { Typography } from '@/components';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Profile updated',
    onClose: fn(),
    children: (
      <Typography color="secondary">
        Your profile information has been saved successfully. Changes will appear across the app immediately.
      </Typography>
    ),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
    title: 'Small modal',
  },
};
