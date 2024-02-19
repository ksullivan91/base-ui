import { Button as ButtonBase } from '@mui/base/Button';
import { Input as InputBase } from '@mui/base/Input';
import styled from 'styled-components';

export const Button = styled(ButtonBase)`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primaryAccentColor[500]};
  color: ${({ theme }) => theme.colors.mainBackgroundColor[500]};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryAccentColor[600]};
  }
`;

export const AutocompleteInput = styled(InputBase)`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.neutralColor[500]};
  border-radius: 4px;
  font-size: 16px;
`;

export const Menu = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled('li')`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBackgroundColor[500]};
  }
`;

export const Modal = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor[100]};
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

export const NumberInput = styled(InputBase)`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.neutralColor[500]};
  border-radius: 4px;
  font-size: 16px;
`;

export const Popper = styled('div')`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor[100]};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.neutralColor[500]};
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Portal = styled('div')`
  /* Styling for portal content if needed */
`;

export const DropdownSelect = styled('div')`
  position: relative;
  width: 100%;
`;

export const DropdownSelectToggle = styled('div')`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.neutralColor};
  border-radius: 4px;
  font-size: 16px;
`;

export const DropdownSelectMenu = styled('div')`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor[500]};
  border: 1px solid ${({ theme }) => theme.colors.neutralColor[500]};
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DropdownSelectOption = styled('div')`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBackgroundColor[400]};
  }
`;

export const Slider = styled(InputBase)`
  width: 100%;
`;

export const Snackbar = styled('div')`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.textColor[500]};
  color: ${({ theme }) => theme.colors.mainBackgroundColor[500]};
  padding: 10px 20px;
  border-radius: 4px;
`;

export const Switch = styled('label')`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

export const SwitchInput = styled(InputBase)`
  display: none;
`;

export const SwitchLabel = styled('span')``;
