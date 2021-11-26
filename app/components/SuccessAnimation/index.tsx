/**
 *
 * SuccessAnimation
 *
 */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import animations from 'animations';
import LottieView from 'lottie-react-native';

import style from './style';

function SuccessAnimation(_props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    return () => setShow(false);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <View style={style.animationWrapper}>
      <LottieView
        style={style.animation}
        source={animations.success}
        ref={(animation) => {
          if (!animation) {
            return;
          }
          animation.play();
        }}
        loop={false}
      />
    </View>
  );
}
export default SuccessAnimation;
