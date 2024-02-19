export interface ThemeColors {
  [key: string]: {
    [key: number]: string;
  };
}

export interface Theme {
  colors: ThemeColors;
}

export const defaultTheme: Theme = {
  colors: {
    mainBackgroundColor: generateVariations('#F5F5F5'),
    primaryAccentColor: generateVariations('#388E3C'),
    secondaryAccentColor: generateVariations('#1976D2'),
    highlightColor: generateVariations('#FFD600'),
    textColor: generateVariations('#212121'),
    infoTextColor: generateVariations('#616161'),
    chartBlue: generateVariations('#64B5F6'),
    chartGreen: generateVariations('#81C784'),
    warningErrorColor: generateVariations('#D32F2F'),
    neutralColor: generateVariations('#B0BEC5'),
    successColor: generateVariations('#689F38'),
  },
};

export function generateVariations(baseColor: string): {
  [key: number]: string;
} {
  const variations: { [key: number]: string } = {};
  variations[500] = baseColor; // Set the 500 variation as provided base color
  for (let i = 1; i <= 4; i++) {
    variations[500 + i * 100] = darkenColor(baseColor, i * 0.1);
  }
  for (let i = 1; i <= 4; i++) {
    variations[500 - i * 100] = lightenColor(baseColor, i * 0.1);
  }
  return variations;
}

function hexToHSL(hex: string): number[] {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0,
    l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(hsl: string): string {
  const [h, s, l] = hsl
    .substring(4, hsl.length - 1)
    .split(',')
    .map((val) => parseInt(val));
  const hue = h / 360;
  const saturation = s / 100;
  const lightness = l / 100;
  let r, g, b;

  if (saturation === 0) {
    r = g = b = lightness;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q =
      lightness < 0.5
        ? lightness * (1 + saturation)
        : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    r = hue2rgb(p, q, hue + 1 / 3);
    g = hue2rgb(p, q, hue);
    b = hue2rgb(p, q, hue - 1 / 3);
  }

  const toHex = (c: number) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function lightenColor(color: string, percent: number): string {
  const hslColor = hexToHSL(color);
  const lightenedSaturation = Math.max(
    0,
    Math.min(100, hslColor[1] - percent * 10)
  );
  const lightenedLightness = Math.max(
    0,
    Math.min(100, hslColor[2] + percent * 120)
  );
  const lightenedHSL = `hsl(${hslColor[0]}, ${lightenedSaturation}%, ${lightenedLightness}%)`;
  return hslToHex(lightenedHSL);
}

function darkenColor(color: string, percent: number): string {
  const hslColor = hexToHSL(color);
  const darkenedSaturation = Math.max(
    0,
    Math.min(100, hslColor[1] + percent * 20)
  );
  const darkenedLightness = Math.max(
    0,
    Math.min(100, hslColor[2] - percent * 50)
  );
  const darkenedHSL = `hsl(${hslColor[0]}, ${darkenedSaturation}%, ${darkenedLightness}%)`;
  return hslToHex(darkenedHSL);
}
