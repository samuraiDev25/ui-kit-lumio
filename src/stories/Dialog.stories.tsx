import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Dialog } from '../components/dialog/Dialog';
import { Typography } from '../components/typography/Typography';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    open: true,
    title: 'Delete card',
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
    onConfirmButtonClick: fn(),
    onClose: fn(),
    children: (
      <Typography color="secondary">
        This action removes the selected card from the list. You can’t undo it afterwards.
      </Typography>
    ),
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ConfirmOnly: Story = {
  args: {
    cancelButtonText: undefined,
    confirmButtonText: 'Got it',
    title: 'Information',
  },
};
