import { Colors } from './colors';
import { Fonts } from './fonts';
import { Sizes } from './sizes';

const theme = {
  Colors,
  Fonts,
  Sizes,
};

export type Theme = typeof theme;

export { theme };
