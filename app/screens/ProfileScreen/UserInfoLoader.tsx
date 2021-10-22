/**
 *
 * UserInfoLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';

import style from './style';

interface UserInfoLoaderProps {
  numberOfItems: number;
}

const UserInfoLoader: React.FC<UserInfoLoaderProps> = ({ numberOfItems }) => {
  const animatedStyle = useLoaderAnimation();
  return (
    <View style={style.userInfoSection}>
      {Array.from(Array(numberOfItems), (_a, i) => (
        <Animated.View key={i} style={style.userInfoLoader}>
          <Animated.View style={[style.avatarLoader, animatedStyle]} />
          <View style={style.userInfo}>
            <Animated.View style={[style.userNameLoader, animatedStyle]} />
            <Animated.View style={[style.userPhoneLoader, animatedStyle]} />
          </View>
        </Animated.View>
      ))}
    </View>
  );
};

export default UserInfoLoader;
