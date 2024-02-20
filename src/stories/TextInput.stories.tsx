// TextInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '../TextInput';
import styled from 'styled-components';

const meta: Meta<typeof TextInput> = {
  title: 'Example/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    // Define other props here as needed
  },
};

export default meta;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Default: StoryObj<typeof TextInput> = {
  render: (args) => (
    <Container>
      <TextInput {...args} />
    </Container>
  ),
  args: {
    placeholder: 'Enter text here...',
  },
};
