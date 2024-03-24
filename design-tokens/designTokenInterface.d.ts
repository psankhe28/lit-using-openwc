interface DesignTokenItem {
  value: string;
  description: string;
  type: string;
}

interface DesignTokenItemValue {
  value: number;
  description: string;
  type: string;
}

interface DesignTokens {
  borderRadii: Record<string, DesignTokenItem>;
  colors: Record<string, DesignTokenItem>;
  spacing: Record<string, DesignTokenItem>;
  shadows: Record<string, DesignTokenItem>;
  textAlignment:Record<string, DesignTokenItem>;
  zIndex: Record<string, DesignTokenItemValue>;
}

export { DesignTokenItem, DesignTokens };
