import { useState } from 'react';
import { MenuItemProps } from '../components/Dropdown';

interface UseDropdownProps {
  menuItems: MenuItemProps[];
  defaultSelectedOption?: string;
  label?: string;
}

interface UseDropdownReturn {
  selectedMenuItem: string;
  open: boolean;
  handleMenuItemClick: (item: MenuItemProps) => void;
}

export function useDropdown(opts: UseDropdownProps): UseDropdownReturn {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    opts.defaultSelectedOption || opts.label || opts.menuItems[0]?.label || ''
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (item: MenuItemProps) => {
    setSelectedMenuItem(item.label ?? '');
    setIsOpen(false);
  };

  return {
    selectedMenuItem,
    open: isOpen,
    handleMenuItemClick,
  };
}

export default useDropdown;
