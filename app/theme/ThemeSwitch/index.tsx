/*
 *
 * Search
 *
 */

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import { buttonGradientProps } from 'theme/utils';
import { ThemeContext } from 'theme/ThemeManager';
import { useGetStyles } from './style';

function ThemeSwitch() {
  const style = useGetStyles();

  // @ts-ignore
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <>
      <TouchFeedback onPress={toggleTheme} style={[style.container]}>
        <View style={style.innerContainer}>
          <LinearGradient {...buttonGradientProps()} style={style.backdrop} />

          {theme === 'light' ? (
            <Icon animated name="moon" style={[style.themeIcon]} />
          ) : (
            <Icon animated name="sun" style={[style.themeIcon]} />
          )}
        </View>
      </TouchFeedback>
    </>
  );
}

export default React.memo(ThemeSwitch);
