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
import TouchFeedback from 'theme/TouchFeedback';
import { buttonGradientProps } from 'theme/utils';

import messages from './messages';
import style from './style';

type HomeHeader = {
  title?: string;
  onPressDrawer: (...arg: any) => any;
};

function HomeHeader(props: HomeHeader) {
  return (
    <View style={style.container}>
      <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
      <View style={style.iconsWrapper}>
        <TouchFeedback
          onPress={props.onPressDrawer}
          style={style.menuIconWrapper}
        >
          <Icon name="menu" style={style.menuIcon} />
        </TouchFeedback>
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
