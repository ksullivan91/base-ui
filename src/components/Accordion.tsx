import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const AccordionItemContainer = styled.div`
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const AccordionSummaryButton = styled.button`
  background: #f7f7f7;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid blue;
  }
`;

const AccordionDetailsContainer = styled.div`
  padding: 10px;
  display: none;

  &.is-open {
    display: block;
  }
`;

interface AccordionProps {
  children: ReactNode;
}

interface AccordionItemProps {
  summary: string;
  details: ReactNode;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}
export const AccordionItem: React.FC<AccordionItemProps> = ({
  summary,
  details,
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
        {summary}
      </AccordionSummaryButton>
      <AccordionDetailsContainer
        className={isOpen ? 'is-open' : ''}
        id={`panel${index}-content`}
        role="region"
        aria-labelledby={`panel${index}-header`}
      >
        {details}
      </AccordionDetailsContainer>
    </AccordionItemContainer>
  );
};

// Accordion component
export const Accordion: React.FC<AccordionProps> = ({ children }) => {
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
