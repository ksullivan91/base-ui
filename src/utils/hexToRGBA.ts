/**
 * Converts a hex color string to an RGBA color string with a specified alpha.
 * @param hex - The hex color code (e.g., "#ff0000" or "#f00").
 * @param alpha - The alpha (opacity) level, from 0 to 1.
 * @returns The RGBA color string (e.g., "rgba(255, 0, 0, 0.1)").
 */
export const hexToRGBA = (hex: string, alpha: number = 1): string => {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse the hex string
  let r: number, g: number, b: number;
  if (hex.length === 3) {
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    throw new Error('Invalid HEX color.');
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
