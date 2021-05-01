/*
 *
 * HomeHeader
 *
 */

import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FormattedMessage from 'theme/FormattedMessage';
import Icon from 'theme/Icon';
import Image from 'theme/Image';
import { buttonGradientProps } from 'theme/utils';

import messages from './messages';
import style from './style';

type HomeHeader = {
  title?: string;
};

function HomeHeader(_props: HomeHeader) {
  return (
    <View style={style.container}>
      <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
      <View style={style.iconsWrapper}>
        <View style={style.menuIconWrapper}>
          <Icon name="menu" style={style.menuIcon} />
        </View>
        <Image title="thumbLogo" style={style.logo} />
        <View style={style.avatar}>
          <Image title="avatar" style={style.avatarImage} resizeMode="cover" />
        </View>
      </View>
      <View style={style.searchBarWrapper}>
        <Icon name="search" style={style.searchIcon} />
        <FormattedMessage
          {...messages.searchPlaceHolder}
          style={style.searchPlaceHolder}
        />
      </View>
    </View>
  );
}

export default React.memo(HomeHeader);
