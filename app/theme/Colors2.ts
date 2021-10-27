import React from 'react';
import { darkTheme, lightTheme } from './Colors';

import { ThemeContext } from './ThemeManager';

export function useColors() {
  // @ts-ignore
  const { theme } = React.useContext(ThemeContext);

  if (theme === 'dark') {
    return darkTheme;
  }

  return lightTheme;
}
