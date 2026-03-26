import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../components/card/Card';
import { Tab } from '../components/tab/Tab';
import { Typography } from '../components/typography/Typography';

const items = [
  {
    label: 'Overview',
    value: 'overview',
    children: (
      <Card style={{ marginTop: 16, padding: 20 }}>
        <Typography>Overview content for the selected section.</Typography>
      </Card>
    ),
  },
  {
    label: 'Activity',
    value: 'activity',
    children: (
      <Card style={{ marginTop: 16, padding: 20 }}>
        <Typography color="secondary">Recent activity appears here.</Typography>
      </Card>
    ),
  },
  {
    label: 'Billing',
    value: 'billing',
    children: (
      <Card style={{ marginTop: 16, padding: 20 }}>
        <Typography color="secondary">Billing settings and invoices.</Typography>
      </Card>
    ),
    disabled: true,
  },
];

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    items,
    defaultTab: 'overview',
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondTabSelected: Story = {
  args: {
    defaultTab: 'activity',
  },
};
