import { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../Checkbox';
import styled from 'styled-components';

const meta: Meta<typeof Checkbox> = {
  title: 'Example/Checkbox',
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
  render: (args) => (
    <Container>
      <Checkbox {...args} value='Unchecked' />
      <Checkbox {...args} value='Checked' checked />
      <Checkbox {...args} value='Disabled' disabled />
    </Container>
  ),
  args: {
    // Add default args if necessary
  },
};

export const InteractiveCheckbox: StoryObj<typeof Checkbox> = {
  render: (args) => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return (
      <Container>
        <Checkbox
          {...args}
          checked={checked}
          onChange={handleChange}
          label='Interactive Checkbox'
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
