import { Meta, StoryObj } from '@storybook/react';
import Accordion, { AccordionItem } from '../components/Accordion';
import styled from 'styled-components';

export default {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  component: Accordion,
} as Meta;
const StyledDiv = styled.div`
  margin-left: 8px;
  margin-top: 8px;
`;
export const Default: StoryObj<typeof Accordion> = {
  render: () => (
    <Accordion defaultOpenItems={[0]}>
      <AccordionItem summary="Item 1" defaultOpenChildrenIndices={[0]}>
        <StyledDiv>Child 1</StyledDiv>
        <StyledDiv>Child 2</StyledDiv>
      </AccordionItem>
      <AccordionItem summary="Item 2" defaultOpenChildrenIndices={[0, 1]}>
        <StyledDiv>Child 1</StyledDiv>
        <StyledDiv>Child 2</StyledDiv>
        <StyledDiv>More Child 3</StyledDiv>
      </AccordionItem>
    </Accordion>
  ),
};
