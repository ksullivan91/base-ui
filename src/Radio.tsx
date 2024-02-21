import React from 'react';
import styled from 'styled-components';

interface RadioSelectProps {
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const StyledLabel = styled.label`
  margin: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  // Add more styles here to match your design requirements
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const RadioSelect: React.FC<RadioSelectProps> = ({
  value,
  checked,
  onChange,
  name,
}) => {
  return (
    <StyledLabel>
      <RadioInput
        type='radio'
        value={value}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      {value}
    </StyledLabel>
  );
};

export default RadioSelect;
