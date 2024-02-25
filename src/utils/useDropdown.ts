import { useState } from 'react';
import { MenuItemProps } from '../components/Dropdown';

interface UseDropdownReturn {
  selectedMenuItem: string;
  open: boolean;
  handleMenuItemClick: (item: MenuItemProps) => void;
}

export const useDropdown = (
  initialItems: MenuItemProps[],
  initialSelected?: string
): UseDropdownReturn => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    initialSelected || initialItems[0]?.label || ''
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
};
