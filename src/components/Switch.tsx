import { useSwitch } from '@mui/base/useSwitch';
import { SwitchProps as MUISwitchProps } from '@mui/base/Switch';
import styled from 'styled-components';
import { Colors } from '../Colors';
import Typography from './Typography';

export type SwitchProps = MUISwitchProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  LabelProps;

export interface LabelProps {
  label?: string;
}

const BasicSwitchRoot = styled('span')`
  box-sizing: border-box;
  font-size: 0;
  position: relative;
  display: inline-block;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 0 0 1px #dae2ed;
  display: inline-block;
  position: relative;
  max-width: 52px;
  max-height: 28px;
  width: 52px;
  height: 28px;
  padding: 7px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${Colors.monoWhite};
  border-radius: 16px;
  border: 1px solid ${Colors.monoGrayTwo};
  transition: background-color 150ms ease;

  &.Switch-checked {
    background-color: ${Colors.pink};
  }

  &.Switch-disabled {
    background-color: ${Colors.monoGrayOne};
    cursor: not-allowed;
  }
`;

const BasicSwitchThumb = styled('span')`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${Colors.monoGrayTwo};
  position: absolute;
  top: 1px;
  left: 2px;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &.Switch-checked {
    transform: translateX(22px);
    background-color: ${Colors.monoWhite};
  }
  &.Switch-disabled {
    background-color: ${Colors.monoGrayThree};
    cursor: not-allowed;
  }
`;

const BasicSwitchInput = styled('input')`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  margin: 0;
  cursor: inherit;
`;

const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`;

const ToggleSwitch: React.FC<SwitchProps> = ({ label, ...props }) => {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  return (
    <StyledLabel>
      <BasicSwitchRoot
        className={`
          ${checked ? 'Switch-checked' : ''}
          ${disabled ? 'Switch-disabled' : ''}
          ${focusVisible ? 'Switch-focusVisible' : ''}
        `}
      >
        <BasicSwitchThumb className={checked ? 'Switch-checked' : ''} />
        <BasicSwitchInput {...getInputProps()} aria-label={label || 'Switch'} />
      </BasicSwitchRoot>
      {label && (
        <Typography variant='p' color={Colors.monoGrayFour}>
          {label}
        </Typography>
      )}
    </StyledLabel>
  );
};

export default ToggleSwitch;
