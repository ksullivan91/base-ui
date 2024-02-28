import React from 'react';
import { Badge as MUIBadge, BadgeProps as MUIBadgeProps } from '@mui/base';
import styled from 'styled-components';
import { ColorVariant, Colors, isDarkColorVariant } from '../Colors';

interface StyledBadgeProps extends MUIBadgeProps {
  variant: ColorVariant;
}

const getFontColor = (variant: ColorVariant) => {
  if (isDarkColorVariant(variant)) {
    return Colors.monoWhite;
  }
  return Colors.monoBlack;
};

const StyledBadge = styled(MUIBadge)<StyledBadgeProps>`
  border-radius: 200px;
  padding: 8px 16px;
  font-size: 0.75rem;
  height: 20px;
  min-width: 20px;
  box-sizing: border-box;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  ${({ variant }) => `
      background-color: ${Colors[variant]};
      color: ${getFontColor(variant)};
      
    `}
`;

const Badge: React.FC<StyledBadgeProps> = ({ variant, children }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

export default Badge;
