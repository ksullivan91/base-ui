import { Meta, StoryObj } from '@storybook/react';
import TextLink from '../components/TextLink';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  tags: ['autodocs'],
} as Meta<typeof TextLink>;

export const Default: StoryObj<typeof TextLink> = {
  render: () => <TextLink>Click Me</TextLink>,
};
