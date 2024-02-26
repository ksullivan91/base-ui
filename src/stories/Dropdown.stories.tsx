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

export const DropdownWithDefaultSelectAndLabel: StoryObj<DropdownProps> = {
  render: args => {
    const { selectedMenuItem } = useDropdown({
      menuItems: args.menuItems,
      label: args.label,
      defaultSelectedOption: args.selected,
    });

    return (
      <Dropdown
        {...args}
        selected={selectedMenuItem}
        menuItems={args.menuItems.map(item => ({
          ...item,
        }))}
      />
    );
  },
  args: {
    label: 'Dropdown Label',
    selected: 'Option 1',
    menuItems: [
      { label: 'Option 1', onClick: () => {} },
      { label: 'Option 2', onClick: () => {} },
      { label: 'Option 3', onClick: () => {} },
      { label: 'Disabled Option', onClick: () => {}, disabled: true },
    ],
  },
};
export const DropdownWithLabelAndWithoutSelectedOption: StoryObj<DropdownProps> =
  {
    render: args => {
      const { selectedMenuItem } = useDropdown({
        menuItems: args.menuItems,
        label: args.label,
      });

      return (
        <Dropdown
          {...args}
          selected={selectedMenuItem}
          menuItems={args.menuItems.map(item => ({
            ...item,
          }))}
        />
      );
    },
    args: {
      label: 'Dropdown Label',
      menuItems: [
        { label: 'Option 1', onClick: () => {} },
        { label: 'Option 2', onClick: () => {} },
        { label: 'Option 3', onClick: () => {} },
        { label: 'Disabled Option', onClick: () => {}, disabled: true },
      ],
    },
  };

export const DropdownWithoutSelectedOptionOrLabel: StoryObj<DropdownProps> = {
  render: args => {
    const { selectedMenuItem } = useDropdown({
      menuItems: args.menuItems,
    });

    return (
      <Dropdown
        {...args}
        selected={selectedMenuItem}
        menuItems={args.menuItems.map(item => ({
          ...item,
        }))}
      />
    );
  },
  args: {
    menuItems: [
      { label: 'Option 1', onClick: () => {} },
      { label: 'Option 2', onClick: () => {} },
      { label: 'Option 3', onClick: () => {} },
      { label: 'Disabled Option', onClick: () => {}, disabled: true },
    ],
  },
};
