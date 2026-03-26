import type { Meta, StoryObj } from '@storybook/react-vite';
import { Eye, Search } from '../components/icons';
import { TextField } from '../components/textField/TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Email',
    placeholder: 'name@example.com',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: {
    label: 'Search users',
    placeholder: 'Type a name...',
    iconStart: <Search />,
    iconEnd: <Eye />,
  },
};

export const Error: Story = {
  args: {
    label: 'Password',
    errorMessage: 'Password must contain at least 8 characters',
    value: '12345',
    iconEnd: <Eye />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    value: 'lumio-admin',
    disabled: true,
  },
};
