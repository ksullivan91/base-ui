import React, { useState, ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Colors, Icon, Typography } from '..';

const slideInAnimation = keyframes`
  from {display: none; opacity: 0.1; transform: translateY(-10px);}
  to { display: block; transform: translateY(0px); opacity: 1;}
`;

const AccordionContainer = styled.div`
  border-radius: 3px;
`;

const AccordionItemContainer = styled.div`
  &:focus {
    outline: 2px solid ${Colors.pink};
  }
`;

const AccordionSummaryButton = styled.button`
  background: #ffffff00;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  h5 {
    display: flex;
    svg {
      margin-left: 5px;
    }
  }
  &:focus {
    outline: 2px solid ${Colors.pink};
  }
`;

const AccordionDetailsContainer = styled.div`
  padding: 10px;
  transform: translateY(-10px);
  position: relative;
  display: none;
  opacity: 0;
  z-index: 0;
  animation: ${slideInAnimation} 0.1s ease-in-out;
  animation-direction: reverse;
  &.is-open {
    animation: ${slideInAnimation} 0.1s ease-in-out;
    display: block;
    opacity: 1;
    transform: translateY(0px);
  }
`;

const StyledIcon = styled(Icon)<{ isOpen: boolean }>`
  position: relative;
  top: -2px;
  transition: transform 0.25s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  summary: string;
  index: number;
  isOpen: boolean;
  children: ReactNode;
  onToggle: (index: number) => void;
}
export const AccordionItem: React.FC<AccordionItemProps> = ({
  summary,
  children,
  index,
  isOpen,
  onToggle,
}) => {
  return (
    <AccordionItemContainer>
      <AccordionSummaryButton
        onClick={() => onToggle(index)}
        aria-expanded={isOpen}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Typography variant="h4">{summary}</Typography>
        <div>
          <Typography variant="h5">
            View All
            <StyledIcon
              isOpen={isOpen}
              variant="dropdown"
              color={Colors.pink}
              height={18}
            />
          </Typography>
        </div>
      </AccordionSummaryButton>
      <AccordionDetailsContainer
        className={isOpen ? 'is-open' : ''}
        id={`panel${index}-content`}
        role="region"
        aria-labelledby={`panel${index}-header`}
      >
        {children}
      </AccordionDetailsContainer>
    </AccordionItemContainer>
  );
};

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContainer>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
          index,
        })
      )}
    </AccordionContainer>
  );
};

export default Accordion;
