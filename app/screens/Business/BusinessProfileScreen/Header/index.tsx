/*
 *
 * EntityHeader
 *
 */

import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';

import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import Image from 'theme/Image';

import style from './style';

type EntityHeaderProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  data: IBusinessUser;
};

function EntityHeader(props: EntityHeaderProps) {
  const animation = useRef(useSharedValue(0)).current;
  useEffect(() => {
    animation.value = withTiming(1, {
      duration: 3000,
      easing: Easing.ease,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
