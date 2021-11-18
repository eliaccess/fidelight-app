/**
 *
 * RewardsSectionLoader
 *
 */
import { useLoaderAnimation } from 'hooks/useLoaderAnimation';
import React from 'react';
import { View } from 'react-native';

import Animated from 'react-native-reanimated';

import Section, { SectionProps } from 'theme/Section';
import style from './style';

interface RewardsSectionLoaderProps extends SectionProps {}

const RewardsSectionLoader: React.FC<RewardsSectionLoaderProps> = (props) => {
  const animatedStyle = useLoaderAnimation();

  return (
    <View style={style.rewardSectionContainer}>
      <Section heading={props.heading} isLoading>
        <Animated.View style={[style.loaderStyle, animatedStyle]} />
        <Animated.View style={[style.loaderStyle, animatedStyle]} />
      </Section>
    </View>
  );
};

export default RewardsSectionLoader;
