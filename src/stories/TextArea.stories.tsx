import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from '../components/textArea/TextArea.tsx';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Description',
    placeholder: 'Write a short summary...',
    maxLength: 120,
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
    errorMessage: 'Description is required',
    value: 'Draft value',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This field is disabled',
  },
};
