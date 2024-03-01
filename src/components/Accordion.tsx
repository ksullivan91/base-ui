import React, { useState, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Colors, Icon, Typography } from '..';

const AccordionContainer = styled.div`
  border-radius: 3px;
`;

const AccordionItemContainer = styled.div``;

const AccordionSummaryButton = styled.button`
  background: #ffffff00;
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
`;

const AccordionDetailsContainer = styled.div`
  transform: translateY(-10px);
  position: relative;
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
  defaultOpenItems?: number[];
}

interface AccordionItemProps {
  summary: string;
  children: React.ReactNode[];
  open?: boolean;
  defaultOpenChildrenIndices?: number[];
}
export const AccordionItem: React.FC<AccordionItemProps> = ({
  summary,
  children,
  defaultOpenChildrenIndices = [],
  open = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const handleToggle = () => setIsOpen(!isOpen);

  // Determine which children to display based on `isOpen` and `defaultOpenChildrenIndices`
  const displayedChildren = isOpen
    ? children
    : children.filter((_, index) => defaultOpenChildrenIndices.includes(index));

  return (
    <AccordionItemContainer>
      <AccordionSummaryButton
        onClick={handleToggle}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-controls={`panel-content`}
        id={`panel-header`}
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
        id={`panel${isOpen}-content`}
        role="region"
        aria-labelledby={`panel${isOpen}-header`}
      >
        {displayedChildren}
      </AccordionDetailsContainer>
    </AccordionItemContainer>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  children,
  defaultOpenItems = [],
}) => {
  return (
    <AccordionContainer>
      {React.Children.map(children, (child: React.ReactNode, index: number) => {
        const isOpen = defaultOpenItems.includes(index);
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { ...child.props, open: isOpen });
        }
        return null;
      })}
    </AccordionContainer>
  );
};

export default Accordion;
