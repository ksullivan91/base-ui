import { Meta, StoryObj } from '@storybook/react';
import Drawer from '../components/Drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} as Meta<typeof Drawer>;

export const Default: StoryObj<typeof Drawer> = {
  render: args => <Drawer {...args} />,
  args: {},
};
