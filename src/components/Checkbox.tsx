import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../Colors';
import Icon from './Icon';
import Typography from './Typography';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
opacity: 0;
position: absolute;
width: 30px;
height: 30px;
z-index: 100;
cursor: pointer;
}
`;

const StyledCheckbox = styled.div<{ checked?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${({ checked }) => (checked ? Colors.pink : 'transparent')};
  border-radius: 4px;
  transition: all 150ms;
  border: 1px solid ${Colors.monoGrayTwo};
  ${HiddenCheckbox}:focus + & {
    outline: ${Colors.highlight} auto 5px;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background: ${Colors.monoGrayTwo};
      border-color: ${Colors.monoGrayTwo};
      & svg {
        fill: ${Colors.monoGrayFour};
      }
    `}

  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid ${Colors.pink};
      & > svg {
        visibility: visible;
      }
    `}

  & > svg {
    visibility: hidden;
    fill: ${Colors.monoWhite}; // Assuming the check icon is a filled shape
  }
`;

const CheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
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
      <CheckboxLabel htmlFor={id}>
        <HiddenCheckbox
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-checked={checked}
          aria-disabled={disabled}
          {...props}
        />
        <StyledCheckbox
          checked={checked}
          disabled={disabled}
          aria-hidden='true'
        >
          <Icon variant='check' stroke={Colors.monoWhite} />
        </StyledCheckbox>
        <Typography variant='p' color={Colors.monoGrayFour}>
          {label}
        </Typography>
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
