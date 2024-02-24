import styled, { css } from 'styled-components';
import { Button as ButtonBase, ButtonOwnProps } from '@mui/base/Button';
import Typography from './Typography';
import { Colors } from '../Colors';

export interface ButtonProps extends ButtonOwnProps {
  variant?: 'primary' | 'alternative' | 'secondary';
}

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

  &:hover,
  &:focus {
    border: 1px solid #252525;
    background-color: #fff;
  }

  &:disabled {
    border: 1px solid #b5b5b580;
    background-color: #fff;
    label {
      color: #b5b5b580;
    }
    &:hover,
    &:focus {
      border: 1px solid #b5b5b580;
    }
  }
`;

export const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <StyledPrimaryButton {...props}>
    <Typography variant='label' color='#fff'>
      {props.children}
    </Typography>
  </StyledPrimaryButton>
);

export const AlternativeButton: React.FC<ButtonProps> = (props) => (
  <StyledAlternativeButton {...props}>
    <Typography variant='label' color='#fff'>
      {props.children}
    </Typography>
  </StyledAlternativeButton>
);

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <StyledSecondaryButton {...props}>
    <Typography variant='label' color={Colors.monoBlack}>
      {props.children}
    </Typography>
  </StyledSecondaryButton>
);

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  switch (variant) {
    case 'alternative':
      return <AlternativeButton {...props} />;
    case 'secondary':
      return <SecondaryButton {...props} />;
    default:
      return <PrimaryButton {...props} />;
  }
};

export default Button;
