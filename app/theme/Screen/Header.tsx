import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
// import Colors from 'theme/Colors';

import Text from 'theme/Text';
import { buttonGradientProps } from 'theme/utils';

import BackButton from './BackButton';
import style from './style';

interface HeaderProps {
  title?: React.ReactNode | string;
  onBackPress?: (...args: any[]) => any;
  visibleValue: Animated.Value<0 | 1>;
  blockBackPress?: boolean;
  dark: boolean;
  isAnimated: boolean;
  headerRight?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  // const opacity = props.visibleValue;

  // const headerAnimation = {
  //   backgroundColor: Animated.interpolate(props.visibleValue, {
  //     inputRange: [0, 1],
  //     outputRange: [Colors.transparent, Colors.white],
  //   }),
  //   borderBottomColor: Animated.interpolate(props.visibleValue, {
  //     inputRange: [0, 1],
  //     outputRange: [Colors.transparent, Colors.white],
  //   }),
  // };

  return (
    <Animated.View style={[style.header]} key="header">
      {props.title ? (
        <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
      ) : null}
      <View style={[style.headerContent]}>
        {!props.blockBackPress ? (
          <BackButton {...props} dark={!props.title} />
        ) : null}
        <Text
          animated
          style={[style.title, props.isAnimated ? null : null]}
          numberOfLines={1}
        >
          {props.title}
        </Text>
        {props.headerRight ? props.headerRight : null}
      </View>
    </Animated.View>
  );
};

export default React.memo(Header);
