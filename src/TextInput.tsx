import React from 'react';
import { Input, inputClasses, InputOwnProps } from '@mui/base/Input';
import styled from 'styled-components';
import { Colors } from './Colors';
import { Status, StatusType } from './utils/useStatus';

interface InputStatusProps {
  labelText?: string;
  status?: Status;
}
type TextInputProps = InputOwnProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  InputStatusProps;

const StyledInputContainer = styled.div<{ status?: Status }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid
    ${(props) => {
      switch (props.status?.type) {
        case 'error':
          return Colors.error;
        case 'notification':
          return Colors.notification;
        case 'success':
          return Colors.success;
        default:
          return Colors.monoGrayTwo;
      }
    }};
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus-within {
    border-color: ${Colors.pink};
  }
  margin: 16px 0;
`;

const StyledInput = styled(Input)<React.InputHTMLAttributes<HTMLInputElement>>`
  && {
    max-height: 56px;
    width: calc(100% - 16px); // Adjust width to account for padding
    margin: 0 8px; // Center input within container
    background: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 8px;
    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 21px;
      line-height: 25px;
      font-weight: 400;
      color: ${Colors.monoGrayFour};
      &:disabled {
        background: none;
        cursor: not-allowed;
      }
    }

    &.${inputClasses.focused} {
      border-color: ${Colors.darkPink};
    }
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -8px;
  left: 0px;
  transform: translateY(-100%);
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${Colors.monoGrayThree};
`;

const StyledStatusMessage = styled.div<{ statustype?: StatusType }>`
  position: absolute;
  bottom: -4px;
  left: 0px;
  transform: translateY(100%);
  color: ${(props) => {
    switch (props.statustype) {
      case 'error':
        return Colors.error;
      case 'notification':
        return Colors.notification;
      case 'success':
        return Colors.success;
      default:
        return Colors.monoGrayFour;
    }
  }};
  padding: 4px 8px;
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;
`;

const StyledSpan = styled.span<{
  required?: boolean;
}>`
  position: fixed;
  right: 8px;
  top: 4px;
  color: ${Colors.pink};
`;

const TextInput: React.FC<TextInputProps> = ({
  id,
  labelText,
  status,
  ...props
}) => {
  const inputId =
    id || `text-input-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <StyledInputContainer status={status}>
      <StyledLabel htmlFor={inputId}>{labelText}</StyledLabel>
      {props.required && <StyledSpan aria-hidden='true'>*</StyledSpan>}
      <StyledInput
        id={inputId}
        {...props}
        aria-describedby={`${inputId}-status`}
      />
      <StyledStatusMessage id={`${inputId}-status`} statustype={status?.type}>
        {status?.message}
      </StyledStatusMessage>
    </StyledInputContainer>
  );
};

export default TextInput;
