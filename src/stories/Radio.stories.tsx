import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../components/Radio';
import RadioGroup from '../components/RadioGroup';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Example/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DefaultRadioGroup: StoryObj<typeof RadioGroup> = {
  render: (args) => (
    <RadioGroup {...args} name='exampleGroup1' defaultValue='Option 2'>
      <Radio id={`radio-option-1`} value='Option 1' />
      <Radio id={`radio-option-2`} value='Option 2' />
      <Radio id={`radio-option-3`} value='Option 3' />
    </RadioGroup>
  ),
  args: {},
};

export const DisabledRadioGroup: StoryObj<typeof RadioGroup> = {
  render: (args) => (
    <Container>
      <RadioGroup {...args} name='exampleGroup3' defaultValue='Option 1'>
        <Radio id={`radio-option-1`} value='Option 1' disabled />
        <Radio id={`radio-option-2`} value='Option 2' disabled />
        <Radio id={`radio-option-3`} value='Option 3' disabled />
      </RadioGroup>
    </Container>
  ),
  args: {},
};
