import { Meta, StoryObj } from '@storybook/react';
import Badge from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj<typeof Badge> = {
  args: {
    children: 'Default Badge',
    variant: 'monoGrayFour', // This should be a valid key in your Colors object
  },
};
export const MonoBlack: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'monoBlack',
  },
};
export const MonoGrayFour: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'monoGrayFour',
  },
};
export const MonoGrayThree: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'monoGrayThree',
  },
};
export const MonoGrayTwo: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'monoGrayTwo',
  },
};
export const MonoGrayOne: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'monoGrayOne',
  },
};
export const LightPink: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'lightPink',
  },
};
export const Pink: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'pink',
  },
};
export const DarkPink: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'darkPink',
  },
};
export const LightPurple: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'lightPurple',
  },
};
export const Purple: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'purple',
  },
};
export const DarkPurple: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'darkPurple',
  },
};
export const Blue: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'blue',
  },
};
export const Error: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'error',
  },
};
export const Notification: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'notification',
  },
};
export const Success: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'success',
  },
};
export const MonoWhite: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'monoWhite',
  },
};
export const Highlight: StoryObj<typeof Badge> = {
  args: {
    children: 'Badge Text',
    variant: 'highlight',
  },
};
