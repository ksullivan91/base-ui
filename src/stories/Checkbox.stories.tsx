import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../components/Checkbox';
import styled from 'styled-components';
import useCheckboxes from '../utils/useCheckbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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

export const DefaultCheckbox: StoryObj<typeof Checkbox> = {
  render: (args) => {
    const checkboxes = useCheckboxes({
      checkbox1: true,
      checkbox2: false,
      checkbox3: true,
      checkbox4: false,
    });
    return (
      <Container>
        <Checkbox {...args} {...checkboxes.checkbox1} value='Unchecked' />
        <Checkbox {...args} {...checkboxes.checkbox2} value='Checked' />
        <Checkbox
          {...args}
          {...checkboxes.checkbox3}
          value='Disabled'
          disabled
        />
        <Checkbox
          {...args}
          {...checkboxes.checkbox4}
          value='Disabled'
          disabled
        />
      </Container>
    );
  },
  args: {
    // Add default args if necessary
  },
};

export const CheckboxWithLabel: StoryObj<typeof Checkbox> = {
  render: (args) => {
    const checkboxes = useCheckboxes({
      checkbox: true,
    });
    return (
      <Container>
        <Checkbox
          {...args}
          {...checkboxes.checkbox}
          label='Checkbox with label'
        />
      </Container>
    );
  },
  args: {},
};

export const DisabledCheckbox: StoryObj<typeof Checkbox> = {
  render: (args) => (
    <Container>
      <Checkbox {...args} value='Disabled' disabled />
    </Container>
  ),
  args: {},
};
