import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from '../components/label/Label.tsx';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Email address',
    required: false,
  },
  render: (args) => (
    <Label {...args}>
      <input
        id="label-story-input"
        placeholder="name@example.com"
        style={{ border: '1px solid #ccc', borderRadius: 4, marginTop: 8, padding: 8, width: 280 }}
      />
    </Label>
  ),
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
    label: 'Password',
  },
};
