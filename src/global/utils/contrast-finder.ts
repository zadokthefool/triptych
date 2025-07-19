// Utility function to calculate luminance and decide text color
const getContrastColor = (hexColor: `#${string}`): `#${string}` => {
  // Helper function to convert hex to RGB
  const hexToRgb = (hex: `#${string}`): number[] => {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  };

  // Helper function to calculate luminance
  const calculateLuminance = (r: number, g: number, b: number): number => {
    const normalize = (value: number) => {
      const channel = value / 255;
      return channel <= 0.03928
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4);
    };

    const [rLum, gLum, bLum] = [normalize(r), normalize(g), normalize(b)];
    return 0.2126 * rLum + 0.7152 * gLum + 0.0722 * bLum;
  };

  const [r, g, b] = hexToRgb(hexColor);

  // Calculate luminance of the background color
  const luminance = calculateLuminance(r, g, b);

  // If luminance is less than 0.5, use white font; otherwise, use black font
  return luminance < 0.5 ? '#ffffff' : '#222222';
};

export default getContrastColor;
