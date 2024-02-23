import type { Preview } from '@storybook/react';
import { Colors } from '../src/Colors';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'monoGrayOne',
      values: [
        { name: 'monoBlack', value: Colors.monoBlack },
        { name: 'monoGrayFour', value: Colors.monoGrayFour },
        { name: 'monoGrayThree', value: Colors.monoGrayThree },
        { name: 'monoGrayTwo', value: Colors.monoGrayTwo },
        { name: 'monoGrayOne', value: Colors.monoGrayOne },
        { name: 'lightPink', value: Colors.lightPink },
        { name: 'pink', value: Colors.pink },
        { name: 'darkPink', value: Colors.darkPink },
        { name: 'lightPurple', value: Colors.lightPurple },
        { name: 'purple', value: Colors.purple },
        { name: 'darkPurple', value: Colors.darkPurple },
        { name: 'blue', value: Colors.blue },
        { name: 'error', value: Colors.error },
        { name: 'notification', value: Colors.notification },
        { name: 'success', value: Colors.success },
        { name: 'monoWhite', value: Colors.monoWhite },
        { name: 'highlight', value: Colors.highlight },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
