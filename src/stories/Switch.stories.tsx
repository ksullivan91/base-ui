import { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Switch from '../Switch';
import styled from 'styled-components';

const meta: Meta<typeof Switch> = {
  title: 'Example/Switch',
  component: Switch,
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

export const DefaultSwitch: StoryObj<typeof Switch> = {
  render: (args) => (
    <Container>
      <Switch {...args} />
      <Switch {...args} checked />
      <Switch {...args} disabled />
    </Container>
  ),
  args: {},
};

export const InteractiveSwitch: StoryObj<typeof Switch> = {
  render: (args) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };

    return (
      <Container>
        <Switch {...args} checked={checked} onChange={handleChange} />
      </Container>
    );
  },
  args: {},
};

export const DisabledSwitch: StoryObj<typeof Switch> = {
  render: (args) => (
    <Container>
      <Switch {...args} disabled />
    </Container>
  ),
  args: {},
};
