/**
 *
 * UserInfoLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSkeletonValue } from 'react-native-animated-skeleton';

import style from './style';

interface UserInfoLoaderProps {
  numberOfItems: number;
}

const { interpolate, Extrapolate } = Animated;

const UserInfoLoader: React.FC<UserInfoLoaderProps> = ({ numberOfItems }) => {
  const progress: Animated.Value<number> = useSkeletonValue();
  const length = numberOfItems;
  const delta = 1 / length;

  return (
    <View style={style.userInfoSection}>
      {Array.from(Array(numberOfItems), (_a, i) => {
        const start = i * delta;
        const end = start + delta;
        const opacity = interpolate(progress, {
          inputRange: [start, end],
          outputRange: [0.4, 1],
          extrapolate: Extrapolate.CLAMP,
        });
        return (
          <Animated.View key={i} style={style.userInfoLoader}>
            <Animated.View style={[style.avatarLoader, { opacity }]} />
            <View style={style.userInfo}>
              <Animated.View style={[style.userNameLoader, { opacity }]} />
              <Animated.View style={[style.userPhoneLoader, { opacity }]} />
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default UserInfoLoader;
