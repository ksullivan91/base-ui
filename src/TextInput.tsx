import * as React from 'react';
import { Input, InputOwnProps } from '@mui/base/Input';
import { Colors } from './Colors';
import styled from 'styled-components';

const StyledInput = styled(Input)`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid ${Colors.monoGrayTwo};
  border-radius: 8px;
`;

// Create an intersection type that includes InputOwnProps and standard HTML input attributes
type TextInputProps = InputOwnProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <>
      <label htmlFor={props.id}>Text Input</label>
      <StyledInput {...props} />
    </>
  );
};
