import React, { useState } from 'react';
import { Popper, PopperOwnProps } from '@mui/base/Popper';
import styled from 'styled-components';
import { Colors } from '../Colors';
import Typography from './Typography';

export interface TooltipProps extends Omit<PopperOwnProps, 'open'> {
  tip: React.ReactNode;
  children: React.ReactElement;
  open?: boolean;
  placement?: 'right' | 'left' | 'top' | 'bottom';
}

const TooltipContent = styled.div`
  background-color: ${Colors.monoBlack};
  margin-bottom: 8px;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  position: relative;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid ${Colors.monoBlack};
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Tooltip: React.FC<TooltipProps> = ({
  tip,
  children,
  placement = 'top',
  ...popperProps
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const tooltipId = `tooltip-${Math.random().toString(36).substring(2, 9)}`;

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setTooltipVisible(false);
  };

  const handleFocus = (event: React.FocusEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setTooltipVisible(true);
  };

  const handleBlur = () => {
    setAnchorEl(null);
    setTooltipVisible(false);
  };

  const child = React.cloneElement(children as React.ReactElement, {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    'aria-describedby': tooltipVisible ? tooltipId : undefined,
    tabIndex: 0,
  });

  const open = popperProps.open ?? tooltipVisible;

  return (
    <React.Fragment>
      {child}
      <Popper
        {...popperProps}
        anchorEl={anchorEl}
        open={open}
        placement={placement}
        role='tooltip'
        id={tooltipId}
      >
        <TooltipContent>
          <Typography variant='p' color={Colors.monoWhite}>
            {tip}
          </Typography>
        </TooltipContent>
      </Popper>
    </React.Fragment>
  );
};

export default Tooltip;
