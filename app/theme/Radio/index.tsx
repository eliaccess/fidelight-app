import React, { useRef, useEffect } from 'react';

import Icon from 'theme/Icon';
import Text from 'theme/Text';
import Colors from 'theme/Colors';
import TouchFeedback from 'theme/TouchFeedback';
import { Animated, Easing } from 'react-native';

import style from './style';
import { UseInnerSquareAnimation, UseSquareAnimation } from './animation';

type RadioProps = {
  active: boolean;
  label?: string | React.ReactNode;
  onPress: (...args: any[]) => any;
  type?: 'checkbox' | 'radio';
};

const Radio: React.FC<RadioProps> = ({ type = 'radio', ...props }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.active ? 1 : 0,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [animation, props.active]);

  const squareAnimation = UseSquareAnimation(animation);
  const innerSquareAnimation = UseInnerSquareAnimation(animation);
  return (
    <TouchFeedback onPress={props.onPress} style={style.container}>
      {props.label && (
        <Text style={[style.label, props.active && style.activeLabel]}>
          {props.label}
        </Text>
      )}
      {type !== 'radio' ? (
        <Animated.View style={[style.square, squareAnimation]}>
          <Animated.View style={[style.innerSquare, innerSquareAnimation]}>
            <Icon name="check" size={14} color={Colors.accentReverse} />
          </Animated.View>
        </Animated.View>
      ) : (
        <Animated.View style={[style.circle, squareAnimation]}>
          <Animated.View style={[style.innerCircle, innerSquareAnimation]} />
        </Animated.View>
      )}
    </TouchFeedback>
  );
};

export default Radio;
