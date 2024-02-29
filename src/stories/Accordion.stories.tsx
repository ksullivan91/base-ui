import { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../components/Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta;

export const Default: StoryObj<typeof Accordion> = {
  render: () => (
    <Accordion>
      <AccordionItem
        index={1}
        summary="Item 1"
        isOpen={false}
        onToggle={() => {}}
      >
        <div>Details for Item 1</div>
      </AccordionItem>
      <AccordionItem
        index={2}
        summary="Item 2"
        isOpen={true}
        onToggle={() => {}}
      >
        <div>Details for Item 2</div>
      </AccordionItem>
    </Accordion>
  ),
};
