import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../Colors';
import Icon from './Icon';
import Typography from './Typography';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<{
  disabled?: boolean;
}>`
  opacity: 0;
  position: absolute;
  width: 30px;
  height: 30px;
  z-index: 100;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
  }
`;

export const StyledCheckbox = styled.div<{
  checked?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${({ checked }) => (checked ? Colors.pink : 'transparent')};
  border-radius: 4px;
  transition: background-color 150ms;
  border: 1px solid ${Colors.monoGrayTwo};
  &:focus + & {
    outline: ${Colors.highlight} auto 5px;
  }
  & > svg {
    fill: none !important;
    visibility: hidden;
  }
  ${HiddenCheckbox}:focus + & {
    outline: ${Colors.highlight} auto 5px;
  }

  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid ${Colors.pink};
      & > svg {
        visibility: visible;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${Colors.monoGrayTwo};
      border-color: ${Colors.monoGrayTwo};
      cursor: not-allowed;
      & svg {
        fill: ${Colors.monoGrayFour};
      }
    `}
`;

export const CheckboxLabel = styled.label<{ disabled?: boolean }>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  name,
  disabled,
  label,
  ...props
}) => {
  const id = props.id || name;

  return (
    <CheckboxContainer>
      <CheckboxLabel htmlFor={id} disabled={disabled}>
        <HiddenCheckbox
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={checked}
          aria-disabled={disabled}
          tabIndex={0}
          {...props}
        />
        <StyledCheckbox
          checked={checked}
          disabled={disabled}
          aria-hidden="true"
          tabIndex={-1}
        >
          <Icon variant="check" color={Colors.monoWhite} />
        </StyledCheckbox>
        <Typography variant="p" color={Colors.monoGrayFour}>
          {label}
        </Typography>
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
