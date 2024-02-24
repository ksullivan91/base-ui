import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../components/TextInput';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Components/TextInput',
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

export const WithNotificationStatus: StoryObj = {
  render: (args) => (
    <Container>
      <TextInput
        {...args}
        status={{ type: 'label', message: 'info message' }}
        placeholder='Input text here'
      />
    </Container>
  ),
  args: {},
};

export const AllStatusTypes: StoryObj = {
  render: (args) => (
    <Container>
      <TextInput {...args} placeholder='Default Input' />
      <TextInput {...args} disabled placeholder='Disabled Input' />
      <TextInput
        {...args}
        status={{ type: 'label', message: 'Label message' }}
        placeholder='Label'
      />
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
        status={{ type: 'notification', message: 'Notification message' }}
        placeholder='Notification'
      />
    </Container>
  ),
  args: {},
};
