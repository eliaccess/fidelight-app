/**
 *
 * Input
 *
 */
import omit from 'lodash/omit';
import React, { useRef, useState } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import * as Animatable from 'react-native-animatable';

import Radio from 'theme/Radio';
import Text from 'theme/Text';
import TouchFeedback from 'theme/TouchFeedback';
import { UseLabelAnimation } from './animation';
import style, { inputStyleProps } from './style';

export interface InputProps extends TextInputProps {
  error?: string | React.ReactNode;
  label?: string | React.ReactNode;
  style?: object;
  showSuccessInput?: boolean;
}

// @ts-ignore
const Input = React.forwardRef(
  // @ts-ignore
  ({ showSuccessInput = true, ...props }: InputProps, ref: React.RefObject) => {
    const [isCorrect, setIsCorrect] = useState(false);
    const animation = useRef(useSharedValue(props.value ? 1 : 0)).current;
    const onFocus = (e) => {
      animation.value = withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      });
      if (props?.onFocus) {
        setIsCorrect(false);
        // @ts-ignore
        props?.onFocus(e);
      }
    };
    const onBlur = (e) => {
      if (!props.value) {
        animation.value = withTiming(0, {
          duration: 400,
          easing: Easing.inOut(Easing.ease),
        });
      } else {
        setIsCorrect(true);
      }
      if (props?.onBlur) {
        // @ts-ignore
        props?.onBlur(e);
      }
    };

    const labelAnimation = UseLabelAnimation(animation);
    return (
      <TouchFeedback onPress={onFocus} style={style.container}>
        <TextInput
          {...inputStyleProps}
          onFocus={onFocus}
          onBlur={onBlur}
          blurOnSubmit
          {...omit(props, ['label', 'style', 'error', 'onFocus', 'onBlur'])}
          ref={ref}
          style={[
            style.input,
            props.style,
            props.error ? style.errorInput : {},
            !props.error && props.value ? style.successInput : {},
            props.multiline ? style.multiline : {},
          ]}
        />
        {props.label ? (
          <Text
            animated
            onPress={onFocus}
            style={[
              style.label,
              labelAnimation,
              props.multiline ? style.multilineLabel : {},
            ]}
          >
            {props.label}
          </Text>
        ) : null}
        {!props.error && props.value && isCorrect && showSuccessInput ? (
          <View style={style.inpuCheckbox}>
            <Radio type="checkbox" onPress={() => null} active />
          </View>
        ) : null}
        {props.error ? (
          <View style={style.errorWrapper}>
            <Animatable.View animation="fadeInDown" duration={300}>
              <Text style={style.error}>{props.error}</Text>
            </Animatable.View>
          </View>
        ) : null}
      </TouchFeedback>
    );
  },
);

export default Input;
