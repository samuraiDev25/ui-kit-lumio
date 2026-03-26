import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Pagination } from '../components/pagination/Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    totalPages: 12,
    initialPage: 3,
    initialPageSize: 20,
    onPageChange: fn(),
    onPageSizeChange: fn(),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FewPages: Story = {
  args: {
    totalPages: 5,
    initialPage: 1,
  },
};
