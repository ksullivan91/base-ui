import * as React from 'react';
import styled, { css } from 'styled-components';

export interface TypographyProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'label' | 'small';
  className?: string;
  color?: string;
}

const variantStyles = {
  h1: css`
    font-size: 50px;
    line-height: 59px;
    font-weight: 500;
  `,
  h2: css`
    font-size: 38px;
    line-height: 45px;
    font-weight: 500;
  `,
  h3: css`
    font-size: 28px;
    line-height: 33px;
    font-weight: 400;
  `,
  h4: css`
    font-size: 21px;
    line-height: 25px;
    font-weight: 400;
  `,
  h5: css`
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.08em;
    font-weight: 500;
  `,
  p: css`
    font-size: 16px;
    line-height: 19px;
    font-weight: normal;
  `,
  label: css`
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    text-align: center;
  `,
  small: css`
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  `,
};

const StyledTypography = styled.span<{
  variant: TypographyProps['variant'];
  $customColor?: string;
}>`
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: ${({ $customColor }) => $customColor || '#252525'};
  ${(props) => variantStyles[props.variant]}
`;

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  color,
}) => {
  return (
    <StyledTypography
      as={variant}
      variant={variant}
      className={className}
      $customColor={color}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
