import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Checkbox } from '@/components';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    checked: false,
    label: 'Accept terms and conditions',
    onChangeAction: fn(),
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    return (
      <Checkbox
        {...args}
        checked={checked ?? false}
        onChangeAction={(nextChecked) => updateArgs({ checked: Boolean(nextChecked) })}
      />
    );
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Subscribed to product updates',
  },
};

export const Error: Story = {
  args: {
    errorMessage: 'This field is required',
    label: 'I agree with the privacy policy',
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled option',
  },
};
