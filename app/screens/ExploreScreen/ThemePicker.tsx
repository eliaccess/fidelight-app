/*
 *
 * Search
 *
 */

import React, { useState } from 'react';
import { Switch } from 'react-native';

import Colors from 'theme/Colors';
import { ThemeContext } from 'theme/ThemeManager';

function ThemePicker() {
  // @ts-ignore
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const [value, setValue] = useState(theme === 'dark');
  return (
    <>
      <Switch
        trackColor={{ false: Colors.textGrey, true: Colors.accent }}
        onValueChange={() => {
          if (value) {
            setValue(false);
          } else {
            setValue(true);
          }
          toggleTheme();
        }}
        value={value}
      />
    </>
  );
}

export default React.memo(ThemePicker);
