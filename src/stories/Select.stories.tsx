import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/select/Select';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: () => {
    const [value, setValue] = useState('english');
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Select open={isOpen} value={value} onOpenChange={setIsOpen} onValueChange={setValue}>
        <SelectTrigger isOpen={isOpen} style={{ width: 240 }}>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="english">English</SelectItem>
          <SelectItem value="german">German</SelectItem>
          <SelectItem value="spanish">Spanish</SelectItem>
        </SelectContent>
      </Select>
    );
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallTrigger: Story = {
  render: () => {
    const [value, setValue] = useState('weekly');
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Select open={isOpen} value={value} onOpenChange={setIsOpen} onValueChange={setValue}>
        <SelectTrigger isOpen={isOpen} size="sm" style={{ width: 180 }}>
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="daily">Daily</SelectItem>
          <SelectItem value="weekly">Weekly</SelectItem>
          <SelectItem value="monthly">Monthly</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
