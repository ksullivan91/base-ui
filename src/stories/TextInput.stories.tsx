import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../TextInput'; // Adjust the import path as necessary
import styled from 'styled-components';

const meta: Meta = {
  title: 'Example/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default meta;

export const Default: StoryObj = {
  render: (args) => (
    <Container>
      <TextInput {...args} placeholder='Default Input' />
      <TextInput {...args} disabled placeholder='Disabled Input' />
    </Container>
  ),
  args: {},
};

export const WithStatusMessages: StoryObj = {
  render: (args) => (
    <Container>
      <TextInput
        {...args}
        status={{ type: 'success', message: 'Success message' }}
        placeholder='Success'
      />
      <TextInput
        {...args}
        status={{ type: 'error', message: 'Error message' }}
        placeholder='Error'
      />
      <TextInput
        {...args}
        status={{ type: 'label', message: 'Label message' }}
        placeholder='Label'
      />
    </Container>
  ),
  args: {},
};

export const RequiredAndOptional: StoryObj = {
  render: (args) => (
    <Container>
      <TextInput
        {...args}
        required
        labelText='Required Input'
        placeholder='Required'
      />
      <TextInput {...args} labelText='Optional Input' placeholder='Optional' />
    </Container>
  ),
  args: {},
};

// You can add more variations to showcase other aspects of the TextInput component,
// such as handling long text, displaying with various label texts, or being used in
// different layout contexts.
