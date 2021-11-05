/*
 *
 * HomeHeader
 *
 */

import { useUserLocation } from 'containers/UserLocation';
import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FormattedMessage from 'theme/FormattedMessage';
import Icon from 'theme/Icon';

import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import { buttonGradientProps } from 'theme/utils';

import messages from './messages';
import { useGetStyles } from './style';

type HomeHeader = {
  title?: string;
  onPressDrawer: (...arg: any) => any;
  onProfilePress: () => void;
  onCityPress: () => void;
};

function HomeHeader(props: HomeHeader) {
  const style = useGetStyles();
  const userLocation = useUserLocation();
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
        <TouchFeedback
          onPress={props.onCityPress}
          style={style.cityNameWrapper}
        >
          <Text style={style.cityName}>{userLocation?.data?.cityName}</Text>
          <Icon name="chevron-down" style={style.updateCityIcon} />
        </TouchFeedback>
        <TouchFeedback onPress={props.onProfilePress} style={style.avatar}>
          <Icon name="user" style={style.avatarIcon} />
        </TouchFeedback>
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
