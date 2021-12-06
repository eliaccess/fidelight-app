/*
 *
 * HomeScreen TabBarButtonButton
 *
 */

import React, { useRef, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { buttonGradientProps } from 'theme/utils';
import Icon from 'theme/Icon';

import { UseAnimatedIcon } from './animations';
import style from './style';

type TabBarButtonProps = {
  route: {
    key: string;
    icon: string;
    major?: boolean;
    font?: string;
  };
  active?: boolean;
  onPress: (...args: any) => any;
};

function TabBarButton({ active = false, ...props }: TabBarButtonProps) {
  const animationValue = useRef(useSharedValue(active ? 0 : 1)).current;

  useEffect(() => {
    animationValue.value = withTiming(active ? 1 : 0, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  }, [props]);

  const animatedIcon = UseAnimatedIcon(animationValue);
  if (props.route.major) {
    return (
      <TouchableWithoutFeedback onPress={props.onPress}>
        <Animated.View
          style={[style.tabBarButton, style.tabBarMajorButtonView]}
        >
          <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
          <Icon
            animated
            font="ionicons"
            name={props.route.icon}
            style={style.tabBarMajorButtonIcon}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Animated.View style={style.tabBarButton}>
        <Icon
          animated
          name={props.route.icon}
          // @ts-ignore
          font={props.route?.font}
          style={[style.tabBarButtonIcon, animatedIcon]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default React.memo(TabBarButton);
