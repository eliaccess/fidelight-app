/**
 *
 * Button
 *
 */
import React, { useRef } from 'react';
import Animated from 'react-native-reanimated';
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
  const animatedValue = useRef(new Animated.Value(disabled ? 0.5 : 1)).current;

  // useEffect(() => {
  //   Animated.timing(animatedValue, {
  //     toValue: disabled ? 0.5 : 1,
  //     duration: 300,
  //     easing: Easing.inOut(Easing.ease),
  //     // useNativeDriver: true,
  //   }).start();
  // }, [animatedValue, disabled]);

  return (
    <TouchFeedback
      onPress={disabled ? () => null : onPress}
      style={[
        style.button,
        props.large ? style.large : {},
        props.flex ? style.flex : {},
        {
          // @ts-ignore
          opacity: animatedValue,
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
