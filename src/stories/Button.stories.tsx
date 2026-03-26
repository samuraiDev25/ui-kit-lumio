import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '../components/button/Button.tsx';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Primary action for less prominent operations',
      },
    },
  },
  args: {
    variant: 'primary',
    children: 'Button',
  },
};
export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Secondary action for less prominent operations',
      },
    },
  },
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Button',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    size: 'lg',
    children: ' Button',
  },
  parameters: {
    layout: 'padded',
  },
};
