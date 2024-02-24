import type { Meta, StoryObj } from '@storybook/react';
import Typography from '../components/Typography';
import { JSX } from 'react/jsx-runtime';
import styled from 'styled-components';

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'label', 'small'],
      },
    },
    color: { control: 'color' },
  },
};

export default meta;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Variants: StoryObj<JSX.IntrinsicAttributes> = {
  render: (args) => (
    <Container>
      <Typography {...args} variant='h1'>
        Heading 1
      </Typography>
      <Typography {...args} variant='h2'>
        Heading 2
      </Typography>
      <Typography {...args} variant='h3'>
        Heading 3
      </Typography>
      <Typography {...args} variant='h4'>
        Heading 4
      </Typography>
      <Typography {...args} variant='h5'>
        Heading 5
      </Typography>
      <Typography {...args} variant='p'>
        This is a paragraph.
      </Typography>
      <Typography {...args} variant='small'>
        This is small text.
      </Typography>
    </Container>
  ),
};
