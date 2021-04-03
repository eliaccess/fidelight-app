import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Colors from 'theme/Colors';

import Text from 'theme/Text';

import BackButton from './BackButton';
import style from './style';

interface HeaderProps {
  title?: React.ReactNode | string;
  onBackPress?: (...args: any[]) => any;
  visibleValue: {
    value: number;
  };
  blockBackPress?: boolean;
  dark: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  const titleAnimation = useAnimatedStyle(() => {
    const opacity = interpolate(props.visibleValue.value, [0, 1], [0, 1]);
    return {
      opacity,
    };
  });

  const headerAnimation = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      props.visibleValue.value,
      [0, 1],
      [Colors.transparent, Colors.white],
    );
    const borderBottomColor = interpolateColor(
      props.visibleValue.value,
      [0, 1],
      [Colors.transparent, Colors.white],
    );
    return {
      backgroundColor,
      borderBottomColor,
    };
  });

  return (
    <Animated.View style={[style.header, headerAnimation]} key="header">
      <View style={[style.headerContent]}>
        {!props.blockBackPress ? <BackButton {...props} /> : null}
        <Text animated style={[style.title, titleAnimation]} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
    </Animated.View>
  );
};

export default React.memo(Header);
