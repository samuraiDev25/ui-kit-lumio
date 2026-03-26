import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import type { DateRange } from 'react-day-picker';
import { DatePicker } from '@/components';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleDate: Story = {
  args: {
    mode: 'multiple',
    labelTitle: 'Choose a date',
    value: new Date('2026-03-26'),
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return <DatePicker {...args} value={value} onChangeAction={(nextValue) => updateArgs({ value: nextValue })} />;
  },
};

export const DateRangeSelection: Story = {
  args: {
    mode: 'range',
    labelTitle: 'Date range',
    rangeValue: {
      from: new Date('2026-03-20'),
      to: new Date('2026-03-26'),
    },
  },
  render: function Render(args) {
    const [{ rangeValue }, updateArgs] = useArgs();

    return (
      <DatePicker
        {...args}
        rangeValue={rangeValue as DateRange | undefined}
        onRangeChangeAction={(nextRange) => updateArgs({ rangeValue: nextRange })}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    mode: 'multiple',
    disabled: true,
    labelTitle: 'Disabled date picker',
    value: new Date('2026-03-26'),
  },
};

export const Error: Story = {
  args: {
    mode: 'multiple',
    labelTitle: 'Choose a date',
    errorMessage: 'Date is required',
  },
};
