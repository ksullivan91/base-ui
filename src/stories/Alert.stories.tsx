import type { Meta, StoryObj } from '@storybook/react';
import Alerts from '../Alert';
import React from 'react';
import { StatusType } from '../utils/useStatus';
import { ConditionalPortalWrapper } from '../utils/useConditionalPortal';

export const Alert: React.FC<{
  status: Exclude<StatusType, 'inactive' | 'label'>;
  message: string;
}> = (props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  return (
    <ConditionalPortalWrapper {...props}>
      <Alerts
        container={containerRef.current}
        status={props.status}
        message={props.message}
      />
    </ConditionalPortalWrapper>
  );
};

const meta: Meta<typeof Alerts> = {
  title: 'Example/Alerts',
  component: Alerts,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    status: 'success',
    message: 'This is a success alert!',
  },
};

export default meta;

export const SuccessAlert: StoryObj<typeof Alerts> = {
  render: (args) => (
    <Alert {...args} status='success' message='This is a success alert!' />
  ),
  args: {},
};

export const ErrorAlert: StoryObj<typeof Alerts> = {
  render: (args) => (
    <Alert {...args} status='error' message='This is an error alert!' />
  ),
  args: {},
};

export const NotificationAlert: StoryObj<typeof Alerts> = {
  render: (args) => (
    <Alert
      {...args}
      status='notification'
      message='This is a notification alert!'
    />
  ),
  args: {},
};
