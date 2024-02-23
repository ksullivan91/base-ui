import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../Colors';

export interface RadioProps {
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
  id: string;
}

const StyledLabel = styled.label`
  margin: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

const HiddenRadioInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 30px;
  height: 30px;
  z-index: 100;
  margin: 0;
  &:focus + & {
    box-shadow: ${Colors.highlight} auto 5px;
  }
  &:focus {
    box-shadow: ${Colors.highlight} auto 5px;
  }
  &:focus-visible + div {
    box-shadow: 0 0 0 3px ${Colors.highlight};
  }
`;

const CustomRadio = styled.div<{ checked?: boolean; disabled?: boolean }>`
  width: 24px;
  height: 24px;
  border: 2px solid ${Colors.pink};
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  position: relative;

  &:after {
    content: '';
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    width: 18px;
    height: 18px;
    background: ${Colors.pink};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Style for when the radio is disabled */
  ${({ disabled }) =>
    disabled &&
    css`
      background: ${Colors.monoGrayTwo};
      border-color: ${Colors.monoGrayTwo};
      pointer-events: none;
    `}
`;

const Radio: React.FC<RadioProps> = ({
  value,
  checked,
  onChange,
  name,
  disabled,
  id,
}) => {
  return (
    <StyledLabel htmlFor={id}>
      <HiddenRadioInput
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
      <CustomRadio checked={checked} disabled={disabled} aria-hidden='true' />
      {value}
    </StyledLabel>
  );
};

export default Radio;
