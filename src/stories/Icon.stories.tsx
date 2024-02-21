import { Meta, StoryObj } from '@storybook/react';
import Icon, { IconProps, IconVariant, IconVariants } from '../Icon'; // Adjust import path as necessary
import styled from 'styled-components';

const meta: Meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: Object.keys(IconVariants) as IconVariant[],
      },
    },
  },
};

export default meta;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  cursor: pointer;
  svg {
    margin: 24px 72px;
  }
`;

export const Variants: StoryObj<IconProps> = {
  render: (_) => {
    Object.entries(IconVariants).map(([key, _]) => console.log(key));
    return (
      <Container>
        {Object.entries(IconVariants).map(([key, _]) => {
          return (
            <Icon
              key={key}
              variant={key as IconVariant}
              onClick={() => navigator.clipboard.writeText(key)}
            />
          );
        })}
      </Container>
    );
  },
};
