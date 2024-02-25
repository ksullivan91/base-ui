import type { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from '../components/Dropdown';
import { useDropdown } from '../utils/useDropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Dropdown>;

export const Primary: StoryObj<DropdownProps> = {
  render: args => {
    const { selectedMenuItem, handleMenuItemClick } = useDropdown(
      args.menuItems,
      args.selected
    );

    return (
      <Dropdown
        {...args}
        selected={selectedMenuItem}
        menuItems={args.menuItems.map(item => ({
          ...item,
          onClick: () => handleMenuItemClick(item),
        }))}
      />
    );
  },
  args: {
    selected: 'Option 1',
    menuItems: [
      { label: 'Option 1', onClick: () => {} },
      { label: 'Option 2', onClick: () => {} },
      { label: 'Option 3', onClick: () => {} },
      { label: 'Disabled Option', onClick: () => {}, disabled: true },
    ],
  },
};
