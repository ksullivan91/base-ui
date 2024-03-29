export const Colors = {
  monoBlack: '#212429',
  monoGrayFour: '#495057',
  monoGrayThree: '#ACB5BD',
  monoGrayTwo: '#DDE2E5',
  monoGrayOne: '#F8F9FA',
  lightPink: '#e85b8180',
  pink: '#E85B81',
  darkPink: '#c12f5d',
  lightPurple: '#7048e880',
  purple: '#7048E8',
  darkPurple: '#5028c6',
  blue: '#51CF66',
  error: '#F03D3E',
  notification: '#D84910',
  success: '#007B40',
  monoWhite: '#FFFFFF',
  highlight: '#8CE0F3',
};

export type ColorVariant = keyof typeof Colors;

export type DarkColorVariant = Exclude<
  ColorVariant,
  'lightPink' | 'lightPurple' | 'monoWhite' | 'monoGrayOne' | 'monoGrayTwo'
>;

export type LightColorVariant = Exclude<ColorVariant, DarkColorVariant>;

export const isDarkColorVariant = (
  variant: ColorVariant
): variant is DarkColorVariant => {
  return (
    variant !== 'lightPink' &&
    variant !== 'lightPurple' &&
    variant !== 'monoWhite' &&
    variant !== 'monoGrayOne' &&
    variant !== 'monoGrayTwo' &&
    variant !== 'highlight'
  );
};

export const isLightColorVariant = (
  variant: ColorVariant
): variant is LightColorVariant => {
  return !isDarkColorVariant(variant);
};
