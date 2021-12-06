/*
 *
 * EntityHeader
 *
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { screenTopGradientProps } from 'theme/utils';
import Image from 'theme/Image';

import style from './style';

type EntityHeaderProps = {
  data: IBusinessUser;
};

function EntityHeader(props: EntityHeaderProps) {
  const animation = useRef(useSharedValue(0)).current;
  useEffect(() => {
    animation.value = withTiming(1, {
      duration: 3000,
      easing: Easing.ease,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(animation.value, [0, 1], [1.2, 1]);
    return {
      transform: [
        {
          scale,
        },
      ],
    };
  });

  return (
    <View style={style.container}>
      <View style={style.coverImageWrapper}>
        <Image
          animated
          uri={props.data.backgroundPicture}
          style={[style.coverImage, animatedStyle]}
          resizeMode="cover"
        />
        <LinearGradient {...screenTopGradientProps()} style={style.backdrop} />
      </View>

      <View style={style.content}>
        <View style={style.logoWrapper}>
          <Image
            uri={props.data.logoUrl}
            style={style.logo}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
}

export default React.memo(EntityHeader);
