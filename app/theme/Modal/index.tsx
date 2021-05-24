/**
 *
 * Modal
 *
 */
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import Icon from 'theme/Icon';
import TouchFeedback from 'theme/TouchFeedback';

import style from './style';
import { UseModalAnimation } from './animation';

interface ModalProps {
  visible: boolean;
  onRequestClose: (...args: any[]) => any;
  children: React.ReactNode;
}

function Modal(props: ModalProps) {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: props.visible ? 1 : 0,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [animation, props.visible]);
  const modalAnimation = UseModalAnimation(animation);

  return (
    <Animated.View style={[style.container, modalAnimation]}>
      <TouchFeedback
        onPress={props.onRequestClose}
        style={style.closeButtonHolder}
      >
        <Icon name="x" style={style.closeIcon} />
      </TouchFeedback>
      <View style={style.content}>{props.children}</View>
    </Animated.View>
  );
}
export default Modal;
