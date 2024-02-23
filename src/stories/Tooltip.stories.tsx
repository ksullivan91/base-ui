import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../Tooltip'; // Adjust the import path as necessary
import styled from 'styled-components';
import { AlternativeButton, PrimaryButton, SecondaryButton } from '../Buttons';

const meta: Meta = {
  title: 'Example/Tooltip',
  component: Tooltip,
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
  padding: 20px;
`;

export const DefaultTooltip: StoryObj = {
  render: () => (
    <Container>
      <Tooltip tip='Default Tooltip'>
        <PrimaryButton>Hover me</PrimaryButton>
      </Tooltip>
    </Container>
  ),
  args: {},
};

export const InteractiveTooltip: StoryObj = {
  render: () => {
    const [show, setShow] = useState(false);
    return (
      <Container
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Tooltip tip='Interactive Tooltip' open={show}>
          <SecondaryButton>Hover me</SecondaryButton>
        </Tooltip>
      </Container>
    );
  },
  args: {},
};

export const DisabledButtonWithTooltip: StoryObj = {
  render: () => (
    <Container>
      <Tooltip tip="You can't interact with this button">
        <AlternativeButton disabled>Disabled Button</AlternativeButton>
      </Tooltip>
    </Container>
  ),
  args: {},
};
