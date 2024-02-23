import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../Tooltip'; // Adjust the import path as necessary
import styled from 'styled-components';

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

const StyledButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 2px solid #80bdff;
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const DefaultTooltip: StoryObj = {
  render: () => (
    <Container>
      <Tooltip tip='Default Tooltip'>
        <StyledButton>Hover me</StyledButton>
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
          <StyledButton>Hover me</StyledButton>
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
        <StyledButton disabled>Disabled Button</StyledButton>
      </Tooltip>
    </Container>
  ),
  args: {},
};
