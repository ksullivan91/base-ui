import React from 'react';
import { Dropdown as MUIDropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import {
  MenuItem,
  MenuItemProps as MUIMenuItemProps,
} from '@mui/base/MenuItem';
import { css, styled } from 'styled-components';
import { MenuButton } from '@mui/base/MenuButton';
import { Colors } from '../Colors';
import { UseDropdownParameters } from '@mui/base';
import Icon from './Icon';
import Typography from './Typography';
import { useDropdown } from '../utils/useDropdown';
import useHover from '../utils/useHover';

const StyledButton = styled(MenuButton)`
  padding: 6px 12px;
  min-width: 120px;
  border: 1px solid ${Colors.monoGrayTwo};
  border-radius: 4px;
  background-color: ${Colors.monoWhite};
  text-align: left;
  min-width: 350px;
  min-height: 56px;
  cursor: pointer;
  position: relative;
  outline: 0;
  &:hover,
  &:focus {
    border-color: ${Colors.pink};
  }
  &.base--expanded {
    border-color: ${Colors.pink};
  }
`;

const StyledMenu = styled(Menu)`
  border: 1px solid ${Colors.monoGrayTwo};
  border-radius: 0px 0px 4px 4px;
  background-color: ${Colors.monoWhite};
  width: 350px;
  ul {
    margin: 0;
    padding: 0;
  }
`;

const StyledMenuItem = styled(MenuItem)<{ disabled?: boolean }>`
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
  &:active {
    background-color: ${Colors.monoGrayTwo};
  }
  &:hover,
  &:focus {
    background-color: ${Colors.monoGrayOne};
    outline: 0;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background: ${Colors.monoGrayOne};
      cursor: not-allowed !important;
      small {
        color: ${Colors.monoGrayThree} !important;
      }
      &:hover,
      &:focus {
        background-color: ${Colors.monoGrayOne};
        outline: 0;
      }
    `}
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export type MenuItemProps = MUIMenuItemProps;

export interface DropdownProps extends UseDropdownParameters {
  selected: string;
  menuItems: MenuItemProps[];
  label?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  menuItems,
  selected,
  label,
}) => {
  const { selectedMenuItem, open, handleMenuItemClick } = useDropdown({
    menuItems,
    defaultSelectedOption: selected,
    label: label,
  });

  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <div ref={hoverRef} data-testid="dropdown-wrapper" tabIndex={-1}>
      <MUIDropdown>
        <StyledButton aria-haspopup="true" aria-expanded={open}>
          <Typography variant={'h4'}>{selectedMenuItem}</Typography>
          <StyledIcon
            variant={'dropdown'}
            color={isHovered ? Colors.pink : Colors.monoGrayFour}
          />
        </StyledButton>
        <StyledMenu role="menu">
          {menuItems.map((item: MenuItemProps, index: number) => (
            <StyledMenuItem
              {...item}
              onClick={() => handleMenuItemClick(item)}
              key={index}
              tabIndex={0}
              value={item.value}
              slotProps={{
                root: {
                  'aria-disabled': item.disabled ? 'true' : 'false',
                },
              }}
            >
              <Typography variant={'small'} color={Colors.monoGrayFour}>
                {item.label}
              </Typography>
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </MUIDropdown>
    </div>
  );
};

export default Dropdown;
