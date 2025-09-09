import { colors } from './colors';
import { spacing } from './spacing';
import { radii } from './radii';
import { shadows } from './shadows';
import { typography } from './typography';

export const tokens = {
  colors,
  spacing,
  radii,
  shadows,
  typography,
} as const;

export type Tokens = typeof tokens;

