import { borderRadii } from './borderRadii/borderRadii.js';
import { colors } from './colors/colors.js';
import { spacing } from './spacing/spacing.js';
import { shadows } from './shadows/shadows.js';
import { textAlignment } from './textAlignment/textAlignment.js';
import { zIndex } from './zIndex/zIndex.js';

import { DesignTokenItem, DesignTokens } from './designTokenInterface.js';

const tokens: Record<string, string> = {};

const designTokens: DesignTokens = {
  borderRadii: borderRadii.borderRadii,
  colors: colors.colors,
  spacing: spacing.spacing,
  shadows: shadows.shadows,
  textAlignment:textAlignment.alignment,
  zIndex: zIndex.zIndex,
};

for (const token of Object.values(designTokens)) {
  for (const [tokenName, tokenValue] of Object.entries<DesignTokenItem>(
    token
  )) {
    tokens[`${tokenName}`] = tokenValue.value;
  }
}

export { tokens };
