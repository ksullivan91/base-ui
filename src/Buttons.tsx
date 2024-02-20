import styled, { css } from 'styled-components';
import { Button as ButtonBase, ButtonOwnProps } from '@mui/base/Button';
import { Typography } from './Typography';
import { Colors } from './Colors';

// Base styled component for the buttons
const ButtonStyles = css`
  cursor: pointer;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 60px;
  gap: 10px;
  border-radius: 8px;
  color: #fff;
  outline: none;
  border: none;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${Colors.darkPink};
  }

  &:disabled {
    cursor: not-allowed;
    label {
      cursor: not-allowed;
    }
    &:hover {
      background-color: inherit;
    }
  }

  label {
    cursor: pointer;
  }
`;

const StyledPrimaryButton = styled(ButtonBase)`
  ${ButtonStyles}
  background-color: ${Colors.pink};

  &:hover {
    background-color: #c12f5d;
  }

  &:disabled {
    background-color: ${Colors.lightPink};
    &:hover {
      background-color: ${Colors.lightPink};
    }
  }
`;

const StyledAlternativeButton = styled(ButtonBase)`
  ${ButtonStyles}
  background-color: #5e48e8;

  &:hover,
  &:focus {
    background-color: ${Colors.darkPurple};
  }

  &:disabled {
    background-color: ${Colors.lightPurple};
    &:hover {
      background-color: ${Colors.lightPurple};
    }
  }
`;

const StyledSecondaryButton = styled(ButtonBase)`
  ${ButtonStyles}
  background-color: #fff;
  color: ${Colors.monoBlack};
  border: 1px solid #b5b5b5;

  &:hover {
    border: 1px solid #252525;
  }

  &:disabled {
    border: 1px solid #b5b5b580;
    label {
      color: #b5b5b580;
    }
    &:hover {
      border: 1px solid #b5b5b580;
    }
  }
`;

export const PrimaryButton: React.FC<ButtonOwnProps> = (props) => (
  <StyledPrimaryButton {...props}>
    <Typography variant='label' color='#fff'>
      {props.children}
    </Typography>
  </StyledPrimaryButton>
);

export const AlternativeButton: React.FC<ButtonOwnProps> = (props) => (
  <StyledAlternativeButton {...props}>
    <Typography variant='label' color='#fff'>
      {props.children}
    </Typography>
  </StyledAlternativeButton>
);

export const SecondaryButton: React.FC<ButtonOwnProps> = (props) => (
  <StyledSecondaryButton {...props}>
    <Typography variant='label' color={Colors.monoBlack}>
      {props.children}
    </Typography>
  </StyledSecondaryButton>
);
