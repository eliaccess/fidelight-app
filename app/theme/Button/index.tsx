/**
 *
 * Button
 *
 */
import React, { useEffect, useRef } from 'react';
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import { buttonGradientProps } from 'theme/utils';

import Text from 'theme/Text';
import Icon from 'theme/Icon';
import Image, { IImageProps } from 'theme/Image';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';

const typeBackground = {
  primary: style.primaryButton,
  accent: style.accentButton,
  tertiary: style.tertiaryButton,
  apple: style.appleButton,
  linear: style.linearButton,
};
const typeForeground = {
  primary: style.primaryForeground,
  accent: style.accentForeground,
  tertiary: style.tertiaryForeground,
  apple: style.tertiaryForeground,
  linear: style.linearForeground,
};

interface ButtonProps {
  onPress: (...args: any[]) => any;
  icon?: string;
  image?: IImageProps;
  label: string | React.ReactNode;
  isFilled?: boolean;
  mini?: boolean;
  flex?: boolean;
  type?: 'primary' | 'accent' | 'tertiary' | 'apple' | 'linear';
  disabled?: boolean;
  large?: boolean;
  trailingIcon?: boolean;
  [x: string]: any;
}
const Button: React.FC<ButtonProps> = ({
  isFilled = true,
  type = 'linear',
  disabled = false,
  onPress,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const _animation = useRef(useSharedValue(disabled ? 0.5 : 1)).current;
  // useEffect(() => {
  //   animation.value = withTiming(disabled ? 0.5 : 1, {
  //     duration: 400,
  //     easing: Easing.inOut(Easing.ease),
  //   });
  // }, [animation, disabled]);

  // const animatedStyle = useAnimatedStyle(() => {
  //   const opacity = interpolate(
  //     animation.value,
  //     [0, 1],
  //     [0, 1],
  //     Extrapolate.CLAMP,
  //   );
  //   return { opacity };
  // });

  return (
    <TouchFeedback
      onPress={disabled ? () => null : onPress}
      style={[
        style.button,
        props.large ? style.large : {},
        props.flex ? style.flex : {},
        {
          // ...animatedStyle,
          ...typeBackground[type],
        },
      ]}
    >
      {type === 'linear' ? (
        <LinearGradient {...buttonGradientProps()} style={style.backdrop} />
      ) : null}
      {props.icon && !props.trailingIcon ? (
        <Icon
          name={props.icon}
          style={[
            style.icon,
            typeForeground[type],
            props.large ? style.largeIcon : {},
          ]}
        />
      ) : null}

      {props.image ? <Image style={style.image} {...props.image} /> : null}

      <Text
        animated
        style={[
          style.label,
          typeForeground[type],
          props.large ? style.largeLabel : {},
        ]}
        numberOfLines={2}
      >
        {props.label}
      </Text>
    </TouchFeedback>
  );
};

export default Button;
