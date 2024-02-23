import { create } from '@storybook/theming/create';
import { Colors } from '../src/Colors';

export default create({
  base: 'light',

  colorPrimary: Colors.pink,
  colorSecondary: Colors.purple,

  appBg: Colors.monoGrayOne,
  appContentBg: Colors.monoWhite,
  appBorderColor: Colors.monoGrayTwo,
  appBorderRadius: 4,

  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  textColor: Colors.monoBlack,
  textInverseColor: Colors.monoWhite,

  // Toolbar default and active colors
  barTextColor: Colors.monoGrayThree,
  barSelectedColor: Colors.pink,
  barBg: Colors.monoGrayOne,

  // Form colors
  inputBg: Colors.monoWhite,
  inputBorder: Colors.monoGrayTwo,
  inputTextColor: Colors.monoBlack,
  inputBorderRadius: 4,

  brandTitle: 'BaseUi',
  // brandUrl: 'https://yourlibrarysite.com',
  // brandImage: 'https://yourlibrarysite.com/your-logo.png', // Path to your logo
});
