import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Colors, Typography } from '..';
import useHover from '../utils/useHover';

const InteractiveH5 = styled(Typography)<{ isHovered: boolean }>`
  border-bottom: 4px solid transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer !important;
  transition: color 0.2s;
  color: #f5f5f5;
  padding-bottom: 8px;
  color: ${Colors.monoBlack} !important;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 4px solid transparent;
    transition: transform 0.3s ease;
    pointer-events: none;
    box-sizing: border-box;
  }

  &:before {
    border-color: ${Colors.pink} transparent;
    transform: skewX(-90deg);
  }

  &:after {
    border-color: transparent ${Colors.pink};
    transform: skewY(0deg);
    transition: transform 0.4s;
  }
  ${({ isHovered }) =>
    isHovered &&
    css`
      color: ${Colors.pink} !important;
      &:before,
      &:after {
        transform: none;
        opacity: 1;
      }
    `}
`;

const TextLink: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <div ref={hoverRef}>
      <InteractiveH5 variant="label" isHovered={isHovered}>
        {children}
      </InteractiveH5>
    </div>
  );
};

export default TextLink;
