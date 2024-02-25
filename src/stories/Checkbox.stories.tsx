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
  render: args => {
    const checkboxes = useCheckboxes({
      checkbox1: { checked: true, value: 'checked', label: 'Default Checked' },
      checkbox2: { checked: false, value: 'unchecked', label: 'Unchecked' },
      checkbox3: {
        checked: true,
        disabled: true,
        value: 'disabled_unchecked',
        label: 'Disabled Unchecked',
      },
      checkbox4: {
        checked: false,
        disabled: true,
        value: 'disabled',
        label: 'Disabled',
      },
    });
    return (
      <Container>
        <Checkbox {...args} {...checkboxes.checkbox1} />
        <Checkbox {...args} {...checkboxes.checkbox2} />
        <Checkbox {...args} {...checkboxes.checkbox3} />
        <Checkbox {...args} {...checkboxes.checkbox4} />
      </Container>
    );
  },
  args: {
    // Add default args if necessary
  },
};

export const CheckboxWithLabel: StoryObj<typeof Checkbox> = {
  render: args => {
    const checkboxes = useCheckboxes({
      checkbox: {
        checked: true,
        value: 'checked',
        label: 'Checkbox with label',
      },
    });
    return (
      <Container>
        <Checkbox {...args} {...checkboxes.checkbox} />
      </Container>
    );
  },
  args: {},
};

export const DisabledCheckbox: StoryObj<typeof Checkbox> = {
  render: args => (
    <Container>
      <Checkbox {...args} value="Disabled" disabled />
    </Container>
  ),
  args: {},
};
