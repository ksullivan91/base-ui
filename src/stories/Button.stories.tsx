import type { Meta, StoryObj } from '@storybook/react';
import {
  AlternativeButton,
  PrimaryButton,
  SecondaryButton,
} from '../components/Button';
import { JSX } from 'react/jsx-runtime';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Example/Button',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export default meta;

export const Primary: StoryObj = (args: JSX.IntrinsicAttributes) => (
  <Container>
    <PrimaryButton {...args}>Label</PrimaryButton>
    <PrimaryButton {...args} disabled={true}>
      Label
    </PrimaryButton>
  </Container>
);
Primary.args = {
  primary: true,
  label: 'Button',
};
export const Alternative: StoryObj = (args: JSX.IntrinsicAttributes) => (
  <Container>
    <AlternativeButton {...args}>Label</AlternativeButton>
    <AlternativeButton {...args} disabled={true}>
      Label
    </AlternativeButton>
  </Container>
);
Alternative.args = {
  label: 'Button',
};
export const Secondary: StoryObj = (args: JSX.IntrinsicAttributes) => (
  <Container>
    <SecondaryButton {...args}>Label</SecondaryButton>
    <SecondaryButton {...args} disabled={true}>
      Label
    </SecondaryButton>
  </Container>
);
Secondary.args = {
  label: 'Button',
};
