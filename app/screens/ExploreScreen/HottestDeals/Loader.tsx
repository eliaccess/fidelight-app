/**
 *
 * HottestDealsLoader
 *
 */
import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useLoaderAnimation } from 'hooks/useLoaderAnimation';
import Section, { SectionProps } from 'theme/Section';

import style from './style';

interface HottestDealsLoaderProps extends SectionProps {
  numberOfItems: number;
}

const HottestDealsLoader: React.FC<HottestDealsLoaderProps> = ({
  numberOfItems,
  ...props
}) => {
  const animatedStyle = useLoaderAnimation();

  return (
    <Section heading={props.heading} isLoading>
      <View style={style.loaderContainer}>
        <View>
          {Array.from({ length: 2 }, (_a, i) => (
            <Animated.View key={i} style={[style.loaderItem, animatedStyle]}>
              <Animated.View style={style.logoLoader} />
              <View style={style.contentWrapper}>
                <Animated.View style={style.titleLoader} />
                <Animated.View style={style.shortDescriptionLoader} />
              </View>
            </Animated.View>
          ))}
        </View>
        <View>
          {Array.from({ length: 2 }, (_a, i) => (
            <Animated.View key={i} style={[style.loaderItem, animatedStyle]}>
              <Animated.View style={style.logoLoader} />
              <View style={style.contentWrapper}>
                <Animated.View style={style.titleLoader} />
                <Animated.View style={style.shortDescriptionLoader} />
              </View>
            </Animated.View>
          ))}
        </View>
      </View>
    </Section>
  );
};

export default HottestDealsLoader;
